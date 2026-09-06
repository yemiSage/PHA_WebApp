import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  ["Verified, not just listed", "We check identity, work history, and credentials before a profile goes live."],
  ["Experienced global talent", "Hire from our pool of experienced talents from our alumni."],
  ["No recruiter markup", "No fixed rates, payments are negotiable across parties."],
  ["Recommendations", "Highly recommended individuals we can vouch for."],
];

export function Talent() {
  return (
    <section className="talent" id="talent">
      <div className="section-shell talent__heading">
        <SectionHeading eyebrow="Talent pool" title="Hire skilled, experienced professionals to power your everyday team." description="Empower your team with top-tier professionals; experienced and reliable talents ready to drive results each day" />
        <Button href="#contact" arrow>Hire a talent</Button>
      </div>
      <div className="section-shell talent__body">
        <Image className="talent__image" src="/assets/home-v2/talent.png" width={1500} height={1000} sizes="(max-width: 760px) 340px, 554px" alt="A Product Hub Africa professional joining a remote meeting" />
        <div className="talent-list">
          {points.map(([title, copy]) => <article key={title}><Image src="/assets/talent-icon.svg" width={32} height={32} alt="" /><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
