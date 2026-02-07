import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Profile/About section
  profile: defineTable({
    name: v.string(),
    title: v.string(),
    bio: v.string(),
    shortBio: v.string(),
    email: v.string(),
    avatar: v.string(), // URL to avatar image
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_creation", ["createdAt"]),

  // Projects
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    longDescription: v.string(),
    image: v.string(), // URL to project image
    tags: v.array(v.string()),
    link: v.optional(v.string()),
    github: v.optional(v.string()),
    featured: v.boolean(),
    order: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_featured", ["featured"])
    .index("by_order", ["order"]),

  // Skills/Experience
  skills: defineTable({
    title: v.string(),
    // Change from single category to array
    categories: v.array(v.string()),
    proficiency: v.number(),
    description: v.optional(v.string()),
    order: v.optional(v.number()),
    createdAt: v.optional(v.number()),
    updatedAt: v.optional(v.number()),
  }),

  // Experience entries
  experience: defineTable({
    company: v.string(),
    position: v.string(),
    description: v.string(),
    startDate: v.string(),
    endDate: v.optional(v.string()),
    current: v.boolean(),
    order: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_order", ["order"]),

  // Social links & settings
  settings: defineTable({
    github: v.optional(v.string()),
    linkedin: v.optional(v.string()),
    twitter: v.optional(v.string()),
    instagram: v.optional(v.string()),
    portfolio: v.optional(v.string()),
    resume: v.optional(v.string()), // URL to resume PDF
    theme: v.string(), // "light" | "dark"
    customFields: v.array(
      v.object({
        key: v.string(),
        label: v.string(),
        value: v.string(),
      }),
    ),
    updatedAt: v.number(),
  }).index("by_creation", ["updatedAt"]),

  // Users
  users: defineTable({
    email: v.string(),
    passwordHash: v.string(),
    name: v.string(),
    role: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_email", ["email"]),
});
