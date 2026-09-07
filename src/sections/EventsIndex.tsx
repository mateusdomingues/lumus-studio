"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { eventIndex } from "@/data/projects";

export function EventsIndex() {
  const [active, setActive] = useState(0);
  const preview = eventIndex[active].image;

  return (
    <section className="events-index section-shell" aria-labelledby="events-title">
      <div className="events-index__header">
        <p className="eyebrow">Events</p>
        <h2 id="events-title" className="display-type">A mesma atenção, em diferentes escalas.</h2>
      </div>
      <div className="events-index__body">
        <div className="events-index__preview" aria-hidden="true">
          <Image src={preview.src} alt="" fill sizes="40vw" style={{ objectFit: "cover", objectPosition: preview.position ?? "center" }} />
        </div>
        <nav className="events-index__list" aria-label="Categorias de eventos">
          {eventIndex.map((item, index) => (
            <Link
              href={item.href}
              key={item.label}
              className={index === 0 ? "is-primary" : ""}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span>{item.number}</span><strong className="display-type">{item.label}</strong><i aria-hidden="true">↗</i>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

