import { ArrowDown, ArrowRight } from "lucide-react";

export default function HabitFlowArchitecture() {
  return <figure className="case-architecture" aria-labelledby="architecture-caption">
    <div className="architecture-main">
      <div><span className="eyebrow">01 / Interface</span><h4>Next.js / React</h4><p>Frontend</p></div>
      <ArrowRight aria-hidden="true" />
      <div><span className="eyebrow">02 / Application logic</span><h4>Node.js / Express</h4><p>Backend</p></div>
      <ArrowRight aria-hidden="true" />
      <div className="architecture-branches">
        <div><span className="eyebrow">03 / Persistent data</span><h4>PostgreSQL</h4><p>Through Prisma</p></div>
        <div><span className="eyebrow">04 / Weekly insights</span><h4>Gemini API</h4><p>AI insight generation</p></div>
      </div>
    </div>
    <div className="architecture-mobile-direction" aria-hidden="true"><ArrowDown size={16} /> Backend connects to both services</div>
    <figcaption id="architecture-caption">The frontend connects to the Express backend. The backend stores data in PostgreSQL through Prisma and separately communicates with Gemini for weekly AI-generated insights.</figcaption>
  </figure>;
}
