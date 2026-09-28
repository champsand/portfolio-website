"use client";

import { useEffect, useState } from "react";

export default function ProjectProgress({ items }: { items: { slug: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.slug);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.innerHeight * .45;
      let current = items[0]?.slug;
      for (const item of items) {
        const article = document.getElementById(`work-${item.slug}`);
        if (article && article.getBoundingClientRect().top <= marker) current = item.slug;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  }, [items]);
  return <nav className="project-progress" aria-label="Selected work chapters">
    {items.map((item, index) => <a key={item.slug} href={`#work-${item.slug}`} aria-current={active === item.slug ? "location" : undefined} aria-label={`${String(index + 1).padStart(2, "0")} ${item.title}`}><span>{String(index + 1).padStart(2, "0")}</span><span className="progress-name">{item.title}</span><span className="progress-line" aria-hidden="true" /></a>)}
  </nav>;
}
