"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { stories } from "@/data/projects";
import { gsap } from "@/lib/gsap";

export function SelectedStories() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".story-entry").forEach((entry) => {
        gsap.from(entry, {
          y: 70,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: entry, start: "top 83%", once: true },
        });
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} id="stories" className="stories section-shell" aria-labelledby="stories-title">
      <header className="section-heading">
        <p className="eyebrow">Histórias selecionadas</p>
        <h2 id="stories-title" className="display-type">Histórias escolhidas pelo que ainda fazem sentir.</h2>
      </header>
      <div className="stories__list">
        {stories.map((story, index) => (
          <article className={`story-entry story-entry--${index + 1}`} key={story.slug}>
            <Link href={`/stories/${story.slug}`} className="story-entry__image" aria-label={`Ver projeto ${story.title}`}>
              <Image
                src={story.cover.src}
                alt={story.cover.alt}
                fill
                sizes={index === 2 ? "100vw" : "(max-width: 767px) 100vw, 65vw"}
                style={{ objectFit: "cover", objectPosition: story.cover.position ?? "center" }}
              />
              <span className="story-entry__view" aria-hidden="true">Ver</span>
            </Link>
            <Link href={`/stories/${story.slug}`} className="story-entry__meta">
              <span className="story-entry__number">{story.number}</span>
              <div>
                <p>{story.category}</p>
                <h3 className="display-type">{story.title}</h3>
              </div>
              <p>{story.location} — {story.year}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
