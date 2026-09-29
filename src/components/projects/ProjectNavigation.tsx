import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectLinks from "./ProjectLinks";
import ProjectMotif from "./ProjectMotif";
import type { Project } from "@/types/portfolio";

export default function ProjectNavigation({ project }: { project: Project }) {
  const published = projects.filter(item => item.caseStudyHref);
  const nextIndex = (published.findIndex(item => item.slug === project.slug) + 1) % published.length;
  const next = published[nextIndex];
  return <nav aria-label="Project navigation" className="case-navigation">
    <div className="case-shell">
      <div className="case-closing-links"><Link href="/#work" className="text-link"><ArrowLeft size={16} aria-hidden="true" />Back to Selected Work</Link><ProjectLinks project={project} /></div>
      <Link href={next.caseStudyHref!} className="case-next">
        <span className="eyebrow">NEXT CASE STUDY / {String(nextIndex + 1).padStart(2, "0")}</span>
        <span className="case-next-title">{next.title}<ArrowUpRight aria-hidden="true" /></span>
        <span className="case-next-concept">{next.showcase.concept}</span>
        <ProjectMotif project={next} decorative />
      </Link>
    </div>
  </nav>;
}
