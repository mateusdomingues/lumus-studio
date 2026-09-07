"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    const logo = logoRef.current;
    if (!root || !logo) return;

    if (sessionStorage.getItem("lumus-intro-seen")) {
      const skipFrame = window.requestAnimationFrame(() => setVisible(false));
      return () => window.cancelAnimationFrame(skipFrame);
    }

    document.documentElement.classList.add("is-loading");

    let finished = false;
    const reveal = () => {
      if (finished) return;
      finished = true;
      sessionStorage.setItem("lumus-intro-seen", "true");

      gsap
        .timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            document.documentElement.classList.remove("is-loading");
            setVisible(false);
          },
        })
        .fromTo(logo, { autoAlpha: 0, scale: 0.97 }, { autoAlpha: 1, scale: 1, duration: 0.42 })
        .to(logo, { scale: 1.02, autoAlpha: 0, duration: 0.36, delay: 0.12 })
        .to(root, { autoAlpha: 0, duration: 0.38 }, "-=0.18");
    };

    const firstHeroImage = document.querySelector<HTMLImageElement>("[data-hero-slide='0'] img");
    const safetyTimer = window.setTimeout(reveal, 1600);

    if (!firstHeroImage || firstHeroImage.complete) {
      window.requestAnimationFrame(reveal);
    } else {
      firstHeroImage.addEventListener("load", reveal, { once: true });
      firstHeroImage.addEventListener("error", reveal, { once: true });
    }

    return () => {
      window.clearTimeout(safetyTimer);
      firstHeroImage?.removeEventListener("load", reveal);
      firstHeroImage?.removeEventListener("error", reveal);
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={rootRef} className="preloader" role="status" aria-label="Carregando Lumus Studio">
      <span ref={logoRef} className="wordmark preloader__wordmark">
        LUMUS
      </span>
    </div>
  );
}
