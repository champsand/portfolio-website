import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectMeta from "./ProjectMeta";
import ProjectLinks from "./ProjectLinks";
import ProjectImage from "./ProjectImage";
import ProjectMotif from "./ProjectMotif";
import DiagramReveal from "./DiagramReveal";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

export default function ProjectHero({ project, focus }: { project: Project; focus: string }) {
  const number = String(projects.findIndex(item => item.slug === project.slug) + 1).padStart(2, "0");
  const kind = project.showcase.kind;
  return <section aria-labelledby="project-title" className={`case-hero case-hero-${kind}`}>
    <div className="case-shell">
      <div className="case-kicker"><Link href="/#work" className="text-link"><ArrowLeft size={15} aria-hidden="true" />Back to Selected Work</Link><span>{number} / CASE STUDY · {project.year}</span></div>
      <div className="case-hero-composition">
        <div className="case-hero-copy">
          <p className="eyebrow case-accent">{project.category}</p>
          <h1 id="project-title">{project.title}</h1>
          <p className="case-thesis">{project.showcase.concept}</p>
          <p className="case-description">{project.description}</p>
          <ProjectLinks project={project} />
        </div>
        {kind === "product" ? <DiagramReveal className="case-product-stage">
          <div className="case-product-line" aria-hidden="true" />
          <ProjectImage src={project.image} alt={project.imageAlt} width={1600} height={794} eager caption="01 / DASHBOARD — WEEKLY PROGRESS & DAILY REFLECTION" />
        </DiagramReveal> : <ProjectMotif project={project} />}
      </div>
      <ProjectMeta project={project} focus={focus} />
    </div>
    {kind !== "product" && <div className="case-hero-evidence case-shell">
      <ProjectImage src={project.image} alt={project.imageAlt} width={kind === "language" ? 1912 : 1919} height={kind === "language" ? 1074 : 1027} caption={kind === "language" ? "INTERFACE / STATIC EXAMPLE — CONTEXTUAL PROBABILITIES & LANGUAGE-LEVEL INFORMATION" : "INTERFACE / STATIC EXAMPLE — HEALTHY, EARLY BLIGHT & LATE BLIGHT"} />
    </div>}
  </section>;
}
