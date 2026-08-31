import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Counselling() {
  return (
    <section className="counselling" id="counselling">
      <Image className="counselling__star" src="/assets/counselling-star.svg" width={189} height={191} alt="" />
      <div className="section-shell counselling__card">
        <Image src="/assets/counselling.png" width={1500} height={1000} alt="Product Hub Africa career counselling" />
        <div className="counselling__overlay">
          <span className="pill pill--yellow">Counseling</span>
          <h2>Not sure where to start? Talk to someone who gets it</h2>
          <Button href="#contact" arrow>Talk to a counsellor</Button>
        </div>
      </div>
    </section>
  );
}
