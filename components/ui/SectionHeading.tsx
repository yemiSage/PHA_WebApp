type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "neutral" | "blue" | "red" | "purple" | "yellow";
  size?: "display" | "large";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "neutral",
  size = "display",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${size} ${light ? "section-heading--light" : ""}`}>
      <span className={`pill pill--${tone}`}>{eyebrow}</span>
      <div className="section-heading__copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}
