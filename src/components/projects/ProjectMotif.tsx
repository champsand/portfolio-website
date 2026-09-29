import type { Project } from "@/types/portfolio";

/** Static linework, not a chart or simulated model output. */
export default function ProjectMotif({ project, decorative = false }: { project: Project; decorative?: boolean }) {
  const language = project.showcase.kind === "language";
  return <div className={`case-motif motif-${project.showcase.kind}`} aria-hidden={decorative || undefined}>
    <svg viewBox="0 0 520 240" fill="none" aria-hidden="true">
      {language ? <>
        <ellipse cx="196" cy="120" rx="125" ry="84" transform="rotate(-23 196 120)" />
        <ellipse cx="324" cy="120" rx="125" ry="84" transform="rotate(23 324 120)" />
        <path d="M90 120H430M196 36V204M324 36V204" strokeDasharray="3 8" opacity=".35" />
        {[135,170,214,295,340,379].map((x,i) => <circle key={x} cx={x} cy={85 + (i % 3) * 34} r="4" fill="currentColor" />)}
      </> : project.showcase.kind === "vision" ? <>
        <path d="M30 60h65v65H30zM95 92h97m136 0h155M260 155v55h110" />
        <path d="m260 25 68 67-68 67-68-67z" />
        <path d="m472 83 11 9-11 9M359 201l11 9-11 9" />
        <circle cx="260" cy="92" r="17" /><path d="m251 92 6 6 12-13" />
      </> : <>
        <ellipse cx="260" cy="120" rx="180" ry="75" transform="rotate(-15 260 120)" />
        <path d="M110 120h300M260 35v170" strokeDasharray="3 8" />
        {[120,175,230,285,340,395].map((x,i) => <circle key={x} cx={x} cy={145-i*10} r="5" fill="currentColor" />)}
      </>}
    </svg>
    {!decorative && (language ? <div className="case-signal-labels">{project.showcase.signals?.map(signal => <div key={signal.label}><p>{signal.label}</p><span>{signal.detail}</span></div>)}</div> : <div className="case-gate-labels"><p>Input → Validation → Classification</p><p>Invalid input → reject</p><span>{project.showcase.pipeline?.note}</span></div>)}
  </div>;
}
