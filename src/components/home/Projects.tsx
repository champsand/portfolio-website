import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [featured, ...secondary] = projects;
  return (
    <section id="work" aria-labelledby="work-heading" className="section-space border-t border-line">
      <Container>
        <div className="mb-12 max-w-[720px] md:mb-16">
          <SectionHeading label="Selected Work" title="Things I've built, explored, and learned from." id="work-heading" />
        </div>
        <ProjectCard project={featured} number="01" featured />
        <div className="mt-14 grid gap-14 border-t border-line pt-14 md:grid-cols-2 md:gap-12 lg:mt-20 lg:pt-16">
          {secondary.map((project, index) => <ProjectCard key={project.slug} project={project} number={String(index + 2).padStart(2, "0")} />)}
        </div>
      </Container>
    </section>
  );
}
