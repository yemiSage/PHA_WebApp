import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { OrganizationEyebrow } from "@/components/organization/OrganizationHero";
import { OrganizationShell } from "@/components/organization/OrganizationShell";

const values = [
  ["Fairness", "Connect with like-minded techies who are as passionate about product development as you are."],
  ["Equality", "Collaboration is at the heart of what we do, with access to opportunities that support growth."],
  ["Transparency", "Hear inspiring stories and success journeys from accomplished professionals."],
];
const impact = [
  ["Building Impact", "We check identity, work history, and credentials before a profile goes live."],
  ["Create a learning environment for growth", "Learn alongside experienced talent from our alumni network."],
  ["Mentorship & training", "Build practical experience with guidance from industry professionals."],
];
const achievements = [
  ["8K+ Students", "Trained by PHA across 10+ African countries"], ["300+ Jobs", "Across major industries"], ["5+ Tech Skills", "Provided by our bootcamp programmes"],
  ["6+ Bootcamps", "Over the past 3 years"], ["12k+ Pan-African", "Community members across 17 African countries."], ["48% Alumni", "Working across African countries"],
];
const leaders = [
  ["Victoria Oladosu", "Founder, Lead Community manager", "/assets/pages/leader-victoria.png", 1242, 1270],
  ["Dosunmu Aishat", "Programs, Community Manager", "/assets/pages/leader-aishat.png", 1080, 851],
  ["Adegboye Opeyemi", "Head of Operations, Digital Designer", "/assets/pages/leader-opeyemi.png", 853, 1280],
  ["Osaite Emmanuel", "Lead Designer", "/assets/pages/leader-osaite.png", 888, 1184],
  ["Temitope Abike", "Content Specialist", "/assets/pages/leader-temitope.png", 1086, 1448],
] as const;

export default function Page() {
  return (
    <OrganizationShell pageClass="about-page">
      <section className="org-hero about-hero">
        <div className="org-hero__copy"><OrganizationEyebrow>Product Hub Africa</OrganizationEyebrow><h1><em>Empowering</em> tech innovators<br />to shape the future</h1><p>We are a vibrant community of tech enthusiasts, united by our passion for creating scalable, user-centered products that drive positive change across Africa and beyond.</p></div>
        <Image className="about-hero__image" src="/assets/pages/about-raw-01.jpg" width={1199} height={800} loading="eager" fetchPriority="high" alt="Young professionals collaborating" />
      </section>
      <section className="about-partners"><div className="org-section-title"><OrganizationEyebrow tone="neutral">Partners</OrganizationEyebrow><h2>Backed by respected teams</h2></div><Image src="/assets/pages/about-partners.svg" width={79} height={48} alt="Product Hub Africa partner organisations" /></section>
      <section className="about-values"><div className="org-section-title"><OrganizationEyebrow tone="neutral">Foundation</OrganizationEyebrow><h2>What we value the most</h2><p>We are a dedicated non-profit and ed-tech community helping young people discover their strengths and contribute to society.</p></div><div className="value-grid">{values.map(([title, copy], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="about-impact"><div className="org-section-title"><OrganizationEyebrow>Who we are</OrganizationEyebrow><h2>Community &amp; Impact</h2><p>Our passionate volunteers work to empower African talent through learning, mentorship, and access.</p></div><div className="impact-list">{impact.map(([title, copy]) => <article key={title}><span><Image src="/assets/talent-icon.svg" width={32} height={32} alt="" /></span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
      <section className="about-achievements"><div className="org-section-title"><OrganizationEyebrow tone="neutral">Achievements</OrganizationEyebrow><h2>We bridge the gap between learning and<br />real-world experience</h2><p>Our courses help learners progress from complete beginners to junior-level professionals.</p></div><div className="achievement-grid">{achievements.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="about-team"><div className="org-section-title org-section-title--light"><OrganizationEyebrow tone="neutral">Core team</OrganizationEyebrow><h2>Meet our leadership team</h2><p>Meet the people working behind the scenes.</p></div><div className="leader-grid">{leaders.map(([name, role, src, width, height]) => <article key={name}><Image src={src} width={width} height={height} alt={name} /><h3>{name}</h3><p>{role}</p></article>)}</div></section>
      <section className="about-join"><Image className="about-join__ring about-join__ring--left" src="/assets/pages/about-ring-left.svg" width={705} height={579} alt="" /><Image className="about-join__ring about-join__ring--right" src="/assets/pages/about-ring-right.svg" width={705} height={579} alt="" /><div className="org-section-title"><OrganizationEyebrow tone="neutral">Join us</OrganizationEyebrow><h2>Want to be a part of us?</h2><p>We are always looking for people who are passionate about giving back to their community.</p><Button href="/volunteer" size="small" arrow>Volunteer with us</Button></div></section>
    </OrganizationShell>
  );
}
