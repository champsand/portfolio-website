import type { Project } from "@/types/portfolio";

export default function ModelMetrics({ metrics, caption }: { metrics: NonNullable<Project["metrics"]>; caption: string }) {
  return <table className="w-full table-fixed text-left text-sm leading-6">
    <caption className="pb-4 text-left font-mono text-xs text-secondary">{caption}</caption>
    <thead className="border-b border-line text-foreground">
      <tr><th scope="col" className="w-2/3 py-3 pr-4 font-medium">Model / metric</th><th scope="col" className="py-3 text-right font-medium">Result</th></tr>
    </thead>
    <tbody className="divide-y divide-line">
      {metrics.map((metric) => <tr key={metric.label}>
        <th scope="row" className="py-4 pr-4 font-normal text-foreground">{metric.label}</th>
        <td className="py-4 text-right font-mono text-xs">{metric.value}</td>
      </tr>)}
    </tbody>
  </table>;
}

