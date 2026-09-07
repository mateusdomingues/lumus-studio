"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { siteConfig } from "@/data/site";
import { gsap } from "@/lib/gsap";

export function FinalCTA() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(max-width: 899px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".final-cta > img",
          { scale: 1.055 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 0.8 },
          },
        );
        gsap.from(".final-cta__content", {
          y: 34,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".final-cta__content", start: "top 82%", once: true },
        });
      });

      return () => mm.revert();
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} id="contact" className="final-cta" aria-labelledby="contact-title">
      <Image src="/images/hero/product-launch.jpg" alt="Silhuetas de convidados em uma experiência de marca" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
      <div className="final-cta__overlay" />
      <div className="final-cta__content section-shell">
        <p className="eyebrow">Comece uma história</p>
        <h2 id="contact-title" className="display-type">Seu evento acontece uma vez.<br /><em>Faça permanecer.</em></h2>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-70"
        >
          Conte sobre o seu evento
        </a>
      </div>
    </section>
  );
}
