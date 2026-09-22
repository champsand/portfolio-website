import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="border-y border-line py-16 md:py-20">
      <Container className="grid gap-9 lg:grid-cols-[1fr_1.65fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-4 text-accent">Certifications</p>
          <h2 id="certifications-heading" className="text-[28px] font-medium tracking-[-0.035em]">Continuing to learn.</h2>
        </div>
        <ul className="divide-y divide-line">
          {certifications.map((certificate) => (
            <li key={certificate.title} className="py-6 first:pt-0 last:pb-0">
              <p className="font-mono text-xs text-secondary">{certificate.issuer} · {certificate.year}</p>
              <h3 className="mt-2 text-base font-medium leading-7">{certificate.title}</h3>
              {certificate.credentialUrl ? (
                <ExternalLink href={certificate.credentialUrl} className="text-link mt-1" aria-label={`View Credential: ${certificate.title} (opens in a new tab)`}>View Credential <ArrowUpRight size={15} aria-hidden="true" /></ExternalLink>
              ) : <p className="mt-3 font-mono text-xs leading-6 text-secondary">Credential ID: {certificate.credentialId}</p>}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
