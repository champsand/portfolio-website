import type { Project } from "@/types/portfolio";

export default function ProjectMeta({ project, focus }: { project: Project; focus: string }) {
  const items = [
    { label: "Year", value: String(project.year) },
    { label: "Role", value: project.role },
    ...(project.teamSize ? [{ label: "Team", value: `${project.teamSize} people` }] : []),
    { label: "Focus", value: focus },
  ];
  return (
    <dl className={`mt-12 grid gap-7 border-t border-line pt-7 sm:grid-cols-2 lg:gap-10 ${project.teamSize ? "lg:grid-cols-[0.5fr_1.4fr_0.6fr_1.5fr]" : "lg:grid-cols-[0.5fr_1.4fr_1.5fr]"}`}>
      {items.map((item) => (
        <div key={item.label}>
          <dt className="eyebrow text-secondary">{item.label}</dt>
          <dd className="mt-2 text-sm leading-6">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
