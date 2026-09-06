import { PageShell } from "@/components/programmes/PageShell";
import content from "@/data/privacy-content.json";
import "@/app/privacy.css";

export const metadata = { title: "Privacy Policy | Product Hub Africa" };
export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <div className="privacy-page" id="top">
        <header className="privacy-heading">
          <span className="pill">Legal</span>
          <h1>Privacy policy</h1>
          <p>Last updated 19th August, 2026</p>
        </header>
        <div className="privacy-layout section-shell">
          <article>
            <p>{content.intro}</p>
            {content.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                {"items" in section && section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
          <aside>
            <nav aria-label="Privacy policy contents">
              {content.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
            <a className="privacy-back" href="#top">
              <span aria-hidden="true">↑</span> Back to Top
            </a>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
