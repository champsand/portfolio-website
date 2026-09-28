import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="credentials-section">
      <Container>
        <div className="credentials-heading"><p className="eyebrow closing-label">07 / Credentials</p><h2 id="certifications-heading">Continuing to learn.</h2></div>
        <div className="credential-columns eyebrow" aria-hidden="true"><span>Year</span><span>Issuer</span><span>Certification</span><span>Record</span></div>
        <ul className="credential-list">
          {certifications.map((certificate) => (
            <li key={certificate.title} className="credential-row">
              <p className="credential-year">{certificate.year}</p>
              <p className="credential-issuer">{certificate.issuer}</p>
              <h3>{certificate.title}</h3>
              <div className="credential-record">
                {certificate.credentialUrl && <ExternalLink href={certificate.credentialUrl} className="text-link" aria-label={`View Credential: ${certificate.title} (opens in a new tab)`}>View Credential<ArrowUpRight size={15} aria-hidden="true" /></ExternalLink>}
                {certificate.credentialId && <p>Credential ID: {certificate.credentialId}</p>}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
