import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  async handler(ctx) {
    const profiles = await ctx.db.query("profile").collect();
    return profiles[0] || null;
  },
});

export const update = mutation({
  args: {
    name: v.optional(v.string()),
    title: v.optional(v.string()),
    bio: v.optional(v.string()),
    shortBio: v.optional(v.string()),
    email: v.optional(v.string()),
    avatar: v.optional(v.string()),
  },
  async handler(ctx, args) {
    const profile = await ctx.db.query("profile").first();

    if (profile) {
      await ctx.db.patch(profile._id, {
        ...args,
        updatedAt: Date.now(),
      });
      return ctx.db.get(profile._id);
    } else {
      return ctx.db.insert("profile", {
        name: args.name || "Your Name",
        title: args.title || "Frontend Developer",
        bio: args.bio || "",
        shortBio: args.shortBio || "",
        email: args.email || "",
        avatar: args.avatar || "",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    }
  },
});
