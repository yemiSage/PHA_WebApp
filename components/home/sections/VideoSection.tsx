import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VideoSection() {
  return (
    <section className="video-section">
      <div className="section-shell video-section__heading"><SectionHeading eyebrow="Who we are" tone="purple" title="We have been doing it, we are still doing it!" /></div>
      <div className="section-shell browser-frame">
        <div className="browser-frame__top"><Image src="/assets/browser-lights.svg" width={64} height={18} alt="" /></div>
        <div className="browser-frame__image">
          <Image src="/assets/video-cover.png" width={1500} height={1000} alt="Product Hub Africa community event" />
          <button type="button" aria-label="Play video"><Image src="/assets/play.svg" width={24} height={24} alt="" /></button>
        </div>
      </div>
    </section>
  );
}
