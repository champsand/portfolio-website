import type { ReactNode } from "react";

interface ProjectSectionProps {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  emphasis?: string;
  children?: ReactNode;
  wide?: boolean;
}

export default function ProjectSection({ id, number, title, paragraphs, emphasis, children, wide = false }: ProjectSectionProps) {
  return <section id={id} aria-labelledby={`${id}-heading`} className={`case-section ${wide ? "case-section-wide" : ""} ${id === "learned" ? "case-learning" : ""}`}>
    <div className="case-shell case-section-grid">
      <div className="case-section-heading">
        <p className="eyebrow case-accent">{number} / {id === "learned" ? "REFLECTION" : "CHAPTER"}</p>
        <h2 id={`${id}-heading`}>{title}</h2>
      </div>
      <div className="case-prose">
        {paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        {emphasis && <blockquote className="case-pull">{emphasis}</blockquote>}
        {children}
      </div>
    </div>
  </section>;
}
