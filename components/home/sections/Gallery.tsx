import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const gallery = ["01", "02", "04", "06", "08", "09", "10", "11"].map((number) => `/assets/home-v2/gallery-${number}.png`);

export function Gallery() {
  return (
    <section className="gallery-section" id="community">
      <Image className="gallery-section__ring" src="/assets/gallery-ring.svg" width={290} height={204} alt="" />
      <div className="section-shell gallery-section__heading"><SectionHeading eyebrow="Community" tone="blue" title="A community build on love, growth and empowerment in all endeavour" light /></div>
      <div className="gallery-viewport">
        <div className="gallery-row gallery-row--one">{gallery.slice(0, 4).map((src, index) => <Image src={src} width={380} height={277} sizes="380px" alt={`Product Hub Africa community moment ${index + 1}`} key={src} />)}</div>
        <div className="gallery-row gallery-row--two">{gallery.slice(4).map((src, index) => <Image src={src} width={380} height={277} sizes="380px" alt={`Product Hub Africa community moment ${index + 5}`} key={src} />)}</div>
      </div>
    </section>
  );
}
