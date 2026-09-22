import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ExternalLink from "@/components/ui/ExternalLink";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  number: string;
  featured?: boolean;
}

export default function ProjectCard({ project, number, featured = false }: ProjectCardProps) {
  return (
    <article aria-labelledby={`${project.slug}-title`} className={featured ? "grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12" : "flex flex-col"}>
      <div className="relative aspect-video overflow-hidden rounded-sm border border-line bg-surface">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={featured
            ? "(min-width: 1276px) 660px, (min-width: 1024px) 55vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
            : "(min-width: 1276px) 566px, (min-width: 768px) 45vw, calc(100vw - 48px)"}
          className="object-contain"
        />
      </div>
      <div className={featured ? "" : "flex flex-1 flex-col pt-7"}>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs leading-6 text-secondary">
          <span className="text-accent">{number}</span>
          <span>{project.category}</span>
          <span aria-hidden="true">/</span>
          <span>{project.year}</span>
        </p>
        <h3 id={`${project.slug}-title`} className={`mt-3 font-medium leading-tight tracking-[-0.035em] ${featured ? "text-4xl md:text-[42px]" : "max-w-md text-2xl md:text-[28px]"}`}>
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-foreground">{project.role}</p>
        <p className="mt-4 text-base leading-7 text-secondary">{project.description}</p>
        <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
          {project.homepageTags.map((tag) => <li key={tag} className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs leading-5 text-secondary">{tag}</li>)}
        </ul>
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-x-7 gap-y-1">
            <ExternalLink href={project.github} className="text-link" aria-label={`${project.title} on GitHub (opens in a new tab)`}>GitHub <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>
            {project.liveUrl && <ExternalLink href={project.liveUrl} className="text-link" aria-label={`${project.title} live app (opens in a new tab)`}>Live App <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>}
          </div>
          {project.caseStudyHref ? (
            <Link href={project.caseStudyHref} className="text-link mt-2" aria-label={`View Case Study: ${project.title}`}>
              View Case Study <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ) : <p className="mt-2 font-mono text-xs leading-5 text-secondary">Case study unavailable</p>}
        </div>
      </div>
    </article>
  );
}
