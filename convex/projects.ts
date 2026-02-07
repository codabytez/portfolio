import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  async handler(ctx) {
    return ctx.db
      .query("projects")
      .order("asc")
      .collect()
      .then((projects) => projects.sort((a, b) => a.order - b.order));
  },
});

export const get = query({
  args: { id: v.id("projects") },
  async handler(ctx, args) {
    return ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    longDescription: v.string(),
    image: v.string(),
    tags: v.array(v.string()),
    link: v.optional(v.string()),
    github: v.optional(v.string()),
    featured: v.boolean(),
    order: v.number(),
  },
  async handler(ctx, args) {
    return ctx.db.insert("projects", {
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("projects"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    longDescription: v.optional(v.string()),
    image: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    link: v.optional(v.string()),
    github: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    order: v.optional(v.number()),
  },
  async handler(ctx, args) {
    const { id, ...updates } = args;
    await ctx.db.patch(id, {
      ...updates,
      updatedAt: Date.now(),
    });
    return ctx.db.get(id);
  },
});

export const reorder = mutation({
  args: {
    projects: v.array(
      v.object({
        id: v.id("projects"),
        order: v.number(),
      }),
    ),
  },
  async handler(ctx, args) {
    // Update all projects with their new order
    await Promise.all(
      args.projects.map(({ id, order }) =>
        ctx.db.patch(id, { order, updatedAt: Date.now() }),
      ),
    );
  },
});

export const remove = mutation({
  args: { id: v.id("projects") },
  async handler(ctx, args) {
    await ctx.db.delete(args.id);
  },
});
