import { projects } from "@/data/projects";
import ProjectChapter from "./projects/ProjectChapter";
import ProjectProgress from "./projects/ProjectProgress";

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="selected-work">
      <div className="work-shell work-intro">
        <div className="work-intro-index"><p className="eyebrow text-accent">Selected Work</p><p className="eyebrow text-secondary">{String(projects.length).padStart(2, "0")} projects / Built to learn</p></div>
        <h2 id="work-heading">Things I&apos;ve built,<br />explored, and learned from.</h2>
      </div>
      <div className="work-chapters">
        <ProjectProgress items={projects.map(({ slug, showcase }) => ({ slug, title: showcase.shortTitle }))} />
        {projects.map((project, index) => <ProjectChapter key={project.slug} project={project} number={String(index + 1).padStart(2, "0")} />)}
      </div>
    </section>
  );
}
