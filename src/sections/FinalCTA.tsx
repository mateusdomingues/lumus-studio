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
        <ArrowLink href={`mailto:${siteConfig.email}`} invert>Conte sobre o seu evento</ArrowLink>
      </div>
    </section>
  );
}

