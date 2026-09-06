import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Counselling() {
  return (
    <section className="counselling" id="counselling">
      <Image className="counselling__star" src="/assets/counselling-star.svg" width={189} height={191} alt="" />
      <div className="section-shell counselling__card">
        <Image src="/assets/home-v2/counselling.png" width={1500} height={1000} sizes="(max-width: 760px) 356px, 1200px" alt="Product Hub Africa career counselling" />
        <div className="counselling__overlay">
          <span className="pill pill--purple">Counseling</span>
          <h2>We care about your wellbeing, hence we’ve made talking easier for you!</h2>
          <Button href="#contact" arrow>Talk to a counsellor</Button>
        </div>
      </div>
    </section>
  );
}
