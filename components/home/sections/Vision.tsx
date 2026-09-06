import Image from "next/image";

const cards = [
  { title: "Our mission", copy: "To empower and inspire tech enthusiasts to create leading products through community-led growth and inclusive education.", image: "/assets/home-v2/mission-icon.png" },
  { title: "Our Vision", copy: "To be the leading pan-African ecosystem where diverse talents collaborate to solve global challenges with local insights.", image: "/assets/home-v2/vision-icon.png" },
];

export function Vision() {
  return (
    <section className="vision-section">
      <Image className="vision-section__deco" src="/assets/vision-deco.svg" width={371} height={303} alt="" />
      <div className="section-shell vision-section__inner">
        <div className="vision-section__copy">
          <span className="pill pill--blue">Our Vision</span>
          <h2>Driving innovation across Africa</h2>
          <p>We are more than just a tech hub; we are a movement. By connecting talent with opportunity, we are rewriting the narrative of African technology</p>
        </div>
        <div className="vision-panel">
          <Image className="vision-panel__image" src="/assets/home-v2/vision-panel.png" width={2160} height={1557} sizes="(max-width: 760px) 340px, 724px" alt="" />
          <div className="vision-cards">
            {cards.map((card) => <article className="vision-card" key={card.title}><Image src={card.image} width={60} height={60} alt="" /><h3>{card.title}</h3><p>{card.copy}</p></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
