import type { Project } from "@/types/portfolio";
import DiagramReveal from "./DiagramReveal";

/** HTML carries the labels; SVG is only explanatory linework. */
export default function ProjectMotif({ project, decorative = false }: { project: Project; decorative?: boolean }) {
  const kind = project.showcase.kind;
  const language = kind === "language";
  const diagram = <div className={`case-motif motif-${kind}${decorative ? " motif-preview" : ""}`} aria-hidden={decorative || undefined}>
    {kind === "product" ? <svg viewBox="0 0 520 240" fill="none" aria-hidden="true">
      <ellipse cx="260" cy="120" rx="180" ry="75" transform="rotate(-15 260 120)" />
      <path d="M110 120h300M260 35v170" strokeDasharray="3 8" />
      {[120,175,230,285,340,395].map((x,i) => <circle key={x} cx={x} cy={145-i*10} r="5" fill="currentColor" />)}
    </svg> : <>
      <div className="motif-drawing">
        <svg className="motif-desktop" viewBox="0 0 520 340" fill="none" aria-hidden="true">
          {language ? <>
            <circle className="diagram-input" cx="260" cy="64" r="5" />
            <path className="diagram-trunk" pathLength="1" d="M260 70V124" />
            <circle className="diagram-decision" cx="260" cy="130" r="6" />
            <path className="diagram-branch" pathLength="1" d="M254 134C212 166 116 162 116 220M266 134C308 166 404 162 404 220" />
            <g className="diagram-endpoints"><circle cx="116" cy="226" r="5" /><path d="M399 221h10v10h-10z" /></g>
          </> : <>
            <circle className="diagram-input" cx="44" cy="154" r="5" />
            <path className="diagram-trunk" pathLength="1" d="M50 154H177" />
            <path className="diagram-decision" d="m204 127 27 27-27 27-27-27z" />
            <path className="diagram-branch" pathLength="1" d="M231 154C276 154 266 76 320 76H434" />
            <path className="diagram-branch diagram-reject" pathLength="1" d="M231 154C276 154 266 246 320 246H434" />
            <g className="diagram-endpoints"><path d="m432 70 6 6-6 6" /><path className="diagram-reject" d="m434 242 8 8m0-8-8 8" /></g>
          </>}
        </svg>
        <svg className="motif-mobile" viewBox="0 0 320 360" fill="none" aria-hidden="true">
          <circle className="diagram-input" cx="24" cy="36" r="5" />
          <path className="diagram-trunk" pathLength="1" d={language ? "M24 42V90" : "M24 42V109"} />
          {language ? <>
            <circle className="diagram-decision" cx="24" cy="96" r="5" />
            <path className="diagram-branch" pathLength="1" d="M24 102V158Q24 170 38 170H52M24 102V278Q24 290 38 290H52" />
            <g className="diagram-endpoints"><circle cx="58" cy="170" r="5" /><path d="M53 285h10v10H53z" /></g>
          </> : <>
            <path className="diagram-decision" d="m24 110 16 16-16 16-16-16z" />
            <path className="diagram-branch" pathLength="1" d="M24 142V208Q24 220 38 220H54" />
            <path className="diagram-branch diagram-reject" pathLength="1" d="M24 142V298Q24 310 38 310H54" />
            <g className="diagram-endpoints"><path d="m50 215 6 5-6 5" /><path className="diagram-reject" d="m54 306 8 8m0-8-8 8" /></g>
          </>}
        </svg>
        {!decorative && (language ? <>
          <p className="motif-input diagram-input">Indonesian Text</p>
          <div className="motif-signals diagram-labels">{project.showcase.signals?.map(signal => <div key={signal.label}><p>{signal.label}</p><span>{signal.detail}</span></div>)}</div>
        </> : <>
          <p className="motif-input diagram-input">{project.showcase.pipeline?.input}</p>
          <p className="motif-validation diagram-decision">{project.showcase.pipeline?.validation}</p>
          <div className="motif-accept diagram-labels"><span>YES / CONTINUE</span><p>{project.showcase.pipeline?.accepted}</p></div>
          <div className="motif-reject diagram-labels"><span>NO / REJECT</span><p>{project.showcase.pipeline?.rejected}</p></div>
        </>)}
      </div>
      {!decorative && !language && <p className="motif-note">{project.showcase.pipeline?.note}</p>}
    </>}
  </div>;
  return decorative ? diagram : <DiagramReveal className="case-diagram-reveal">{diagram}</DiagramReveal>;
}
