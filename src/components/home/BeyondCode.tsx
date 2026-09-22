import { BookOpen, GraduationCap, Users } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { activities } from "@/data/experience";

export default function BeyondCode() {
  const [teaching, ...communities] = activities;
  const icons = [GraduationCap, Users];
  return (
    <section id="beyond-code" aria-labelledby="beyond-heading" className="section-space border-t border-line">
      <Container>
        <div className="max-w-[720px]">
          <SectionHeading label="Beyond Code" title="Learning happens outside the editor too." id="beyond-heading" />
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <article className="border-l-2 border-accent/50 pl-6 md:pl-8">
            <BookOpen size={24} strokeWidth={1.5} className="mb-6 text-secondary" aria-hidden="true" />
            <p className="font-mono text-xs leading-6 text-secondary">{teaching.metadata}</p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight">{teaching.title}</h3>
            <p className="mt-4 text-base leading-7 text-secondary">{teaching.description}</p>
            <p className="mt-6 text-lg leading-8">{teaching.learning}</p>
            <p className="mt-6 text-sm leading-7 text-secondary"><span className="text-foreground">Topics covered: </span>{teaching.topics?.join(" · ")}</p>
          </article>
          <div className="space-y-8">
            {communities.map((activity, index) => {
              const Icon = icons[index];
              return (
                <article key={activity.title} className="border-t border-line pt-7">
                  <Icon size={22} strokeWidth={1.5} className="mb-5 text-secondary" aria-hidden="true" />
                  <p className="font-mono text-xs leading-6 text-secondary">{activity.metadata}</p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight">{activity.title}</h3>
                  <p className="mt-3 text-base leading-7 text-secondary">{activity.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
