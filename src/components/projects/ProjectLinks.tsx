import { ArrowUpRight } from "lucide-react";
import ExternalLink from "@/components/ui/ExternalLink";
import type { Project } from "@/types/portfolio";

export default function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-4">
      <ExternalLink href={project.github} className="button-secondary" aria-label={`${project.title} on GitHub (opens in a new tab)`}>
        GitHub <ArrowUpRight size={17} aria-hidden="true" />
      </ExternalLink>
      {project.liveUrl && <ExternalLink href={project.liveUrl} className="button-secondary">Live App <ArrowUpRight size={17} aria-hidden="true" /></ExternalLink>}
    </div>
  );
}
