import Image from "next/image";
import { OrganizationShell } from "@/components/organization/OrganizationShell";
import { OrganizationEyebrow } from "@/components/organization/OrganizationHero";
import { OrganizationField } from "@/components/organization/OrganizationForm";
import { SubmissionForm } from "@/components/forms/SubmissionForm";
import { Button } from "@/components/ui/Button";
import "@/app/contact.css";

export const metadata = {
  title: "Contact Us | Product Hub Africa",
  description:
    "Talk to Product Hub Africa about bootcamps, partnerships, volunteering and sponsorship.",
};
const email = "mailto:producthubafrica@gmail.com";
const support = [
  {
    title: "Email Us",
    icon: "MailFilled",
    lines: ["info@producthubafrica.org", "producthubafrica@gmail.com"],
    label: "Send a mail",
    href: email,
  },
  {
    title: "Visit Us",
    icon: "IMacFilled",
    lines: [
      "Lagos, Nigeria",
      "Reach out to our team virtually. Schedule a call here.",
    ],
    label: "Schedule a call",
    href: `${email}?subject=Schedule%20a%20call`,
  },
  {
    title: "Support",
    icon: "WhatsappFilled",
    lines: ["Connect with our community on WhatsApp for support."],
    label: process.env.NEXT_PUBLIC_WHATSAPP_URL
      ? "Join our channel"
      : "Request channel link",
    href:
      process.env.NEXT_PUBLIC_WHATSAPP_URL ||
      `${email}?subject=WhatsApp%20channel%20invite`,
  },
];
export default function ContactPage() {
  return (
    <OrganizationShell pageClass="contact-page">
      <section className="contact-hero" id="top">
        <Image
          className="contact-hero__map"
          src="/assets/additional/7359-imgGroup2.svg"
          width={981}
          height={905}
          alt=""
        />
        <div className="org-section-title">
          <OrganizationEyebrow>Get in touch</OrganizationEyebrow>
          <h1>
            We would be so happy to
            <br />
            hear from you!
          </h1>
          <p>
            Have a question about our bootcamps, community, or partnerships? Our
            team is ready to answer all your questions
          </p>
          <div className="contact-actions">
            <Button href="#page-form" arrow>
              Talk to us
            </Button>
            <Button
              href={`${email}?subject=Operations%20enquiry`}
              variant="ghost"
              arrow
            >
              Contact operations
            </Button>
          </div>
        </div>
      </section>
      <section className="contact-support" id="support">
        <div className="org-section-title">
          <OrganizationEyebrow tone="neutral">Support</OrganizationEyebrow>
          <h2>
            Get the immediate support
            <br />
            that you need
          </h2>
        </div>
        <div className="contact-support__grid section-shell">
          {support.map((card) => (
            <article key={card.title}>
              <span>
                <Image
                  src={`/assets/additional/7798-img${card.icon}.svg`}
                  width={28}
                  height={28}
                  alt=""
                />
              </span>
              <div>
                <h3>{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line}>
                    {line.includes("@") ? (
                      <a href={`mailto:${line}`}>{line}</a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
                <Button href={card.href} variant="ghost" arrow>
                  {card.label}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-enquiry" id="page-form">
        <div className="org-section-title">
          <span className="pill pill--red">Get in touch</span>
          <h2>Have an enquiry? Send us a message</h2>
        </div>
        <div className="contact-enquiry__grid section-shell">
          <Image
            className="contact-enquiry__photo"
            src="/assets/additional/7732-imgFrame2147225945.png"
            width={516}
            height={642}
            alt="A friendly support team member wearing a headset"
          />
          <SubmissionForm
            kind="contact"
            className="contact-form"
            label="Contact enquiry form"
            submitLabel="Send message"
          >
            <div className="contact-form__names">
              <OrganizationField label="First name" required>
                <input
                  required
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="Enter name"
                />
              </OrganizationField>
              <OrganizationField label="Last name" required>
                <input
                  required
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Enter name"
                />
              </OrganizationField>
            </div>
            <OrganizationField label="Email address" required>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="example@mail.com"
              />
            </OrganizationField>
            <OrganizationField label="Phone number">
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+234 0000000000"
              />
            </OrganizationField>
            <OrganizationField label="Subject">
              <select name="subject" defaultValue="">
                <option value="" disabled>
                  Enter subject
                </option>
                {[
                  "Bootcamps",
                  "Community",
                  "Partnership",
                  "Volunteering",
                  "Sponsorship",
                  "Other enquiry",
                ].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </OrganizationField>
            <OrganizationField label="Message" required>
              <textarea
                name="message"
                required
                placeholder="How can we help you?"
                maxLength={5000}
              />
            </OrganizationField>
          </SubmissionForm>
        </div>
      </section>
      <section className="contact-social" id="social">
        <div className="org-section-title">
          <span className="pill pill--red">Social media</span>
          <h2>Follow us on our social handles</h2>
        </div>
        <div className="contact-social__links">
          {[
            [
              "Instagram",
              "InstagramFilled",
              "https://www.instagram.com/producthubafrica/",
            ],
            [
              "LinkedIn",
              "LinkedinFilled",
              "https://www.linkedin.com/company/product-hub-africa/",
            ],
            ["X", "SocialXFilled", "https://x.com/producthubafrica"],
            [
              "Facebook",
              "FacebookOriginalMono",
              "https://www.facebook.com/producthubafrica/",
            ],
          ].map(([label, icon, href]) => (
            <a
              href={href}
              key={label}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/assets/additional/7780-img${icon}.svg`}
                width={28}
                height={28}
                alt=""
              />
            </a>
          ))}
        </div>
      </section>
    </OrganizationShell>
  );
}
