"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { approachSteps } from "@/data/projects";
import { gsap } from "@/lib/gsap";

export function Approach() {
  const rootRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".approach__step").forEach((step, index) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: step,
              start: "top 52%",
              end: "bottom 48%",
              onEnter: () => showImage(index),
              onEnterBack: () => showImage(index),
            },
          });
        });
      });
    }, root);

    function showImage(index: number) {
      imagesRef.current.forEach((image, imageIndex) => {
        if (!image) return;
        gsap.to(image, {
          autoAlpha: imageIndex === index ? 1 : 0,
          scale: imageIndex === index ? 1 : 1.025,
          duration: 0.65,
          ease: "power2.out",
        });
      });
    }

    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} className="approach section-shell" aria-labelledby="approach-title">
      <header className="approach__header">
        <p className="eyebrow">The Lumus approach</p>
        <h2 id="approach-title" className="display-type">Observar sem interromper.</h2>
      </header>
      <div className="approach__layout">
        <div className="approach__steps">
          {approachSteps.map((step) => (
            <article className="approach__step" key={step.number}>
              <p><span>{step.number}</span>{step.label}</p>
              <h3 className="display-type">{step.title}</h3>
              <p>{step.body}</p>
              <div className="approach__mobile-image">
                <Image src={step.image.src} alt={step.image.alt} fill sizes="100vw" style={{ objectFit: "cover" }} />
              </div>
            </article>
          ))}
        </div>
        <div className="approach__visual" aria-hidden="true">
          {approachSteps.map((step, index) => (
            <div
              key={step.image.src}
              ref={(node) => { imagesRef.current[index] = node; }}
              className={`approach__image${index === 0 ? " is-visible" : ""}`}
            >
              <Image src={step.image.src} alt="" fill sizes="50vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

