"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const images = [
  { src: "/images/brand-events/brand-collateral.jpg", alt: "Detalhes de identidade em uma experiência de marca", ratio: "landscape" },
  { src: "/images/fifteen/portrait.jpg", alt: "Retrato editorial em festa de quinze anos", ratio: "portrait" },
  { src: "/images/festivals/night-stage.jpg", alt: "Festival noturno visto da plateia", ratio: "wide" },
  { src: "/images/weddings/reception.jpg", alt: "Brinde durante uma celebração", ratio: "landscape" },
  { src: "/images/studio/on-set.jpg", alt: "Fotógrafo trabalhando em evento", ratio: "portrait" },
  { src: "/images/hero/fashion-finale.jpg", alt: "Final de desfile com modelos na passarela", ratio: "wide" },
];

export function HorizontalGallery() {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;
    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 64);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} className="horizontal-gallery" aria-label="Galeria editorial">
      <div ref={trackRef} className="horizontal-gallery__track">
        <header className="horizontal-gallery__intro">
          <p className="eyebrow">Across the room</p>
          <h2 className="display-type">Tudo o que acontece entre um instante e outro.</h2>
        </header>
        {images.map((image) => (
          <figure className={`horizontal-gallery__image horizontal-gallery__image--${image.ratio}`} key={image.src}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 899px) 100vw, 60vw" style={{ objectFit: "cover" }} />
          </figure>
        ))}
      </div>
    </section>
  );
}

