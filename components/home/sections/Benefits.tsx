import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/data/home";

export function Benefits() {
  return (
    <section className="benefits">
      <div className="section-shell benefits__heading">
        <SectionHeading eyebrow="Who we are" title="Why being with us is non-negotiable" description="We go beyond to provide the best environment that supports growth, innovation, and success through;" />
      </div>
      <div className="benefits__panel">
        <div className="benefits__grid">
          {benefits.map((benefit) => (
            <article className={`benefit-card-shell ${benefit.darkText ? "benefit-card-shell--dark" : ""}`} style={{ backgroundColor: benefit.softColor }} key={benefit.title}>
              <div className="benefit-card" style={{ backgroundColor: benefit.color }}>
                <span className="benefit-card__icon" style={{ backgroundColor: benefit.softColor }}><Image src={benefit.icon} width={32} height={32} alt="" /></span>
                <h3>{benefit.title}</h3><p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
