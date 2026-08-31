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
        <p>Learn practical tech skills, build real-world experience, and connect with a community that supports your growth at every stage.</p>
        <div className="hero__actions">
          <Button href="#community">Join our community</Button>
          <Button href="#partner" variant="secondary" arrow>Partner with us</Button>
        </div>
      </div>
      <div className="hero-gallery" aria-hidden="true">
        <Image className="hero-gallery__image" src="/assets/hero-image.png" width={1200} height={366} loading="eager" fetchPriority="high" alt="" />
      </div>
    </section>
  );
}
