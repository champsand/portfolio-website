import type { ReactNode } from "react";

// Titles may include an intentional <em className="editorial-emphasis">.
export default function SectionHeading({ label, title, id }: { label: string; title: ReactNode; id: string }) {
  return (
    <div>
      <p className="eyebrow mb-4 text-accent">{label}</p>
      <h2 id={id} className="section-title">{title}</h2>
    </div>
  );
}
