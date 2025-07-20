// convex/functions/index.ts

import { mutation, query } from "../_generated/server"; 

import { v } from "convex/values";

// QUERY: Get all podcasts
export const getAllPodcasts = query(async ({ db }) => {
  return await db.query("podcasts").order("desc").collect();
});

// QUERY: Get a podcast by ID
export const getPodcastById = query({
  args: {
    id: v.id("podcasts"),
  },
  handler: async ({ db }, args) => {
    return await db.get(args.id);
  },
});

// MUTATION: Create a new podcast
export const createPodcast = mutation({
  args: {
    audioStorageId: v.union(v.id("_storage"), v.null()),
    user: v.id("users"),
    podcastTitle: v.string(),
    podcastDescription: v.string(),
    audioUrl: v.union(v.string(), v.null()),
    imageUrl: v.union(v.string(), v.null()),
    imageStorageId: v.union(v.id("_storage"), v.null()),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
    voicePrompt: v.string(),
    imagePrompt: v.union(v.string(), v.null()),
    voiceType: v.string(),
    audioDuration: v.number(),
    views: v.number(),
  },
  handler: async ({ db }, args) => {
    const podcastId = await db.insert("podcasts", args);
    return podcastId;
  },
});

// MUTATION: Update podcast views
export const incrementViews = mutation({
  args: {
    id: v.id("podcasts"),
  },
  handler: async ({ db }, args) => {
    const podcast = await db.get(args.id);
    if (!podcast) throw new Error("Podcast not found");

    await db.patch(args.id, { views: podcast.views + 1 });
  },
});
