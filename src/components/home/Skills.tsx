import Container from "@/components/layout/Container";
import { skills, currentlyLearning } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="toolbox-section">
      <Container>
        <div className="toolbox-heading">
          <h2 id="skills-heading" className="eyebrow">Toolbox / What I work with</h2>
          <p className="eyebrow">Practice, in progress</p>
        </div>
        <div className="toolbox-inventory">
          {skills.map((group) => (
            <div key={group.name} className="toolbox-group">
              <h3 className="eyebrow">{group.name}</h3>
              <ul className="toolbox-list">
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="toolbox-learning"><p className="eyebrow">Currently learning</p><p>{currentlyLearning}</p></div>
      </Container>
    </section>
  );
}
