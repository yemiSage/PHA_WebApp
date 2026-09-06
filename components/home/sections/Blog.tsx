import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="section-shell blog-section__heading">
        <SectionHeading eyebrow="Blog" tone="purple" title="Stay connected with updates around tech" description="Stay connected with daily dose of tech news, insights, and future‑shaping happenings. Subscribe to our update to always stay in touch" />
        <Button href="#contact" arrow>Subscribe</Button>
      </div>
      <div className="section-shell blog-grid">
        {[1, 2, 3].map((item) => (
          <article className="blog-card" key={item}>
            <div className="blog-card__image" />
            <div className="blog-card__content">
              <div><span>Community</span><span>12 min read</span></div>
              <h3>The influence of AI on skill development</h3>
              <p>In this study, we shall demystify some of the research findings conducted recently on the impact of...</p>
              <Link href="/blog/global-marketing-strategies">Read more <Image src="/assets/arrow-small.svg" width={20} height={20} alt="" /></Link>
            </div>
          </article>
        ))}
      </div>
      <Link className="blog-section__more" href="/blog">View more <span aria-hidden="true">⌄</span></Link>
    </section>
  );
}
