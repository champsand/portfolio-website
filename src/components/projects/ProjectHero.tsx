import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";
import ProjectMeta from "./ProjectMeta";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "@/types/portfolio";

export default function ProjectHero({ project, focus }: { project: Project; focus: string }) {
  return (
    <section aria-labelledby="project-title" className="pb-12 pt-12 md:pb-16 md:pt-16">
      <Container>
        <Link href="/#work" className="text-link text-secondary"><ArrowLeft size={16} aria-hidden="true" />Back to Selected Work</Link>
        <p className="eyebrow mb-5 mt-12 text-accent">Case Study · {project.category}</p>
        <h1 id="project-title" className="text-[clamp(3rem,7vw,5rem)] font-medium leading-[1.08] tracking-[-0.055em]">{project.title}</h1>
        <p className="mb-7 mt-6 max-w-[660px] text-lg leading-8 text-secondary">{project.description}</p>
        <ProjectLinks project={project} />
        <ProjectMeta project={project} focus={focus} />
      </Container>
    </section>
  );
}
