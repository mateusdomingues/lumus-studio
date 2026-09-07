"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import type { Story } from "@/data/projects";
import { stories } from "@/data/projects";
import { gsap } from "@/lib/gsap";

export function StoryPageView({ story }: { story: Story }) {
  const rootRef = useRef<HTMLElement>(null);
  const index = stories.findIndex((item) => item.slug === story.slug);
  const nextStory = stories[(index + 1) % stories.length];

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".project-hero__image", { clipPath: "inset(0 0 100% 0)", duration: 1.1 })
        .from(".project-hero__meta > *", { y: 30, autoAlpha: 0, stagger: 0.08, duration: 0.7 }, "-=0.55");
      gsap.utils.toArray<HTMLElement>(".project-gallery figure").forEach((figure) => {
        gsap.from(figure, {
          y: 60,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: figure, start: "top 86%", once: true },
        });
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <main ref={rootRef} className="project-page">
      <header className="project-header">
        <Link href="/" className="wordmark">LUMUS</Link>
        <Link href="/#stories">Fechar</Link>
      </header>
      <section className="project-hero">
        <div className="project-hero__image">
          <Image src={story.cover.src} alt={story.cover.alt} fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: story.cover.position ?? "center" }} />
        </div>
        <div className="project-hero__meta section-shell">
          <p><span>{story.number}</span>{story.category}</p>
          <h1 className="display-type">{story.title}</h1>
          <p>{story.location} — {story.year}</p>
        </div>
      </section>
      <section className="project-intro section-shell">
        <p className="eyebrow">The story</p>
        <p className="display-type">{story.intro}</p>
      </section>
      <section className="project-gallery section-shell" aria-label={`Galeria ${story.title}`}>
        {story.gallery.map((image, imageIndex) => (
          <figure key={`${image.src}-${imageIndex}`}>
            <Image src={image.src} alt={image.alt} fill sizes={imageIndex % 3 === 0 ? "100vw" : "(max-width: 767px) 100vw, 65vw"} style={{ objectFit: "cover", objectPosition: image.position ?? "center" }} />
          </figure>
        ))}
      </section>
      <Link className="next-story dark-section" href={`/stories/${nextStory.slug}`}>
        <span className="eyebrow">Next story</span>
        <strong className="display-type">{nextStory.title}</strong>
        <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}

