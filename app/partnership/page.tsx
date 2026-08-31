import { OrganizationField } from "@/components/organization/OrganizationForm";
import { OrganizationEyebrow, OrganizationHero } from "@/components/organization/OrganizationHero";
import { OrganizationShell } from "@/components/organization/OrganizationShell";

const supportTypes = ["Sponsor (Financial)", "Partner (Strategic)", "Community Supporter", "Corporate Partner", "Media Partner", "Others"];

function PartnershipForm() {
  return (
    <form className="org-form partnership-form" aria-label="Partnership enquiry form">
      <div className="org-form__grid">
        <OrganizationField label="First name" required><input name="firstName" autoComplete="given-name" placeholder="Enter name…" /></OrganizationField>
        <OrganizationField label="Organization name" required><input name="organization" autoComplete="organization" placeholder="Enter organization name…" /></OrganizationField>
        <OrganizationField label="Work email address" required><input name="email" type="email" autoComplete="email" spellCheck={false} placeholder="example@mail.com" /></OrganizationField>
        <OrganizationField label="Location"><select name="country" autoComplete="country-name" defaultValue="Nigeria"><option>Nigeria</option><option>Ghana</option><option>Kenya</option></select></OrganizationField>
        <OrganizationField label="Phone number"><input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+234 000 000 0000" /></OrganizationField>
        <OrganizationField label="Department" required><select name="department" defaultValue=""><option value="" disabled>Select department</option><option>People</option><option>CSR</option><option>Partnerships</option></select></OrganizationField>
      </div>
      <fieldset className="support-types"><legend>Support type <b>*</b></legend>{supportTypes.map((type) => <label key={type}><input type="checkbox" name="supportType" value={type} /><span>{type}</span></label>)}</fieldset>
      <OrganizationField label="Motivation/Message" required><textarea name="message" placeholder="Tell us how you’d like to collaborate…" /></OrganizationField>
      <button className="org-submit" type="submit">Confirm &amp; Submit</button>
    </form>
  );
}

export default function Page() {
  return (
    <OrganizationShell pageClass="partnership-page">
      <OrganizationHero eyebrow="Partnership" title={<>Help us contribute to doing<br />more of what we do the most.<br />Become a partner</>} description="Become a part of Product Hub Africa. Join us today as we push towards making e-learning better and affordable by all" className="partnership-hero" />
      <section className="org-form-section org-form-section--partnership" id="page-form"><div className="org-section-title"><OrganizationEyebrow>Form</OrganizationEyebrow><h2>Kindly provide the following<br />information</h2></div><PartnershipForm /></section>
    </OrganizationShell>
  );
}
