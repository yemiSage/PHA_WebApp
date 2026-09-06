import Image from "next/image";
import { PageShell } from "@/components/programmes/PageShell";
import { Button } from "@/components/ui/Button";
import "@/app/pages.css";

export const metadata = { title: "Help | Product Hub Africa" };
const questions = [
  ["Can I partner with PHA to acquire talents?", "PHA’s team can answer questions and concerns about services, saving you time by addressing common needs in one place."],
  ["How can I join a Product Hub Africa programme?", "Browse our programmes, choose the track that fits your goals, and use the enrolment link on the course page."],
  ["Can I volunteer with Product Hub Africa?", "Yes. Visit the volunteer page and tell us how you would like to contribute."],
  ["How do I sponsor a learner?", "Our sponsorship page explains the available opportunities and connects you directly with our team."],
  ["Where can I get more support?", "Send us a message through the contact page and our team will respond."],
];
export default function HelpPage() {
  return <PageShell><div className="inner-page help-page">
    <section className="help-hero section-shell"><span className="pill">Help</span><h1>Frequently asked questions</h1><p>Everything you need to know about our programs and community.</p>
      <div className="help-faq">{questions.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span aria-hidden="true" /></summary><p>{a}</p></details>)}</div>
      <div className="help-contact"><p>Can’t find the answers you’re looking for?</p><Button href="/contact" size="small" arrow>Contact us</Button></div>
    </section>
    <section className="community-cta"><Image src="/assets/pages/help-community.png" fill sizes="100vw" alt="Young professionals collaborating around a laptop" /><div className="community-cta__shade" /><div className="community-cta__copy"><span className="pill pill--red">Come join us</span><h2>Ready to start building your career?</h2><p>Come join thousands of young enthusiastic individuals who are poised to changing their career.</p><Button href="/#community" variant="secondary" arrow>Join us now</Button></div></section>
  </div></PageShell>;
}
