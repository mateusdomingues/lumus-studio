"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/projects";
import { gsap } from "@/lib/gsap";

const reveals = [
  "inset(0 100% 0 0)",
  "inset(100% 0 0 0)",
  "inset(0 0 0 100%)",
  "inset(0 0 100% 0)",
];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<Array<HTMLDivElement | null>>([]);
  const activeRef = useRef(0);
  const animatingRef = useRef(false);
  const [active, setActive] = useState(0);

  const advance = useCallback(() => {
    if (animatingRef.current || document.hidden) return;
    const currentIndex = activeRef.current;
    const nextIndex = (currentIndex + 1) % heroSlides.length;
    const current = slidesRef.current[currentIndex];
    const next = slidesRef.current[nextIndex];
    if (!current || !next) return;

    animatingRef.current = true;
    const nextImage = next.querySelector("img");
    gsap.killTweensOf([current, next, nextImage]);
    gsap.set(next, {
      autoAlpha: 1,
      zIndex: 2,
      clipPath: reveals[currentIndex % reveals.length],
    });
    gsap.fromTo(nextImage, { scale: 1.045 }, { scale: 1.015, duration: 6.6, ease: "none" });
    gsap
      .timeline({
        onComplete: () => {
          gsap.set(current, { autoAlpha: 0, zIndex: 0, clipPath: "inset(0 0 0 0)" });
          gsap.set(next, { zIndex: 1 });
          activeRef.current = nextIndex;
          setActive(nextIndex);
          animatingRef.current = false;
        },
      })
      .to(next, { clipPath: "inset(0 0 0 0)", duration: 1.55, ease: "power3.inOut" })
      .to(current, { autoAlpha: 0.2, duration: 1.2, ease: "power2.out" }, 0);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const interval = window.setInterval(advance, 5200);
    return () => window.clearInterval(interval);
  }, [advance]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const frame = frameRef.current;
    if (!root || !frame) return;

    const context = gsap.context(() => {
      gsap.set(slidesRef.current, { autoAlpha: 0, zIndex: 0 });
      gsap.set(slidesRef.current[0], { autoAlpha: 1, zIndex: 1 });
      const firstImage = slidesRef.current[0]?.querySelector("img");
      if (firstImage) {
        gsap.to(firstImage, { scale: 1.025, duration: 6.8, ease: "none" });
      }

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.to(frame, {
          scale: 0.78,
          borderRadius: "18px",
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: 1.1 },
        });
      });
      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.to(frame, {
          scale: 0.91,
          borderRadius: "10px",
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: 0.8 },
        });
      });
      return () => mm.revert();
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} className="hero-transition" aria-label="Seleção de eventos de marcas">
      <div ref={frameRef} className="hero">
        <div className="hero__slides" aria-live="off">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.src}
              ref={(node) => { slidesRef.current[index] = node; }}
              className="hero__slide"
              data-hero-slide={index}
              aria-hidden={active !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index < 2}
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: slide.position }}
              />
            </div>
          ))}
        </div>
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__counter" aria-label={`Imagem ${active + 1} de ${heroSlides.length}`}>
          <span>{String(active + 1).padStart(2, "0")}</span>
          <i />
          <span>{String(heroSlides.length).padStart(2, "0")}</span>
        </div>
        <span className="hero__scroll" aria-hidden="true">Role para explorar</span>
      </div>
    </section>
  );
}
