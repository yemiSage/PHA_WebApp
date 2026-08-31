import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section className="gallery-section" id="community">
      <Image className="gallery-section__ring" src="/assets/gallery-ring.svg" width={290} height={204} alt="" />
      <div className="section-shell gallery-section__heading"><SectionHeading eyebrow="Talent pool" title="A community build on love, growth and empowerment in all endeavour" light /></div>
      <div className="gallery-viewport" aria-hidden="true">
        <div className="gallery-row gallery-row--one">{Array.from({ length: 5 }, (_, index) => <div key={index} />)}</div>
        <div className="gallery-row gallery-row--two">{Array.from({ length: 5 }, (_, index) => <div key={index} />)}</div>
      </div>
    </section>
  );
}
