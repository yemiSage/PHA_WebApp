import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgrammesGrid } from "@/components/home/ProgrammesGrid";

export function Programmes() {
  return (
    <section className="programmes" id="programmes">
      <div className="section-shell programmes__heading">
        <SectionHeading eyebrow="Courses" tone="red" title="Get started with courses that are designed to kick you off the ground" description="We offer variety of courses designed to get you off from a newbie to a junior level in tech." />
        <Button href="#programmes" arrow>Explore our courses</Button>
      </div>
      <ProgrammesGrid />
    </section>
  );
}
