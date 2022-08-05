import StoryblokClient from "storyblok-js-client";

export const storyblokPreviewClient = new StoryblokClient({
  accessToken: process.env.STORYBLOK_TOKEN,
  cache: {
    clear: "auto",
    type: "memory",
  },
});
