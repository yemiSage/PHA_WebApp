import Image from "next/image";
import { PageShell } from "@/components/programmes/PageShell";
import { Faq } from "@/components/programmes/Faq";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Programmes | Product Hub Africa",
  description:
    "Explore bootcamps, advanced masterclasses, laptop scholarships and our talent hub.",
};
const asset = (name: string) => `/assets/programmes/${name}.png`;
const features = {
  bootcamp: [
    [
      "Beginner friendly",
      "Live classes that teach you everything you need to get started.",
    ],
    [
      "Packed with hands-on experience",
      "Build practical skills through guided exercises and real projects.",
    ],
    [
      "Collaborative capstone projects",
      "Work together, apply your skills, and build your portfolio.",
    ],
  ],
  masterclass: [
    [
      "Industry experts",
      "Learn from industry experts who are leaders in their fields.",
    ],
    ["Mentorship", "Get guidance and support as you take your next step."],
    [
      "Real-life hands-on projects",
      "Collaborate and work on projects for the modern job market.",
    ],
  ],
  scholarship: [
    [
      "Experienced global talent",
      "Build the skills you need to become a global professional.",
    ],
    ["Tools to get started", "Access the equipment you need to keep learning."],
    [
      "Community support",
      "Grow alongside a community that believes in your potential.",
    ],
  ],
  talent: [
    [
      "Verified, not just listed",
      "We check identity, work history, and credentials before a profile goes live.",
    ],
    [
      "Experienced global talent",
      "Hire from our pool of experienced talents from our alumni.",
    ],
    [
      "No recruiter markup",
      "No fixed rates; payments are negotiable across parties.",
    ],
  ],
};
function Features({ items }: { items: string[][] }) {
  return (
    <ul className="pha-features">
      {items.map(([title, copy]) => (
        <li key={title}>
          <span className="pha-features__icon">
            <Image
              src="/assets/programmes/imgArrowLeftCircleFilled.svg"
              width={28}
              height={28}
              alt=""
            />
          </span>
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default function ProgrammesPage() {
  return (
    <PageShell>
      <section className="pha-programme-hero section-shell">
        <div>
          <span className="pill pill--purple">Our programmes</span>
          <h1>
            Be a part of <em>Africa’s</em> next global builders today
          </h1>
          <p>
            From your first introduction to your next big career move, PHA gives
            you the training, tools, and community to get there; faster than you
            thought possible.
          </p>
          <Button href="#paths" arrow>
            Get started
          </Button>
        </div>
        <div className="pha-photo-grid">
          {[6626, 6627, 6625, 6628, 6629, 6630, 6631, 6632].map((id, i) => (
            <Image
              key={id}
              src={asset(`imgFrame214722${id}`)}
              alt={`A member of the PHA professional community ${i + 1}`}
              width={200}
              height={220}
              priority={i < 4}
            />
          ))}
        </div>
      </section>
      <section className="pha-paths" id="paths">
        <div className="section-shell">
          <div className="pha-section-title">
            <span className="pill pill--blue">Programmes</span>
            <h2>Four paths. One mission.</h2>
            <p>
              Whatever stage you are at, we’ve got the perfect programme
              designed to cater for you.
            </p>
          </div>
          <div className="pha-path">
            <div className="pha-bootcamp-collage">
              {[6591, 6592, 6593].map((id) => (
                <Image
                  key={id}
                  src={asset(`imgFrame214722${id}`)}
                  width={190}
                  height={260}
                  alt="Learners collaborating at a PHA bootcamp"
                />
              ))}
              <span className="pha-sticker pha-sticker--orange">
                Collaborate
              </span>
              <span className="pha-sticker pha-sticker--blue">Learn!!!</span>
              <Image
                className="pha-collage-star"
                src="/assets/programmes/imgStar3.svg"
                width={70}
                height={70}
                alt=""
              />
            </div>
            <div className="pha-path__copy">
              <h2>Our bootcamp</h2>
              <p>
                Our bootcamp programmes offer the perfect opportunity to
                kick-start your career in a discipline of your choice.
              </p>
              <Features items={features.bootcamp} />
              <Button href="/#programmes" arrow>
                Explore programmes
              </Button>
            </div>
          </div>
          <div className="pha-path">
            <div className="pha-path__copy">
              <h2>Advanced masterclass</h2>
              <p>
                Thinking of levelling up your career? Our masterclass might just
                be what you need. Designed to equip you with what you need for
                the modern job market.
              </p>
              <Features items={features.masterclass} />
              <Button href="/#programmes" arrow>
                Join now
              </Button>
            </div>
            <Image
              className="pha-path__photo"
              src="/assets/programmes/masterclass.png"
              width={584}
              height={429}
              alt="Professionals learning together at a computer"
            />
          </div>
          <aside className="pha-banner">
            <h2>
              Equip yourself with the right necessary skills. Pick the right
              programme to start today.
            </h2>
            <Button href="/#community" arrow>
              Join our community
            </Button>
          </aside>
          <div className="pha-path">
            <div className="pha-scholarship-photo">
              <Image
                src={asset(
                  "img9Ade060E2E874Df76A61B1295E70Dd60BackgroundRemoved2Copy2",
                )}
                width={520}
                height={486}
                alt="Two laptop scholarship recipients holding their laptops"
              />
            </div>
            <div className="pha-path__copy">
              <h2>Laptop scholarships</h2>
              <p>
                Be part of our scholarship programmes, designed to help you
                access the tools to learn and grow.
              </p>
              <Features items={features.scholarship} />
            </div>
          </div>
          <div className="pha-path">
            <div className="pha-path__copy">
              <h2>Talent hub (Job matching)</h2>
              <p>
                Empower your team with top-tier professionals; experienced and
                reliable talents ready to drive results each day.
              </p>
              <Features items={features.talent} />
              <Button href="/talent-pool" arrow>
                Hire talent
              </Button>
            </div>
            <Image
              className="pha-path__photo"
              src={asset("imgFrame2147226629")}
              width={584}
              height={429}
              alt="A professional ready for her next opportunity"
            />
          </div>
        </div>
      </section>
      <Faq />
    </PageShell>
  );
}
