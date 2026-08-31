"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facilitators } from "@/data/home";

export function FacilitatorRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const desktopMotion = window.matchMedia("(min-width: 761px) and (prefers-reduced-motion: no-preference)");
    let maximumTravel = 0;
    let animationFrame = 0;

    const update = () => {
      animationFrame = 0;
      if (!desktopMotion.matches || maximumTravel <= 0) {
        track.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const bounds = section.getBoundingClientRect();
      const verticalTravel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / verticalTravel));
      track.style.transform = `translate3d(${-maximumTravel * progress}px, 0, 0)`;
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    const measure = () => {
      maximumTravel = desktopMotion.matches
        ? Math.max(0, track.scrollWidth - viewport.clientWidth)
        : 0;
      section.style.setProperty("--rail-distance", `${maximumTravel}px`);
      requestUpdate();
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", measure);
    desktopMotion.addEventListener("change", measure);
    measure();

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", measure);
      desktopMotion.removeEventListener("change", measure);
      track.style.transform = "";
      section.style.removeProperty("--rail-distance");
    };
  }, []);

  return (
    <section className="facilitators facilitators--pinned" ref={sectionRef}>
      <div className="facilitators__sticky">
        <div className="section-shell facilitators__heading">
          <SectionHeading eyebrow="Facilitators" title="Learn from people who have done the work" description="Our facilitators bring real industry experience into every session, helping you learn practical skills, avoid common mistakes, and grow with confidence." />
        </div>
        <div className="facilitator-viewport" ref={viewportRef}>
          <div className="facilitator-track" ref={trackRef}>
            {facilitators.map((person) => (
              <article className="facilitator-card" key={`${person.name}-${person.role}`}>
                <Image {...person.image} alt={person.name} />
                <div><h3>{person.name}</h3><p>{person.role}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
