import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  ["8K+", "Students", "Trained by PHA across 10+ African countries"],
  ["300+", "Jobs", "Across major industries"],
  ["5+", "Tech Skills", "Provided by our bootcamp programmes"],
];

export function Stats() {
  return (
    <section className="stats" id="about">
      <div className="section-shell stats__head">
        <SectionHeading eyebrow="Numbers don’t lie" title="Closing the gap between accessible and structured skills across Africa" description="We are creating access to practical learning, real-world experience, and opportunities that help African talent grow with confidence." size="large" />
      </div>
      <div className="section-shell stats__panel">
        {stats.map(([number, label, note]) => <article className="stat-card" key={label}><strong>{number}</strong><h3>{label}</h3><p>{note}</p></article>)}
      </div>
      <div className="partner-marquee" aria-label="Partner organisations">
        <div className="partner-marquee__track">
          <Image className="partner-logos" src="/assets/partner-logos.png" width={1440} height={92} alt="Partner organisations" />
          <Image className="partner-logos" src="/assets/partner-logos.png" width={1440} height={92} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
