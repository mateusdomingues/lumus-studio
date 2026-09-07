"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const frames = [
  { src: "/images/hero/branded-stage.jpg", alt: "Palco de marca com convidado em apresentação" },
  { src: "/images/festivals/confetti.jpg", alt: "Confetes atravessando a luz durante evento" },
  { src: "/images/studio/photographer.jpg", alt: "Fotógrafo observando uma cena durante evento" },
];

export function CinematicScroll() {
  const rootRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const scene = sceneRef.current;
    if (!root || !scene) return;

    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: root, start: "top top", end: "+=280%", pin: true, scrub: 1.2 },
        });
        timeline
          .fromTo(scene, { scale: 0.5 }, { scale: 0.82, duration: 1.3, ease: "none" })
          .to(frameRefs.current[0], { autoAlpha: 0, duration: 0.35 }, 0.95)
          .to(frameRefs.current[1], { autoAlpha: 1, duration: 0.35 }, 0.95)
          .to(scene, { scale: 1, duration: 1.1, ease: "none" }, 1.2)
          .to(frameRefs.current[1], { autoAlpha: 0, duration: 0.35 }, 1.95)
          .to(frameRefs.current[2], { autoAlpha: 1, duration: 0.35 }, 1.95)
          .to(".cinematic__words span", { yPercent: 0, autoAlpha: 1, stagger: 0.08, duration: 0.55 }, 2.25);
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} className="cinematic dark-section" aria-label="Presença, energia e memória">
      <div ref={sceneRef} className="cinematic__scene">
        {frames.map((frame, index) => (
          <div
            key={frame.src}
            ref={(node) => { frameRefs.current[index] = node; }}
            className={`cinematic__frame${index === 0 ? " is-visible" : ""}`}
          >
            <Image src={frame.src} alt={frame.alt} fill sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
        <div className="cinematic__veil" />
        <h2 className="cinematic__words display-type" aria-label="Presença. Energia. Memória.">
          <span>Presença.</span><span>Energia.</span><span>Memória.</span>
        </h2>
      </div>
    </section>
  );
}

