export default function SectionHeading({ label, title, id }: { label: string; title: string; id: string }) {
  return <div><p className="eyebrow mb-5 text-accent">{label}</p><h2 id={id} className="text-4xl font-medium leading-[1.12] tracking-[-0.045em] md:text-[46px]">{title}</h2></div>;
}
