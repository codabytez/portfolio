import { query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Get profile/about information
 * Returns the most recently updated profile
 */
export const getProfile = query({
  handler: async (ctx) => {
    const profile = await ctx.db.query("profile").order("desc").first();
    return profile;
  },
});

/**
 * Get all projects
 * Returns all projects ordered by their order field
 */
export const getProjects = query({
  handler: async (ctx) => {
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_order")
      .collect();
    return projects;
  },
});

/**
 * Get featured projects only
 * Returns projects marked as featured, ordered by order field
 */
export const getFeaturedProjects = query({
  handler: async (ctx) => {
    const projects = await ctx.db
      .query("projects")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .collect();

    // Sort by order field
    return projects.sort((a, b) => a.order - b.order);
  },
});

/**
 * Get a single project by ID
 */
export const getProjectById = query({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    return ctx.db.get(args.id);
  },
});

/**
 * Get all skills
 * Returns all skills, optionally filtered by category
 */
export const getSkills = query({
  handler: async (ctx) => {
    const skills = await ctx.db.query("skills").collect();

    // Sort by order if available, otherwise by title
    return skills.sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      return a.title.localeCompare(b.title);
    });
  },
});

/**
 * Get skills grouped by category
 */
export const getSkillsByCategory = query({
  handler: async (ctx) => {
    const skills = await ctx.db.query("skills").collect();

    // Group skills by categories
    const grouped: Record<string, typeof skills> = {};

    skills.forEach((skill) => {
      skill.categories.forEach((category) => {
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(skill);
      });
    });

    // Sort skills within each category
    Object.keys(grouped).forEach((category) => {
      grouped[category].sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return a.title.localeCompare(b.title);
      });
    });

    return grouped;
  },
});

/**
 * Get all experience entries
 * Returns experience ordered by order field
 */
export const getExperience = query({
  handler: async (ctx) => {
    const experience = await ctx.db
      .query("experience")
      .withIndex("by_order")
      .collect();
    return experience;
  },
});

/**
 * Get settings/social links
 * Returns the most recently updated settings
 */
export const getSettings = query({
  handler: async (ctx) => {
    const settings = await ctx.db.query("settings").order("desc").first();
    return settings;
  },
});

/**
 * Get complete portfolio data
 * Returns all data needed for the portfolio in a single query
 */
export const getPortfolioData = query({
  handler: async (ctx) => {
    const [profile, projects, skills, experience, settings] = await Promise.all(
      [
        ctx.db.query("profile").order("desc").first(),
        ctx.db.query("projects").withIndex("by_order").collect(),
        ctx.db.query("skills").collect(),
        ctx.db.query("experience").withIndex("by_order").collect(),
        ctx.db.query("settings").order("desc").first(),
      ],
    );

    // Sort skills
    const sortedSkills = skills.sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      return a.title.localeCompare(b.title);
    });

    return {
      profile,
      projects,
      skills: sortedSkills,
      experience,
      settings,
    };
  },
});
