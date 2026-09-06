import { PageShell } from "@/components/programmes/PageShell";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/pages/BlogCard";
import "@/app/pages.css";

export const metadata = { title: "Blog | Product Hub Africa" };
const filters=["All blogs","Artificial intelligence","Community","Tech","Business","Growth"];
export default function BlogPage(){return <PageShell><div className="inner-page blog-page">
  <section className="blog-lead section-shell"><span className="pill pill--blue">Blog</span><h1>What to do before launching a<br/>product into a new country - global<br/>marketing strategies</h1><p className="blog-byline">Victorial Oladusu <span>–</span> 12 mins read <span>–</span> 19 Aug, 26</p><Button href="/blog/global-marketing-strategies" size="small" arrow>Read more</Button></section>
  <section className="blog-listing section-shell"><div className="blog-filters">{filters.map((f,i)=><a className={i===0?"is-active":""} href={i===0?"/blog":`/blog?category=${encodeURIComponent(f)}`} key={f}>{f}</a>)}<form action="/blog"><label className="sr-only" htmlFor="blog-search">Search blog</label><input id="blog-search" name="q" placeholder="Search" /></form></div><div className="listing-grid">{Array.from({length:6},(_,i)=><BlogCard key={i}/>)}</div></section>
  </div></PageShell>}
