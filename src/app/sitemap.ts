import type { MetadataRoute } from "next";
import { stories } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://lumusstudio.com.br", lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...stories.map((story) => ({
      url: `https://lumusstudio.com.br/stories/${story.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}

