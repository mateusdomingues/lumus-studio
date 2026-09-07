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
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".story-entry").forEach((entry) => {
          gsap.from(entry, {
            y: 70,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: entry, start: "top 83%", once: true },
          });
        });
      });
      mm.add("(max-width: 899px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".story-entry").forEach((entry, index) => {
          const image = entry.querySelector<HTMLElement>(".story-entry__image");
          const innerImage = image?.querySelector("img");
          const metadata = entry.querySelector<HTMLElement>(".story-entry__meta");
          const timeline = gsap.timeline({
            scrollTrigger: { trigger: entry, start: "top 86%", once: true },
          });

          if (image) {
            timeline.fromTo(
              image,
              { clipPath: index % 2 === 0 ? "inset(0 0 100% 0)" : "inset(0 100% 0 0)" },
              { clipPath: "inset(0 0 0% 0)", duration: 1, ease: "power3.inOut" },
            );
          }
          if (innerImage) {
            timeline.fromTo(innerImage, { scale: 1.05 }, { scale: 1, duration: 1.15, ease: "power3.out" }, 0);
          }
          timeline.from(metadata, { y: 22, autoAlpha: 0, duration: 0.65, ease: "power2.out" }, "-=0.32");
        });
      });

      return () => mm.revert();
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
