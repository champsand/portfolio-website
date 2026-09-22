import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "@/types/portfolio";

export default function ProjectNavigation({ project }: { project: Project }) {
  const published = projects.filter((item) => item.caseStudyHref);
  const index = published.findIndex((item) => item.slug === project.slug);
  const previous = published[index - 1];
  const next = published[index + 1];
  return (
    <nav aria-label="Project navigation" className="border-t border-line py-12 md:py-16">
      <Container className="mb-10 grid gap-8 sm:grid-cols-2">
        {previous && <Link href={previous.caseStudyHref!} className="group text-link flex-col items-start">
          <span className="flex items-center gap-2 font-mono text-xs text-secondary"><ArrowLeft size={15} aria-hidden="true" />Previous Project</span>
          <span>{previous.title}</span>
        </Link>}
        {next && <Link href={next.caseStudyHref!} className="text-link flex-col items-start sm:col-start-2 sm:items-end sm:text-right">
          <span className="flex items-center gap-2 font-mono text-xs text-secondary">Next Project<ArrowRight size={15} aria-hidden="true" /></span>
          <span>{next.title}</span>
        </Link>}
      </Container>
      <Container className="flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/#work" className="text-link"><ArrowLeft size={17} aria-hidden="true" />Back to Selected Work</Link>
        <ProjectLinks project={project} />
      </Container>
    </nav>
  );
}
