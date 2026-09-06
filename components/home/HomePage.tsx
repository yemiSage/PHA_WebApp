import { Footer } from "@/components/layout/Footer";
import { Testimonials } from "@/components/home/Testimonials";
import { FacilitatorRail } from "@/components/home/FacilitatorRail";
import { Benefits } from "@/components/home/sections/Benefits";
import { Blog } from "@/components/home/sections/Blog";
import { Counselling } from "@/components/home/sections/Counselling";
import { FinalCta } from "@/components/home/sections/FinalCta";
import { Gallery } from "@/components/home/sections/Gallery";
import { Hero } from "@/components/home/sections/Hero";
import { Programmes } from "@/components/home/sections/Programmes";
import { Stats } from "@/components/home/sections/Stats";
import { Talent } from "@/components/home/sections/Talent";
import { VideoSection } from "@/components/home/sections/VideoSection";
import { Vision } from "@/components/home/sections/Vision";
import { MotionController } from "@/components/home/MotionController";

export function HomePage() {
  return (
    <main className="home-page">
      <MotionController />
      <Hero />
      <Stats />
      <Vision />
      <Programmes />
      <Benefits />
      <VideoSection />
      <Talent />
      <FacilitatorRail />
      <Gallery />
      <Counselling />
      <Testimonials />
      <Blog />
      <FinalCta />
      <Footer />
    </main>
  );
}
