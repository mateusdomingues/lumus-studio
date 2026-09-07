"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { eventIndex } from "@/data/projects";
import { gsap } from "@/lib/gsap";

export function EventsIndex() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const preview = eventIndex[active].image;

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(max-width: 899px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".events-index__header > *", {
          y: 30,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: ".events-index__header", start: "top 84%", once: true },
        });
        gsap.from(".events-index__list a", {
          x: 28,
          autoAlpha: 0,
          stagger: 0.08,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: { trigger: ".events-index__list", start: "top 86%", once: true },
        });
      });

      return () => mm.revert();
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} className="events-index section-shell" aria-labelledby="events-title">
      <div className="events-index__header">
        <p className="eyebrow">Eventos</p>
        <h2 id="events-title" className="display-type">A mesma atenção, em diferentes escalas.</h2>
      </div>
      <div className="events-index__body">
        <div className="events-index__preview" aria-hidden="true">
          <Image src={preview.src} alt="" fill sizes="40vw" style={{ objectFit: "cover", objectPosition: preview.position ?? "center" }} />
        </div>
        <nav className="events-index__list" aria-label="Categorias de eventos">
          {eventIndex.map((item, index) => (
            <Link
              href={item.href}
              key={item.label}
              className={index === 0 ? "is-primary" : ""}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span>{item.number}</span><strong className="display-type">{item.label}</strong>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
