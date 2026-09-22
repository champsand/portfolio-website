import { ArrowDown } from "lucide-react";

export default function HabitFlowArchitecture() {
  return (
    <figure className="my-8 rounded-sm border border-line bg-surface/50 p-5 md:p-8" aria-labelledby="architecture-caption">
      <div className="mx-auto max-w-sm text-center">
        <div className="rounded-sm border border-line bg-background p-4">
          <p className="eyebrow text-secondary">Interface</p>
          <p className="mt-1 text-base font-medium text-foreground">Next.js / React frontend</p>
        </div>
        <ArrowDown className="mx-auto my-3 text-secondary" size={20} aria-hidden="true" />
        <div className="rounded-sm border border-accent/30 bg-background p-4">
          <p className="eyebrow text-secondary">Application logic</p>
          <p className="mt-1 text-base font-medium text-foreground">Node.js / Express backend</p>
        </div>
      </div>
      <div className="my-3 text-center">
        <ArrowDown className="mx-auto text-secondary" size={20} aria-hidden="true" />
        <p className="mt-2 font-mono text-xs text-secondary">Backend connects to both</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="text-center">
          <div className="rounded-sm border border-line bg-background p-4">
            <p className="eyebrow text-secondary">Persistent data</p>
            <p className="mt-1 text-base font-medium text-foreground">PostgreSQL through Prisma</p>
          </div>
        </div>
        <div className="text-center">
          <div className="rounded-sm border border-line bg-background p-4">
            <p className="eyebrow text-secondary">AI insight generation</p>
            <p className="mt-1 text-base font-medium text-foreground">Gemini API</p>
          </div>
        </div>
      </div>
      <figcaption id="architecture-caption" className="mt-6 text-sm leading-7 text-secondary">
        The frontend connects to the Express backend. The backend stores data in PostgreSQL through Prisma and separately communicates with Gemini for weekly AI-generated insights.
      </figcaption>
    </figure>
  );
}
