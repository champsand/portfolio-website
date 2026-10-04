import Container from "@/components/layout/Container";
import AboutArtifact from "./about/AboutArtifact";
import { about, aboutHeading, site } from "@/data/site";
import styles from "./about/About.module.css";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className={styles.section}>
      <div className={styles.paper}>
        <Container>
          <div className={styles.masthead}>
            <p className="eyebrow">04 / About</p>
            <p className="eyebrow">{site.name} / {site.location}</p>
          </div>
          <div className={styles.composition}>
            <div className={`${styles.opening} soft-readability-zone`}>
              <h2 id="about-heading" className={styles.headline}>
                {aboutHeading.opening} <em className="editorial-emphasis">{aboutHeading.emphasis}</em>
              </h2>
              <p className={styles.body}>{about[0]}</p>
            </div>
            <div className={styles.artifacts}>
              <AboutArtifact
                index="01"
                label="DJI Indonesia / 2024"
                caption="A team I learned from."
                variant="team"
                image={{ src: "/images/artifacts/dji-team-2024.jpg", alt: "Matthew with colleagues during his time at DJI Indonesia." }}
              />
              <AboutArtifact index="02" label="How I work" variant="principles" />
            </div>
          </div>
          <div className={`${styles.afterword} soft-readability-zone`}>
            <div className={styles.marginNote}>
              <p className="eyebrow">Where I study</p>
              <p>{site.education.university}<br />{site.education.degree}<br />{site.education.specialization}<br />{site.education.period} · GPA {site.education.gpa}</p>
            </div>
            <div>
              {about.slice(1, -1).map((paragraph) => <p key={paragraph} className={styles.body}>{paragraph}</p>)}
              <p className={styles.lastThought}>{about[about.length - 1]}</p>
            </div>
          </div>
          <div className={styles.pageEnd} aria-hidden="true"><span>{site.name}</span><span>04</span></div>
        </Container>
      </div>
    </section>
  );
}
