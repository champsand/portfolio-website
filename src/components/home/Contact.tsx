import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import { site, contact } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="contact-section">
      <Container>
        <p className="eyebrow closing-label">08 / Contact</p>
        <div className="contact-composition">
          <h2 id="contact-heading">{contact.heading}</h2>
          {/* The open upper-right field is reserved for future sculpture reassembly. */}
          <p className="contact-description">{contact.description}</p>
          <div className="contact-actions">
            <p className="eyebrow text-secondary">Email me</p>
            <a href={`mailto:${site.email}`} className="contact-email">{site.email}<ArrowUpRight size={24} aria-hidden="true" /></a>
            <nav aria-label="Contact links" className="contact-socials">
              {site.socials.map((link) => <ExternalLink key={link.label} href={link.href} className="text-link">{link.label}<ArrowUpRight size={14} aria-hidden="true" /></ExternalLink>)}
              <Link href={site.cv.route} className="text-link">View CV<ArrowUpRight size={14} aria-hidden="true" /></Link>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
}
