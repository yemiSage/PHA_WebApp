import { SubmissionForm } from "@/components/forms/SubmissionForm";
import type { ReactNode } from "react";
import { OrganizationEyebrow } from "@/components/organization/OrganizationHero";

export function OrganizationField({ label, required = false, children }: { label: string; required?: boolean; children: ReactNode }) {
  return <label className="org-field"><span>{label}{required ? <b>*</b> : null}</span>{children}</label>;
}

function PersonForm({ kind }: { kind: "volunteer" | "sponsorship" }) {
  const categoryLabel = kind === "volunteer" ? "Department" : "Sponsorship category";
  return (
    <SubmissionForm kind={kind} label={`${kind} application form`}>
      <div className="org-form__grid">
        <OrganizationField label="First name" required><input required name="firstName" autoComplete="given-name" placeholder="Enter name…" /></OrganizationField>
        <OrganizationField label="Last name" required><input required name="lastName" autoComplete="family-name" placeholder="Enter name…" /></OrganizationField>
        <OrganizationField label="Email address" required><input required name="email" type="email" autoComplete="email" spellCheck={false} placeholder="example@mail.com" /></OrganizationField>
        <OrganizationField label="Occupation"><select name="occupation" defaultValue=""><option value="" disabled>Select option</option><option>Student</option><option>Professional</option><option>Founder</option></select></OrganizationField>
        <OrganizationField label="LinkedIn profile"><input name="linkedin" type="url" autoComplete="url" spellCheck={false} placeholder="linkedin.com/in/name" /></OrganizationField>
        <OrganizationField label={categoryLabel} required><select required name="category" defaultValue=""><option value="" disabled>{kind === "volunteer" ? "Select department" : "Select option"}</option>{(kind === "volunteer" ? ["Community", "Programmes", "Operations", "Design", "Engineering", "Marketing"] : ["Sponsor a laptop", "Sponsor an enrollment", "Donate to our cause"]).map(option => <option key={option}>{option}</option>)}</select></OrganizationField>
        <OrganizationField label="Why do you want to join?" required><textarea required name="motivation" placeholder="Tell us what motivates you…" /></OrganizationField>
      </div>

    </SubmissionForm>
  );
}

export function OrganizationFormSection({ kind }: { kind: "volunteer" | "sponsorship" }) {
  return (
    <section className={`org-form-section org-form-section--${kind}`} id="page-form">
      <div className="org-section-title"><OrganizationEyebrow>Form</OrganizationEyebrow><h2>Kindly provide the following<br />information</h2></div>
      <PersonForm kind={kind} />
    </section>
  );
}

