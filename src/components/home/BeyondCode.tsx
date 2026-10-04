import Image from "next/image";
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
            <figure className="teaching-artifact">
              <div className="teaching-artifact-field">
                <Image
                  src="/images/artifacts/community-math-teaching-2026.jpg"
                  alt="Matthew in a classroom during the Community Math Teaching program."
                  width={600}
                  height={450}
                  sizes="(max-width: 599px) calc(100vw - 50px), (max-width: 767px) calc(50vw - 42px), (max-width: 1023px) calc(50vw - 58px), (max-width: 1099px) calc(50vw - 66px), (max-width: 1300px) 388px, (max-width: 1533px) calc(30vw - 2px), 458px"
                  loading="lazy"
                  className="teaching-photo"
                />
              </div>
              <figcaption className="eyebrow">Community Math Teaching / 2026</figcaption>
            </figure>
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
