import Container from "@/components/layout/Container";
import { activities } from "@/data/experience";

export default function BeyondCode() {
  const [teaching, ...communities] = activities;
  const [thought, ...reflection] = (teaching.learning ?? "").split(". ");

  return (
    <section id="beyond-code" aria-labelledby="beyond-heading" className="beyond-section">
      <Container>
        <p className="eyebrow closing-label">06 / Beyond Code</p>
        <article className="teaching-feature" aria-labelledby="teaching-heading">
          <div className="teaching-copy">
            <h2 id="beyond-heading">Learning<br />outside<br /><span className="editorial-emphasis">the editor.</span></h2>
            <div className="teaching-intro">
              <p className="eyebrow text-secondary">{teaching.metadata}</p>
              <h3 id="teaching-heading">{teaching.title}</h3>
              <p>{teaching.description}</p>
            </div>
          </div>
          <div className="teaching-materials">
            <div className="teaching-syllabus">
              <p className="eyebrow">Five weekly sessions <span>Topics covered</span></p>
              <ol>{teaching.topics?.map((topic, index) => <li key={topic}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{topic}</li>)}</ol>
            </div>
          </div>
          <div className="teaching-reflection">
            <p className="eyebrow text-secondary">What it taught me</p>
            <div><p className="teaching-thought">{thought}.</p><p className="teaching-afterthought">{reflection.join(". ")}</p></div>
          </div>
        </article>
        <div className="supporting-activities">
          {communities.map((activity) => (
            <article key={activity.title} className="supporting-activity">
              <p className="eyebrow text-secondary">Community</p>
              <div><h3>{activity.title}</h3><p className="activity-meta">{activity.metadata}</p></div>
              <p className="activity-description">{activity.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
