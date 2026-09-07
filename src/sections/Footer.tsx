import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer id="footer-contact" className="site-footer dark-section section-shell">
      <div className="site-footer__wordmark wordmark">LUMUS</div>
      <div className="site-footer__grid">
        <p>{siteConfig.location}</p>
        <div>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <nav aria-label="Rodapé">
          <Link href="#stories">Histórias</Link>
          <Link href="#brand-events">Eventos de marca</Link>
          <Link href="#studio">Estúdio</Link>
        </nav>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Lumus Studio</span>
        <Link href="#top">Voltar ao início</Link>
      </div>
    </footer>
  );
}
