import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryPageView } from "@/components/StoryPageView";
import { getStory, stories } from "@/data/projects";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: PageProps<"/stories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return {
    title: `${story.title} — ${story.category}`,
    description: story.intro,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: { title: story.title, description: story.intro, images: [story.cover.src] },
    twitter: { card: "summary_large_image", title: story.title, description: story.intro, images: [story.cover.src] },
  };
}

export default async function StoryPage({ params }: PageProps<"/stories/[slug]">) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();
  return <StoryPageView story={story} />;
}

