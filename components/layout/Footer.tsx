import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "Menu",
    links: [
      { label: "Programmes", href: "/programmes" },
      { label: "Talent Pool", href: "/talent-pool" },
      { label: "Counseling", href: "/#counselling" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Product Hub Africa",
    links: [
      { label: "Partnership", href: "/partnership" },
      { label: "Sponsor", href: "/sponsorship" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Help", href: "/help" },
    ],
  },
  {
    title: "Others",
    links: [
      { label: "About us", href: "/about" },
      { label: "Policy", href: "/privacy-policy" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", icon: "/assets/instagram.svg" },
  { label: "LinkedIn", icon: "/assets/linkedin.svg" },
  { label: "X", icon: "/assets/x.svg" },
  { label: "Facebook", icon: "/assets/facebook.svg" },
];

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__mark" aria-hidden="true">
        <Image src="/assets/footer-bg.png" width={1500} height={1000} alt="" />
      </div>
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Image className="site-footer__logo" src="/assets/footer-logo.png" width={182} height={48} alt="Product Hub Africa" />
          <p className="site-footer__description">Product Hub Africa is a Non-governmental organization designed to equipped up coming potential tech enthusiast</p>
          <p className="site-footer__copyright">© 2026 Product Hub Africa. All rights reserved.</p>
          <div className="site-footer__socials" aria-label="Social media">
            {socialLinks.map((social) => (
              <a key={social.label} href="#" aria-label={social.label}>
                <Image src={social.icon} width={24} height={24} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="site-footer__content">
          <nav className="site-footer__links" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div className="site-footer__group" key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.links.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}
                </div>
              </div>
            ))}
          </nav>
          <div className="newsletter">
            <h3>Don’t miss an update, subscribe to our newsletter</h3>
            <form className="newsletter__form">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" name="email" type="email" autoComplete="email" spellCheck={false} placeholder="Enter address…" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

