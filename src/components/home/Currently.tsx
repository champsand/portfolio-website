import Container from "@/components/layout/Container";
import { currently } from "@/data/site";

export default function Currently() {
  return (
    <section aria-labelledby="currently-heading" className="border-y border-line bg-surface/40 py-12 md:py-14">
      <Container>
        <h2 id="currently-heading" className="eyebrow mb-8 text-secondary">Currently</h2>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {currently.map((entry) => (
            <li key={entry.number} className="border-t border-line pt-5 lg:border-t-0 lg:border-l lg:px-7 lg:pt-0 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0">
              <span className="font-mono text-xs text-accent">{entry.number}</span>
              <h3 className="mt-4 text-[15px] font-medium tracking-tight">{entry.title}</h3>
              <p className="mt-2 max-w-[260px] text-sm leading-6 text-secondary">{entry.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
