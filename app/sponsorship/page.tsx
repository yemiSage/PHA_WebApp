export const metadata = { title: "Sponsorship | Product Hub Africa" };
import Image from "next/image";
import { OrganizationFormSection } from "@/components/organization/OrganizationForm";
import { OrganizationEyebrow, OrganizationHero } from "@/components/organization/OrganizationHero";
import { OrganizationShell } from "@/components/organization/OrganizationShell";

const options = [
  ["Sponsor a laptop", "Connect with like-minded techies who are as passionate about product development as you are.", "/assets/pages/sponsor-laptop.svg"],
  ["Sponsor an enrollment", "Help a learner gain access to structured training, practical experience, and community support.", "/assets/pages/sponsor-enrollment.svg"],
  ["Donate to our cause", "Support programmes that create sustainable opportunities for African talent.", "/assets/pages/sponsor-donate.svg"],
];

export default function Page() {
  return (
    <OrganizationShell pageClass="sponsorship-page">
      <OrganizationHero eyebrow="Partnership" title={<>Become our sponsor here at<br />Product Hub Africa</>} description="Become a part of Product Hub Africa. Join us today as we push towards making e-learning better and affordable by all" className="sponsorship-hero" />
      <section className="sponsorship-programmes">
        <div className="org-section-title org-section-title--light"><OrganizationEyebrow>Core values</OrganizationEyebrow><h2>Our sponsorship programmes</h2><p>We embrace various sponsorship opportunities and invite you to be a valued partner.</p></div>
        <div className="sponsor-card-grid">{options.map(([title, copy, icon]) => <article key={title}><span><Image src={icon} width={32} height={32} alt="" /></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <OrganizationFormSection kind="sponsorship" />
    </OrganizationShell>
  );
}

