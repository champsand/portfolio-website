import type { StoryDetail } from "@/data/case-studies/types";

export function ContributionDetails({ items }: { items: StoryDetail[] }) {
  return <dl className="grid gap-x-8 gap-y-6 pt-2 sm:grid-cols-2">
    {items.map((item) => <div key={item.title} className="border-t border-line pt-4">
      <dt className="text-base font-medium text-foreground">{item.title}</dt>
      <dd className="mt-1 text-sm leading-7">{item.description}</dd>
    </div>)}
  </dl>;
}

export function Limitations({ items }: { items: StoryDetail[] }) {
  return <ol className="space-y-7">
    {items.map((item, index) => <li key={item.title} className="border-t border-line pt-5 first:border-0 first:pt-0">
      <p className="mb-2 font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
      <p className="mt-2">{item.description}</p>
    </li>)}
  </ol>;
}

