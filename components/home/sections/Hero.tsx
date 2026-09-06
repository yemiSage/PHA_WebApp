import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";

const avatars = [1, 2, 3].map((number) => `/assets/hero-avatar-${number}.png`);

export function Hero() {
  return (
    <section className="hero" id="top">
      <Header />
      <div className="hero__copy">
        <div className="bootcamp-pill">
          <span className="bootcamp-pill__avatars">{avatars.map((src) => <Image key={src} src={src} width={1024} height={1024} alt="" />)}</span>
          <span>Join our upcoming bootcamp 2.6</span>
        </div>
        <h1>Turn your <span>curiosity</span> into <span>experience</span> with us at Product Hub Africa</h1>
        <p>Learn endlessly and level up your skills through live, foundational courses, bootcamps and advanced trainings with real-world projects.</p>
        <div className="hero__actions">
          <Button href="#community" arrow>Join our community</Button>
          <Button href="#partner" variant="secondary" arrow>Partner with us</Button>
        </div>
      </div>
      <div className="hero-gallery">
        <div className="hero-gallery__top" aria-hidden="true"><Image src="/assets/browser-lights.svg" width={56} height={16} alt="" /></div>
        <div className="hero-gallery__media">
          <Image className="hero-gallery__image" src="/assets/home-v2/hero-video.png" width={1500} height={1000} loading="eager" fetchPriority="high" sizes="(max-width: 760px) 367px, 1168px" alt="A Product Hub Africa learner joining a video call" />
          <button type="button" aria-label="Play introduction video"><Image src="/assets/play.svg" width={24} height={24} alt="" /></button>
        </div>
      </div>
    </section>
  );
}
