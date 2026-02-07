import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  async handler(ctx) {
    const settings = await ctx.db.query("settings").first();
    return settings || null;
  },
});

export const update = mutation({
  args: {
    github: v.optional(v.string()),
    linkedin: v.optional(v.string()),
    twitter: v.optional(v.string()),
    instagram: v.optional(v.string()),
    portfolio: v.optional(v.string()),
    resume: v.optional(v.string()),
    theme: v.optional(v.string()),
    customFields: v.optional(
      v.array(
        v.object({
          key: v.string(),
          label: v.string(),
          value: v.string(),
        }),
      ),
    ),
  },
  async handler(ctx, args) {
    const settings = await ctx.db.query("settings").first();

    if (settings) {
      await ctx.db.patch(settings._id, {
        ...args,
        updatedAt: Date.now(),
      });
      return ctx.db.get(settings._id);
    } else {
      return ctx.db.insert("settings", {
        github: args.github,
        linkedin: args.linkedin,
        twitter: args.twitter,
        instagram: args.instagram,
        portfolio: args.portfolio,
        resume: args.resume,
        theme: args.theme || "dark",
        customFields: args.customFields || [],
        updatedAt: Date.now(),
      });
    }
  },
});
