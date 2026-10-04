import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ExternalLink from "@/components/ui/ExternalLink";
import type { Project } from "@/types/portfolio";
import ProjectMedia from "./ProjectMedia";

export default function ProjectChapter({ project, number }: { project: Project; number: string }) {
  return (
    <article id={`work-${project.slug}`} aria-labelledby={`${project.slug}-title`} className={`project-chapter chapter-${project.showcase.kind}`}>
      <div className="work-shell chapter-grid">
        <div className="chapter-copy">
          <p className="chapter-meta"><span className="chapter-number">{number}</span><span>{project.category}<br />{project.year}</span></p>
          <h3 id={`${project.slug}-title`} className="chapter-title">{project.title}</h3>
          <p className="chapter-role">{project.role}</p>
          <p className="chapter-description">{project.description}</p>
          <ul aria-label={`${project.title} technologies`} className="chapter-technologies">
            {project.homepageTags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className="chapter-media"><ProjectMedia project={project} /></div>
        <div className="chapter-links">
          {project.caseStudyHref && <Link href={project.caseStudyHref} className="chapter-primary" aria-label={`View Case Study: ${project.title}`}>View Case Study <ArrowUpRight size={22} aria-hidden="true" /></Link>}
          <div className="chapter-secondary">
            <ExternalLink href={project.github} className="text-link" aria-label={`${project.title} on GitHub (opens in a new tab)`}>GitHub <ArrowUpRight size={15} aria-hidden="true" /></ExternalLink>
            {project.liveUrl && <ExternalLink href={project.liveUrl} className="text-link" aria-label={`${project.title} live app (opens in a new tab)`}>Live App <ArrowUpRight size={15} aria-hidden="true" /></ExternalLink>}
          </div>
        </div>
      </div>
    </article>
  );
}
