import Image from "next/image";
import Link from "next/link";

export function BlogCard() {
  return (
    <article className="listing-card">
      <div className="listing-card__meta"><span>Community</span><span>12 min read</span></div>
      <div className="listing-card__copy">
        <h2>The influence of AI on skill development</h2>
        <p>In this study, we shall demystify some of the research findings conducted recently on the impact of...</p>
        <Link href="/blog/global-marketing-strategies">Read more <Image src="/assets/arrow-small.svg" width={16} height={16} alt="" /></Link>
      </div>
    </article>
  );
}
