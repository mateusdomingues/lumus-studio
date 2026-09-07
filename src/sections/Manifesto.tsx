"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function Manifesto() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      gsap.from(".manifesto__line > span", {
        yPercent: 112,
        duration: 1.15,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root, start: "top 72%", once: true },
      });
      gsap.from(".manifesto__note", {
        y: 24,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: ".manifesto__note", start: "top 88%", once: true },
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} className="manifesto section-shell" aria-labelledby="manifesto-title">
      <p className="eyebrow">Lumus Studio — Visual stories</p>
      <h1 id="manifesto-title" className="manifesto__title display-type">
        <span className="manifesto__line"><span>Eventos acontecem</span></span>
        <span className="manifesto__line"><span>uma vez. Imagens os</span></span>
        <span className="manifesto__line"><span>fazem <em>permanecer.</em></span></span>
      </h1>
      <p className="manifesto__note">
        Atmosfera, pessoas, energia e detalhes reunidos em narrativas visuais que preservam o que um evento fez sentir.
      </p>
    </section>
  );
}

