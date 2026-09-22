import Container from "./Container";
import { site } from "@/data/site";
import ExternalLink from "@/components/ui/ExternalLink";

export default function Footer() {
  return (
    <footer className="border-t border-line py-9">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium">{site.name}</p>
            <p className="mt-2 text-xs text-secondary">Computer Science · Intelligent Systems</p>
            <p className="mt-2 text-xs text-secondary">{site.location}</p>
          </div>
          <nav aria-label="Footer links" className="flex flex-wrap gap-6">
            {site.socials.filter((link) => link.label !== "Instagram").map((link) => <ExternalLink key={link.label} href={link.href} className="text-link">{link.label}</ExternalLink>)}
            <a href={`mailto:${site.email}`} className="text-link">Email</a>
          </nav>
        </div>
        <p className="mt-8 font-mono text-[11px] text-secondary">© 2026 {site.name}.</p>
      </Container>
    </footer>
  );
}
