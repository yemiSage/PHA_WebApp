import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="section-shell blog-section__heading">
        <SectionHeading eyebrow="Blog" title="Fresh ideas, practical tips, and stories worth sharing" description="Explore insights on product, careers, technology, and the experiences shaping Africa’s growing tech ecosystem." />
        <Button href="#contact" arrow>Subscribe</Button>
      </div>
      <div className="section-shell blog-grid">
        {[1, 2, 3].map((item) => (
          <article className="blog-card" key={item}>
            <div className="blog-card__image" />
            <div className="blog-card__content">
              <div><span>Community</span><span>12 min read</span></div>
              <h3>The influence of AI on skill development</h3>
              <p>Artificial intelligence is reshaping how people learn, practise, and build the skills needed for the future of work.</p>
              <a href="#blog">read more <Image src="/assets/arrow-small.svg" width={20} height={20} alt="" /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
