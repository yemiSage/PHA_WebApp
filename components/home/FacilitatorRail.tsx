import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facilitators } from "@/data/home";

export function FacilitatorRail() {
  return (
    <section className="facilitators">
      <div className="facilitators__sticky">
        <div className="section-shell facilitators__heading">
          <SectionHeading eyebrow="Facilitators" title="Qualified and experienced facilitators" description="With our seasoned experts who brings in real-world knowledge and proven teaching experiences." />
        </div>
        <div className="facilitator-viewport">
          <div className="facilitator-track">
            {facilitators.map((person) => (
              <article className="facilitator-card" key={`${person.name}-${person.role}`}>
                <div className="facilitator-card__inner">
                  <Image {...person.image} sizes="(max-width: 760px) 280px, 337px" alt={person.name} />
                  <div><h3>{person.name}</h3><p>{person.role}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
