import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="final-cta" id="partner">
      <Image src="/assets/cta-bg.png" width={1500} height={1000} alt="Product Hub Africa community" />
      <div className="final-cta__overlay" />
      <div className="final-cta__content">
        <span className="pill pill--red">Join us now</span>
        <h2>Whether you are learning, hiring, or giving back, there is a place for you here.</h2>
        <p>Join a growing ecosystem of learners, professionals, facilitators, and organisations working together to shape Africa’s product future.</p>
        <Button href="#community" variant="secondary" arrow>join now</Button>
      </div>
    </section>
  );
}
