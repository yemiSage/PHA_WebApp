import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { OrganizationEyebrow, OrganizationHero } from "@/components/organization/OrganizationHero";
import { OrganizationShell } from "@/components/organization/OrganizationShell";

import { TalentDirectory } from "@/components/organization/TalentDirectory";
export const metadata = { title: "Talent Pool | Product Hub Africa" };
const benefits = [
  ["Verified, not just listed", "We check identity, work history, and credentials before a profile goes live."],
  ["Experienced global talent", "Hire experienced professionals from our alumni network."],
  ["No recruiter markup", "No fixed rates; payments are negotiated directly between parties."],
  ["Recommendations", "Meet highly recommended people whose work we can confidently vouch for."],
];

const talentCards = [
  ["Amina Yusuf", "Product Designer", "Lagos, Nigeria", "/assets/facilitator-1.png"],
  ["Chinedu Okafor", "Product Manager", "Abuja, Nigeria", "/assets/facilitator-2.png"],
  ["Favour Adeyemi", "Frontend Developer", "Ibadan, Nigeria", "/assets/facilitator-3.png"],
  ["Kelechi Nwosu", "Data Analyst", "Enugu, Nigeria", "/assets/facilitator-4.png"],
  ["Zainab Bello", "UX Researcher", "Kaduna, Nigeria", "/assets/facilitator-5.png"],
  ["Tobi Akinyemi", "Backend Developer", "Akure, Nigeria", "/assets/facilitator-6.png"],
  ["Adaeze Nnamdi", "Business Analyst", "Port Harcourt, Nigeria", "/assets/facilitator-7.png"],
  ["David Mensah", "Cybersecurity Analyst", "Accra, Ghana", "/assets/facilitator-8.png"],
  ["Njeri Wambui", "Project Manager", "Nairobi, Kenya", "/assets/facilitator-9.png"],
  ["Kwame Osei", "Cloud Engineer", "Kumasi, Ghana", "/assets/facilitator-10.png"],
  ["Ruth Mukami", "Product Operations Lead", "Kigali, Rwanda", "/assets/facilitator-11.png"],
  ["Sibusiso Dlamini", "Mobile Developer", "Johannesburg, South Africa", "/assets/facilitator-12.png"],
  ["Aishat Abdullahi", "Growth Strategist", "Kano, Nigeria", "/assets/pages/leader-aishat.png"],
  ["Opeyemi Adegboye", "Design Lead", "Lagos, Nigeria", "/assets/pages/leader-opeyemi.png"],
  ["Osaite Emmanuel", "Talent Success Manager", "Benin City, Nigeria", "/assets/pages/leader-osaite.png"],
  ["Temitope Olajide", "Community Manager", "Osogbo, Nigeria", "/assets/pages/leader-temitope.png"],
  ["Victoria Chukwu", "Learning Experience Designer", "Owerri, Nigeria", "/assets/pages/leader-victoria.png"],
  ["Ifeoma Eze", "Technical Writer", "Uyo, Nigeria", "/assets/testimonial-1.png"],
].map(([name, role, location, image], index) => ({ id: index + 1, level: "Senior level", name, role, location, image }));

export default function Page() {
  return (
    <OrganizationShell pageClass="talent-page">
      <OrganizationHero eyebrow="Hire from us" tone="neutral" title={<>Hire the <em>best talent</em> for your<br />teams today!</>} description="Browse verified professionals who are actively available for work - full-time, contract, or project-based. See their skills, rates, and start dates before you even send a message." className="talent-hero">
        <div className="talent-hero__actions"><Button href="#directory" size="small" arrow>Hire talent</Button><Button href="/#community" variant="ghost" size="small">Join our community</Button></div>
        <div className="talent-hero__art" aria-hidden="true">
          <span className="talent-ribbon talent-ribbon--one">Project Managers</span><span className="talent-ribbon talent-ribbon--two">Software Developers</span><span className="talent-ribbon talent-ribbon--three">Product Designers</span><span className="talent-ribbon talent-ribbon--four">Virtual Assistant</span>
          <Image src="/assets/pages/talent-hero.png" width={4096} height={1550} loading="eager" fetchPriority="high" alt="" />
        </div>
      </OrganizationHero>

      <section className="talent-feature-section">
        <div className="org-section-title"><OrganizationEyebrow>Talents</OrganizationEyebrow><h2>Our talents are specially designed to meet<br />today’s challenges with creativity and expertise</h2></div>
        <div className="talent-feature-card">
          <Image src="/assets/pages/talent-feature.png" width={1500} height={1000} alt="Product Hub Africa professionals collaborating" />
          <div className="talent-benefit-list">{benefits.map(([title, copy]) => <article key={title}><span><Image src="/assets/talent-icon.svg" width={32} height={32} alt="" /></span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
      </section>

      <TalentDirectory talents={talentCards} />

      <section className="talent-request">
        <div className="org-section-title"><OrganizationEyebrow>Request</OrganizationEyebrow><h2>Request for a talent</h2><p>Can’t find what you’re looking for? Reach out and we’ll help<br />you find the right talent for the role.</p><Button href="/contact" size="small">Contact us</Button></div>
        <Image src="/assets/pages/talent-request-wave.svg" width={1567} height={327} alt="" aria-hidden="true" />
      </section>

      <section className="talent-faq">
        <div className="org-section-title"><OrganizationEyebrow>Request</OrganizationEyebrow><h2>Frequently asked questions</h2><p>Here are a few questions frequently asked about our<br />talent programmes.</p><Button href="/contact" size="small">Contact us</Button></div>
        <div className="faq-list">
          <details><summary>Can I partner with PHA to acquire talent?</summary><p>Yes. We work with organisations looking for verified product and technology professionals.</p></details>
          <details open><summary>Do I pay commission to hire talent here?</summary><p>No recruiter markup is added. Rates and payment terms are agreed directly between both parties.</p></details>
          <details><summary>Does this talent have experience?</summary><p>Our talent pool includes vetted professionals with practical industry experience.</p></details>
          <details><summary>How do I start a partnership?</summary><p>Contact our team and we will guide you through the partnership process.</p></details>
        </div>
        <div className="faq-contact"><strong>Can’t find the answer you’re looking for?</strong><Button href="/contact" size="small" arrow>Contact us</Button></div>
      </section>
    </OrganizationShell>
  );
}

