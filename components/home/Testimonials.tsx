"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/home";

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const [canMoveBack, setCanMoveBack] = useState(false);
  const [canMoveForward, setCanMoveForward] = useState(true);

  const syncControls = useCallback(() => {
    const element = track.current;
    if (!element) return;
    const maximumScroll = element.scrollWidth - element.clientWidth;
    setCanMoveBack(element.scrollLeft > 1);
    setCanMoveForward(element.scrollLeft < maximumScroll - 1);
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const resizeObserver = new ResizeObserver(syncControls);
    resizeObserver.observe(element);
    syncControls();
    return () => resizeObserver.disconnect();
  }, [syncControls]);

  const move = (direction: number) => {
    track.current?.scrollBy({ left: direction * 372, behavior: "smooth" });
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="section-shell testimonials__heading">
        <div>
          <span className="pill pill--neutral">Testimonials</span>
          <h2 id="testimonials-title">We deliver value that speaks for itself</h2>
        </div>
        <p>Here is what our past alumnus are saying about our programmes</p>
      </div>
      <div className="testimonial-track" ref={track} onScroll={syncControls}>
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <div className="testimonial-card__person">
              <Image className="testimonial-card__avatar" {...item.image} alt="" />
              <div><h3>{item.name}</h3><p><Image className="testimonial-card__flag" {...item.flag} alt="" />{item.role}</p></div>
            </div>
            <h4>{item.headline}</h4>
            <p className="testimonial-card__quote">{item.quote}</p>
          </article>
        ))}
      </div>
      <div className="section-shell testimonial-controls">
        <button type="button" disabled={!canMoveBack} onClick={() => move(-1)} aria-label="Previous testimonials"><Image src="/assets/arrow-left.svg" width={24} height={24} alt="" /></button>
        <button type="button" disabled={!canMoveForward} onClick={() => move(1)} aria-label="Next testimonials"><Image src="/assets/arrow-left.svg" width={24} height={24} alt="" /></button>
      </div>
    </section>
  );
}
