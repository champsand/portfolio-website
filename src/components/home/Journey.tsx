import Container from "@/components/layout/Container";
import { journey } from "@/data/experience";
import { projects } from "@/data/projects";
import JourneyTimeline from "./journey/JourneyTimeline";

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="journey-section">
      <Container>
        <div className="journey-masthead"><p className="eyebrow">05 / Journey</p><p className="eyebrow">2026 — 2024 / Newest first</p></div>
        <div className="journey-composition">
          <div className="journey-framing">
            <h2 id="journey-heading">A few steps<br />along the way.</h2>
            <div className="journey-key" aria-hidden="true"><span /><span /><span /></div>
            <p className="eyebrow">Projects & experience<br />One ongoing journey</p>
          </div>
          <JourneyTimeline entries={journey.map((entry) => ({ ...entry, href: projects.find((project) => project.slug === entry.projectSlug)?.caseStudyHref }))} />
        </div>
      </Container>
    </section>
  );
}
