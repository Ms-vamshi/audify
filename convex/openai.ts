import { v } from "convex/values";
import { action } from "./_generated/server";
import OpenAI from "openai";

// 🔹 Action to generate a thumbnail using DALL·E
export const generateThumbnailAction = action({
  args: {
    prompt: v.string(),
  },
  handler: async (_ctx, args) => {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: args.prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    const url = response.data?.[0]?.url;
    if (!url) throw new Error("Failed to generate image");

    const imageResponse = await fetch(url);
    return await imageResponse.arrayBuffer();
  },
});

// 🔹 Action to generate audio using OpenAI Text-to-Speech
export const generateAudioAction = action({
  args: {
    input: v.string(),
    voice: v.union(
      v.literal("alloy"),
      v.literal("echo"),
      v.literal("fable"),
      v.literal("onyx"),
      v.literal("nova"),
      v.literal("shimmer")
    ),
  },
  handler: async (_ctx, args) => {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: args.voice,
      input: args.input,
    });

    return await response.arrayBuffer();
  },
});
