import { Button } from "@/components/ui/Button";

export function Faq({ subject = "programmes" }: { subject?: string }) {
  const questions = [
    [
      "Can I partner with PHA to acquire talents?",
      "Yes. Visit our partnership page to tell us about your organisation and the talent you need. Our team will help you explore the right opportunities.",
    ],
    [
      "Do I have to pay commission to hire talents here?",
      "There is no recruiter markup. Rates and payment arrangements are agreed directly between the hiring organisation and the talent.",
    ],
    [
      "Do these talents have experience?",
      "Our talent pool includes professionals with practical project experience. Review each profile to find the skills and experience that fit your team.",
    ],
    [
      "How do I find the right programme for me?",
      "Explore our bootcamp for foundational skills or an advanced masterclass to build on your experience. Contact us if you need help choosing a path.",
    ],
  ];
  return (
    <section className="pha-faq section-shell">
      <div className="pha-section-title">
        <span className="pill pill--blue">FAQs</span>
        <h2>Frequently asked questions</h2>
        <p>
          Here are a couple of questions frequently asked about our {subject}.
        </p>
      </div>
      <div className="pha-faq__items">
        {questions.map(([question, answer], index) => (
          <details key={question} name="programme-faq" open={index === 1}>
            <summary>
              {question}
              <span aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <div className="pha-faq__contact">
        <p>Can’t find the answers you’re looking for?</p>
        <Button href="/contact" arrow>
          Contact us
        </Button>
      </div>
    </section>
  );
}
