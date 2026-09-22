import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { journey } from "@/data/experience";

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="section-space">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.65fr] lg:gap-20">
        <SectionHeading label="Journey" title="A few steps along the way." id="journey-heading" />
        <ol className="border-l border-line">
          {journey.map((entry) => (
            <li key={entry.organization} className="relative pb-10 pl-7 last:pb-0 md:pl-9">
              <span aria-hidden="true" className="absolute -left-[4.5px] top-1.5 size-2 rounded-full bg-accent" />
              <p className="font-mono text-xs leading-5 text-secondary">{entry.period}</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight">{entry.organization}</h3>
              <p className="mt-2 text-sm leading-6">{entry.role}</p>
              <p className="mt-3 max-w-xl text-base leading-7 text-secondary">{entry.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
