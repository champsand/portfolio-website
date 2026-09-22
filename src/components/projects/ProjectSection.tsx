import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

interface ProjectSectionProps {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  emphasis?: string;
  children?: ReactNode;
}

export default function ProjectSection({ id, number, title, paragraphs, emphasis, children }: ProjectSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-line py-16 md:py-20 lg:py-24">
      <Container className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <p className="mb-4 font-mono text-xs text-accent">{number}</p>
          <h2 id={`${id}-heading`} className="text-2xl font-medium tracking-[-0.035em] md:text-3xl">{title}</h2>
        </div>
        <div className="max-w-[70ch] space-y-6 text-base leading-8 text-secondary md:text-lg">
          {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {emphasis && <blockquote className="my-8 border-l-2 border-accent/60 pl-6 text-xl font-medium leading-8 tracking-tight text-foreground md:text-2xl md:leading-9">{emphasis}</blockquote>}
          {children}
        </div>
      </Container>
    </section>
  );
}
