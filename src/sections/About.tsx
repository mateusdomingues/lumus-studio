"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function About() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const context = gsap.context(() => {
      gsap.from(".about__image img", {
        scale: 1.08,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: { trigger: root, start: "top 72%", once: true },
      });
      gsap.from(".about__copy > *", {
        y: 28,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about__copy", start: "top 82%", once: true },
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} id="studio" className="about section-shell" aria-labelledby="about-title">
      <div className="about__image">
        <Image src="/images/studio/backstage.jpg" alt="Equipe nos bastidores de um evento de moda" fill sizes="(max-width: 767px) 100vw, 65vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="about__copy">
        <p className="eyebrow">Studio</p>
        <h2 id="about-title" className="display-type">A Lumus observa o que acontece — e o que quase passa despercebido.</h2>
        <p>
          Um estúdio visual dedicado a transformar eventos em memória, narrativa e conteúdo de marca. Presentes o suficiente para perceber; discretos o suficiente para não interromper.
        </p>
      </div>
    </section>
  );
}

