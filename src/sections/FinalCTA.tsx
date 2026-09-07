import Image from "next/image";
import { ArrowLink } from "@/components/ArrowLink";
import { siteConfig } from "@/data/site";

export function FinalCTA() {
  return (
    <section id="contact" className="final-cta" aria-labelledby="contact-title">
      <Image src="/images/hero/product-launch.jpg" alt="Silhuetas de convidados em uma experiência de marca" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
      <div className="final-cta__overlay" />
      <div className="final-cta__content section-shell">
        <p className="eyebrow">Start a story</p>
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

