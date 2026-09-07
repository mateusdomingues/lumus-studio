"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { ArrowLink } from "@/components/ArrowLink";
import { gsap } from "@/lib/gsap";
import { siteConfig } from "@/data/site";

const services = [
  "Lançamentos de produtos",
  "Ativações de marca",
  "Experiências corporativas",
  "Eventos de moda",
  "Inaugurações",
  "Conferências",
  "Eventos privados",
  "Marketing de experiência",
];

export function BrandEvents() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const context = gsap.context(() => {
      gsap.from(".brand-events__image", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.25,
        ease: "power3.inOut",
        scrollTrigger: { trigger: root, start: "top 70%", once: true },
      });
      gsap.from(".brand-events__service", {
        y: 28,
        autoAlpha: 0,
        stagger: 0.06,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { trigger: ".brand-events__services", start: "top 82%", once: true },
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section ref={rootRef} id="brand-events" className="brand-events dark-section" aria-labelledby="brand-events-title">
      <div className="section-shell">
        <p className="eyebrow">Para marcas</p>
        <div className="brand-events__heading">
          <h2 id="brand-events-title" className="display-type">A experiência termina. A presença da marca continua.</h2>
          <p>
            Fotografia para marcas, agências e produtoras que entendem cada evento como narrativa, relacionamento e memória visual.
          </p>
        </div>
        <div className="brand-events__image">
          <Image
            src="/images/brand-events/product-installation.jpg"
            alt="Instalação de produto em uma experiência de marca"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="brand-events__bottom">
          <div className="brand-events__services" role="list" aria-label="Tipos de eventos atendidos">
            {services.map((service, index) => (
              <span className="brand-events__service" role="listitem" key={service}>
                <i>{String(index + 1).padStart(2, "0")}</i>{service}
              </span>
            ))}
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-70"
          >
            Conte sobre a experiência
          </a>
        </div>
      </div>
    </section>
  );
}
