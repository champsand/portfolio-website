import Image from "next/image";
import type { Project } from "@/types/portfolio";
import MediaMotion from "./MediaMotion";
import DemoPreview from "./DemoPreview";

function Screenshot({ project }: { project: Project }) {
  return <div className="project-screenshot"><Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1800px) 900px, (min-width: 1100px) 53vw, (min-width: 768px) 85vw, calc(100vw - 48px)" className="object-contain" /></div>;
}

export default function ProjectMedia({ project }: { project: Project }) {
  const { showcase } = project;
  if (showcase.kind === "product") return <figure className="product-visual">
    <figcaption className="visual-caption"><span>{showcase.label}</span><span>Interface / web application</span></figcaption>
    <div className="product-stage">
      <div className="product-backing" aria-hidden="true" />
      <MediaMotion><Screenshot project={project} /></MediaMotion>
      {showcase.demo && <DemoPreview demo={showcase.demo} />}
    </div>
    <p className="visual-concept">{showcase.concept}</p>
  </figure>;
  if (showcase.kind === "language") return <figure className="language-visual">
    <figcaption className="visual-caption"><span>{showcase.label}</span><span>Two separate signals</span></figcaption>
    <p className="analysis-concept">{showcase.concept}</p>
    <div className="language-signals">{showcase.signals?.map(signal => <div key={signal.label}><p>{signal.label}</p><span>{signal.detail}</span></div>)}</div>
    <Screenshot project={project} />
    <div className="analysis-footnote"><p>Static interface example</p>{project.metrics?.[0] && <p><strong>{project.metrics[0].value}</strong> {project.metrics[0].label}</p>}</div>
  </figure>;
  const pipeline = showcase.pipeline;
  return <figure className="vision-visual">
    <figcaption className="visual-caption"><span>{showcase.label}</span><span>Validate → classify</span></figcaption>
    <p className="vision-concept">{showcase.concept}</p>
    {pipeline && <div className="vision-pipeline" aria-label="Input validation pipeline">
      <div className="pipeline-route"><span>{pipeline.input}</span><span aria-hidden="true">→</span><strong>{pipeline.validation}</strong><span aria-hidden="true">→</span><span>{pipeline.accepted}</span></div>
      <p className="pipeline-reject"><span aria-hidden="true">└</span> {pipeline.rejected}</p>
    </div>}
    <div className="vision-frame"><Screenshot project={project} /><span className="vision-cross cross-top" aria-hidden="true">+</span><span className="vision-cross cross-bottom" aria-hidden="true">+</span></div>
    <p className="vision-note">{pipeline?.note}</p>
  </figure>;
}
