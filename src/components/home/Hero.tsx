import { hero } from "@/data/site";
import HeroExperience from "./hero/HeroExperience";

export default function Hero() {
  return <HeroExperience
    eyebrow={<p className="eyebrow text-secondary">{hero.eyebrow}</p>}
    name={<h1 id="hero-heading" className="hero-name"><span>{hero.firstName}</span><span className="hero-surname">{hero.lastName}</span></h1>}
    statement={<><p className="hero-statement">{hero.description}</p><p className="hero-support">{hero.supportingCopy}</p></>}
    index={<div className="hero-index"><span className="text-accent">{hero.index}</span><ul>{hero.concepts.map((concept) => <li key={concept}>{concept}</li>)}</ul></div>}
    scroll={<a href="#currently" className="hero-scroll"><span aria-hidden="true">↓</span>{hero.scrollLabel}</a>}
  />;
}

