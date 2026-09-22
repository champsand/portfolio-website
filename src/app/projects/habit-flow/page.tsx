import { pageMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectSection from "@/components/projects/ProjectSection";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import HabitFlowArchitecture from "@/components/projects/HabitFlowArchitecture";
import HabitFlowDemo from "@/components/projects/HabitFlowDemo";
import { projects } from "@/data/projects";
import { habitFlowStory as story } from "@/data/case-studies/habit-flow";

const project = projects.find((item) => item.slug === "habit-flow")!;

export const metadata = pageMetadata(project.title, "A case study about Habit Flow, a full-stack habit tracking application focused on weekly progress, reflection, and sustainable consistency.", project.caseStudyHref!);

export default function HabitFlowPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <ProjectHero project={project} focus={story.focus} />
        <Container className="pb-16 md:pb-24">
          <ProjectImage src={project.image} width={1600} height={794}
            alt="Habit Flow dashboard showing weekly progress, habit tracking, daily check-in status, and AI insight."
            caption="The dashboard brings weekly progress and daily reflection together." />
        </Container>
        <HabitFlowDemo />
        <ProjectSection id="overview" number="01" title="Overview" {...story.overview} />
        <ProjectSection id="problem" number="02" title="The Problem" {...story.problem} />
        <ProjectSection id="role" number="03" title="My Role" paragraphs={[story.role]}>
          <dl className="grid gap-x-8 gap-y-6 pt-2 sm:grid-cols-2">
            {story.contributions.map((item) => (
              <div key={item.title} className="border-t border-line pt-4">
                <dt className="text-base font-medium text-foreground">{item.title}</dt>
                <dd className="mt-1 text-sm leading-7">{item.description}</dd>
              </div>
            ))}
          </dl>
        </ProjectSection>
        <ProjectSection id="how-it-works" number="04" title="How It Works">
          <ol className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {story.userFlow.map((step, index) => (
              <li key={step} className="flex gap-3 text-base leading-7"><span className="pt-0.5 font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>{step}</li>
            ))}
          </ol>
          <h3 className="pt-5 text-xl font-medium tracking-tight text-foreground">Every day adds context</h3>
          <p>{story.checkIn}</p>
          <h3 className="pt-5 text-xl font-medium tracking-tight text-foreground">The architecture</h3>
          <HabitFlowArchitecture />
          <h3 className="pt-5 text-xl font-medium tracking-tight text-foreground">Built With</h3>
          <dl className="divide-y divide-line">
            {project.technologyGroups?.map((group) => (
              <div key={group.name} className="grid gap-1 py-3 text-sm leading-7 sm:grid-cols-[140px_1fr] sm:gap-5">
                <dt className="text-foreground">{group.name}</dt>
                <dd>{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </ProjectSection>
        <ProjectSection id="challenge" number="05" title="The Challenge" {...story.challenge} />
        <ProjectSection id="solution" number="06" title="The Solution" {...story.solution}>
          <dl className="grid gap-6 pt-4 sm:grid-cols-2">
            <div className="border-t border-line pt-5">
              <dt className="text-base font-medium text-foreground">Traditional streak</dt>
              <dd className="mt-3 text-base leading-7">Complete the habit every day to keep the completion streak going.</dd>
            </div>
            <div className="border-t border-accent/40 pt-5">
              <dt className="text-base font-medium text-foreground">Habit Flow activity streak</dt>
              <dd className="mt-3 text-base leading-7">Return, reflect, and log honestly to keep the activity streak going, even after a missed habit.</dd>
            </div>
          </dl>
        </ProjectSection>
        <ProjectSection id="result" number="07" title="Result" {...story.result} />
        <ProjectSection id="learned" number="08" title="What I Learned" {...story.learned} />
        <ProjectSection id="next-steps" number="09" title="Limitations & Next Steps">
          <ol className="space-y-7">
            {story.nextSteps.map((step, index) => (
              <li key={step.title} className="border-t border-line pt-5 first:border-0 first:pt-0">
                <p className="mb-2 font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                <p className="mt-2">{step.description}</p>
              </li>
            ))}
          </ol>
        </ProjectSection>
        <ProjectNavigation project={project} />
      </main>
      <Footer />
    </>
  );
}
