import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type Tone = "blue" | "purple" | "neutral";

export function OrganizationEyebrow({ children, tone = "blue" }: { children: ReactNode; tone?: Tone }) {
  return <span className={`org-eyebrow org-eyebrow--${tone}`}>{children}</span>;
}

export function OrganizationHero({ eyebrow, title, description, tone = "purple", children, className = "" }: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  tone?: Tone;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`org-hero ${className}`}>
      <div className="org-hero__copy">
        <OrganizationEyebrow tone={tone}>{eyebrow}</OrganizationEyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="org-actions">
          <Button href="#page-form" size="small">Talk to us</Button>
          <Button href="mailto:producthubafrica@gmail.com?subject=Operations%20enquiry" variant="ghost" size="small" arrow>Contact operations</Button>
        </div>
      </div>
      {children}
    </section>
  );
}

