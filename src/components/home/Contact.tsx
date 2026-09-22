import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ExternalLink from "@/components/ui/ExternalLink";
import { site, contact } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-space">
      <Container className="grid gap-9 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
        <div>
          <SectionHeading label="Contact" title={contact.heading} id="contact-heading" />
          <p className="mt-6 max-w-lg text-base leading-8 text-secondary">{contact.description}</p>
        </div>
        <div>
          <a href={`mailto:${site.email}`} className="text-link gap-3" aria-label={`Email Matthew Sutiono at ${site.email}`}><Mail size={18} aria-hidden="true" />Email<span className="sr-only">: {site.email}</span><ArrowUpRight size={16} aria-hidden="true" /></a>
          <p className="mt-1 break-all text-sm text-secondary">{site.email}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-4">
            {site.socials.map((link) => <ExternalLink key={link.label} href={link.href} className="text-link">{link.label}<ArrowUpRight size={15} aria-hidden="true" /></ExternalLink>)}
            <Link href={site.cv.route} className="text-link">View CV<ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
