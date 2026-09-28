import Container from "@/components/layout/Container";
import AboutArtifact from "./about/AboutArtifact";
import { about, site } from "@/data/site";
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
            <div className={styles.opening}>
              <h2 id="about-heading" className={styles.headline}>
                I usually understand something only after I&apos;ve tried to <em className="editorial-emphasis">build it.</em>
              </h2>
              <p className={styles.body}>{about[0]}</p>
            </div>
            <div className={styles.artifacts}>
              {/* TODO: Replace these slots with real workspace and notebook imagery. */}
              <AboutArtifact index="01" label="Workspace" caption="A place for a real process photo." variant="workspace" />
              <AboutArtifact index="02" label="Notes / sketches" caption="A page from the process, to come." variant="notes" />
            </div>
          </div>
          <div className={styles.afterword}>
            <div className={styles.marginNote}>
              <p className="eyebrow">Learning by doing</p>
              <p>{site.education.university}<br />{site.education.specialization}</p>
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
