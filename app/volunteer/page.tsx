export const metadata = { title: "Volunteer | Product Hub Africa" };
import Image from "next/image";
import { OrganizationFormSection } from "@/components/organization/OrganizationForm";
import { OrganizationHero } from "@/components/organization/OrganizationHero";
import { OrganizationShell } from "@/components/organization/OrganizationShell";

export default function Page() {
  return (
    <OrganizationShell pageClass="volunteer-page">
      <OrganizationHero eyebrow="Hire from us" tone="neutral" title="Volunteer with us" description="Become a part of Product Hub Africa. Join us today as we push towards making e-learning better and affordable for all" className="volunteer-hero">
        <div className="volunteer-hero__people"><Image src="/assets/footer-bg.png" width={1500} height={1000} loading="eager" fetchPriority="high" alt="Product Hub Africa volunteers" /></div>
      </OrganizationHero>
      <OrganizationFormSection kind="volunteer" />
    </OrganizationShell>
  );
}

