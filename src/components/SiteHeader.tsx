"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/projects";
import { gsap } from "@/lib/gsap";

const menuItems = [
  { number: "01", label: "Stories", href: "#stories", image: heroSlides[1] },
  { number: "02", label: "Brand Events", href: "#brand-events", image: heroSlides[3] },
  { number: "03", label: "Studio", href: "#studio", image: "/images/studio/on-set.jpg" },
  { number: "04", label: "Contact", href: "#contact", image: heroSlides[5] },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (open) {
      document.body.classList.add("menu-open");
      gsap.set(overlay, { display: "grid" });
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(overlay, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.75 })
        .fromTo(".menu-overlay__item", { yPercent: 120 }, { yPercent: 0, duration: 0.75, stagger: 0.07 }, "-=0.35");
      closeRef.current?.focus();
    } else {
      document.body.classList.remove("menu-open");
      if (getComputedStyle(overlay).display !== "none") {
        gsap.to(overlay, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.58,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(overlay, { display: "none" });
            openerRef.current?.focus();
          },
        });
      }
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !overlayRef.current) return;
      const focusable = Array.from(
        overlayRef.current.querySelectorAll<HTMLElement>("button, a[href]"),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const activeImage = menuItems[preview].image;
  const image = typeof activeImage === "string" ? { src: activeImage, alt: "Bastidores da Lumus Studio" } : activeImage;

  return (
    <>
      <header className="site-header">
        <Link href="/" className="wordmark site-header__logo" aria-label="Lumus Studio — página inicial">
          LUMUS
        </Link>
        <button
          ref={openerRef}
          type="button"
          className="site-header__menu"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-menu"
        >
          Menu
        </button>
      </header>

      <div
        ref={overlayRef}
        id="site-menu"
        className="menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navegação principal"
        aria-hidden={!open}
      >
        <div className="menu-overlay__preview" aria-hidden="true">
          <Image src={image.src} alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
        <div className="menu-overlay__shade" />
        <div className="menu-overlay__top">
          <span className="wordmark">LUMUS</span>
          <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Fechar menu">
            Fechar
          </button>
        </div>
        <nav className="menu-overlay__nav" aria-label="Principal">
          {menuItems.map((item, index) => (
            <div className="menu-overlay__item-wrap" key={item.label}>
              <Link
                className="menu-overlay__item"
                href={item.href}
                onMouseEnter={() => setPreview(index)}
                onFocus={() => setPreview(index)}
                onClick={() => setOpen(false)}
              >
                <span>{item.number}</span>
                <strong>{item.label}</strong>
              </Link>
            </div>
          ))}
        </nav>
        <p className="menu-overlay__footer">Photography × space × motion</p>
      </div>
    </>
  );
}

