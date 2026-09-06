import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="final-cta" id="partner">
      <Image src="/assets/home-v2/cta-bg.png" width={1500} height={1000} sizes="100vw" alt="Product Hub Africa community" />
      <div className="final-cta__overlay" />
      <div className="final-cta__content">
        <span className="pill pill--red">Come join us</span>
        <h2>Ready to start building your career?</h2>
        <p>Come join thousands of young enthusiastic individuals who are poised to changing their career.</p>
        <Button href="#community" variant="secondary" arrow>Join us now</Button>
      </div>
    </section>
  );
}
