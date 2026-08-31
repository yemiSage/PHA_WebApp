import Image from "next/image";

const cards = [
  { title: "Our Mission", copy: "To empower African talent with practical skills, meaningful connections, and access to opportunities that enable them to build impactful careers and products.", image: "/assets/mission.png" },
  { title: "Our Vision", copy: "To become Africa’s leading ecosystem for developing product talent, fostering innovation, and driving sustainable growth across the continent.", image: "/assets/vision.png" },
];

export function Vision() {
  return (
    <section className="vision-section">
      <Image className="vision-section__deco" src="/assets/vision-deco.svg" width={371} height={303} alt="" />
      <div className="section-shell vision-section__inner">
        <div className="vision-section__copy">
          <span className="pill pill--blue">Our Vision</span>
          <h2>Driving innovation across Africa</h2>
          <p>We are shaping a future where African talent has the skills, confidence, and opportunities to build solutions that solve real problems and create lasting impact.</p>
        </div>
        <div className="vision-cards">
          {cards.map((card) => <article className="vision-card" key={card.title}><Image src={card.image} width={512} height={512} alt="" /><h3>{card.title}</h3><p>{card.copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}
