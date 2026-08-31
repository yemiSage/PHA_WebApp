import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/data/home";

export function Benefits() {
  return (
    <section className="benefits">
      <div className="section-shell benefits__heading">
        <SectionHeading eyebrow="Who we are" title="Why being with us is non-negotiable" description="Product Hub Africa gives you more than a place to learn. You gain a supportive community, practical experience, meaningful connections, and access to opportunities that move your career forward." />
      </div>
      <div className="benefits__panel">
        <div className="benefits__grid">
          {benefits.map((benefit) => (
            <article className={`benefit-card ${benefit.darkText ? "benefit-card--dark" : ""}`} style={{ backgroundColor: benefit.color }} key={benefit.title}>
              <span className="benefit-card__icon" style={{ backgroundColor: benefit.softColor }}><Image src={benefit.icon} width={32} height={32} alt="" /></span>
              <h3>{benefit.title}</h3><p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
