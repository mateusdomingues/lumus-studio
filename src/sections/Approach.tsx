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
      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
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
      mm.add("(max-width: 899px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".approach__header > *", {
          y: 32,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".approach__header", start: "top 84%", once: true },
        });

        gsap.utils.toArray<HTMLElement>(".approach__step").forEach((step) => {
          const copy = Array.from(step.children).filter((child) => !child.classList.contains("approach__mobile-image"));
          const image = step.querySelector<HTMLElement>(".approach__mobile-image");
          const innerImage = image?.querySelector("img");
          const timeline = gsap.timeline({
            scrollTrigger: { trigger: step, start: "top 82%", once: true },
          });

          timeline.from(copy, {
            y: 30,
            autoAlpha: 0,
            stagger: 0.09,
            duration: 0.68,
            ease: "power3.out",
          });
          if (image) {
            timeline.fromTo(image, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.95, ease: "power3.inOut" }, "-=0.24");
          }
          if (innerImage) {
            timeline.fromTo(innerImage, { scale: 1.05 }, { scale: 1, duration: 1.1, ease: "power3.out" }, "<");
          }
        });
      });

      return () => mm.revert();
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
        <p className="eyebrow">O olhar Lumus</p>
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
