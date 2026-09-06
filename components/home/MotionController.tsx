"use client";

import { useEffect } from "react";

const SECTION_SELECTOR = ".home-page > section:not(.hero)";

export function MotionController() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.setAttribute("data-motion-visible", "true"));
      return;
    }

    document.documentElement.classList.add("motion-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-motion-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-enabled");
    };
  }, []);

  return null;
}
