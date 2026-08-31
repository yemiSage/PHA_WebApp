import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgrammesGrid } from "@/components/home/ProgrammesGrid";

export function Programmes() {
  return (
    <section className="programmes" id="programmes">
      <div className="section-shell programmes__heading">
        <SectionHeading eyebrow="Programmes" tone="red" title="Programmes built for learning, growth, and real-world impact" description="From beginner-friendly bootcamps to advanced career pathways, our programmes are designed to help you build practical skills and confidently take your next step." />
        <Button href="#programmes" arrow>Explore programmes</Button>
      </div>
      <ProgrammesGrid />
    </section>
  );
}
