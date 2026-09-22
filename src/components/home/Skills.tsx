import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills, currentlyLearning } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-space border-y border-line bg-surface/40">
      <Container>
        <SectionHeading label="Skills" title="What I work with." id="skills-heading" />
        <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1.2fr_0.8fr] md:gap-8">
          {skills.map((group) => (
            <div key={group.name} className="border-t border-line pt-5">
              <h3 className="eyebrow text-secondary">{group.name}</h3>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-base">
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl text-sm leading-7 text-secondary"><span className="text-foreground">Currently learning:</span> {currentlyLearning}</p>
      </Container>
    </section>
  );
}
