import { ArrowDown, ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import { github, hero } from "@/data/site";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero-section">
      <Container>
        <p className="eyebrow mb-8 flex items-center gap-3 text-secondary"><span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{hero.eyebrow}</p>
        <h1 id="hero-heading" className="max-w-[920px] text-[clamp(2.75rem,6.4vw,5rem)] font-medium leading-[1.07] tracking-[-0.055em]">I like learning by <span className="text-accent sm:block">building things.</span></h1>
        <p className="mt-8 max-w-[640px] text-base leading-[1.85] text-secondary md:text-lg">{hero.description}</p>
        <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <a href="#work" className="button-primary">Explore My Work <ArrowDown size={17} aria-hidden="true" /></a>
          <ExternalLink href={github.href} className="button-secondary">GitHub <ArrowUpRight size={17} aria-hidden="true" /></ExternalLink>
        </div>
        <p className="mt-16 max-w-xl font-mono text-[11px] leading-6 text-secondary md:mt-20 md:text-xs">{hero.metadata}</p>
      </Container>
    </section>
  );
}
