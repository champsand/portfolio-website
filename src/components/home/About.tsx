import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-space">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.65fr] lg:gap-20">
        <SectionHeading label="About" title="A little about me" id="about-heading" />
        <div className="max-w-[680px] space-y-6 text-base leading-[1.9] text-secondary md:text-lg">
          {about.map((paragraph, index) => <p key={paragraph} className={index === about.length - 1 ? "text-foreground" : undefined}>{paragraph}</p>)}
        </div>
      </Container>
    </section>
  );
}
