import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  ["Verified, not just listed", "Every professional is carefully screened and assessed, so you only meet candidates who are ready to deliver."],
  ["Experienced global talent", "Work with skilled professionals who bring practical experience and understand how to contribute from day one."],
  ["No recruiter markup", "Connect directly with talent without inflated agency fees or unnecessary layers in the hiring process."],
  ["Recommendations", "Get matched with professionals whose skills and experience align with what your team actually needs."],
];

export function Talent() {
  return (
    <section className="talent" id="talent">
      <div className="section-shell talent__heading">
        <SectionHeading eyebrow="Talent pool" title="Connect with skilled African talent, ready to create impact" description="Our talent pool connects organisations with skilled, vetted professionals who are ready to contribute, grow, and create value from day one." />
        <Button href="#contact" arrow>Hire a talent</Button>
      </div>
      <div className="section-shell talent__body">
        <Image className="talent__image" src="/assets/talent.png" width={1500} height={1000} alt="A Product Hub Africa professional" />
        <div className="talent-list">
          {points.map(([title, copy]) => <article key={title}><Image src="/assets/talent-icon.svg" width={32} height={32} alt="" /><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
