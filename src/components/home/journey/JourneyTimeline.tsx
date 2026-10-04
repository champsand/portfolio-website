"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import type { JourneyEntry } from "@/types/portfolio";

type Entry = JourneyEntry & { href?: string };

function TimelineEntry({ entry, index, threshold, progress }: { entry: Entry; index: number; threshold: number; progress: MotionValue<number> }) {
  const active = useTransform(progress, (value) => value >= threshold ? 1 : 0);
  return (
    <li className="journey-entry">
      <span className="journey-node" aria-hidden="true"><motion.span className="journey-node-active" style={{ opacity: active }} /></span>
      <div className="journey-entry-meta"><span>{String(index + 1).padStart(2, "0")} / {entry.projectSlug ? "Project" : "Experience"}</span><span>{entry.period}</span></div>
      <h3>{entry.organization}</h3>
      <p className="journey-role">{entry.role}</p>
      <p className="journey-description">{entry.description}</p>
      {entry.href && <Link href={entry.href} className="journey-link">View case study<span aria-hidden="true">↗</span><span className="sr-only">: {entry.organization}</span></Link>}
    </li>
  );
}

export default function JourneyTimeline({ entries }: { entries: Entry[] }) {
  const track = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLOListElement>(null);
  const [thresholds, setThresholds] = useState<number[]>([]);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start 70%", "end 70%"] });

  useEffect(() => {
    const element = list.current;
    if (!element) return;
    // One observer keeps nodes aligned with the line after wrapping or font loading.
    const observer = new ResizeObserver(() => {
      const height = track.current?.offsetHeight || element.offsetHeight;
      setThresholds(Array.from(element.children, (child) => (child as HTMLElement).offsetTop / height));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="journey-timeline">
      <div ref={track} className="journey-track" aria-hidden="true"><motion.div className="journey-track-fill" style={{ scaleY: scrollYProgress }} /></div>
      <ol ref={list} className="journey-list">
        {entries.map((entry, index) => <TimelineEntry key={entry.organization} entry={entry} index={index} threshold={thresholds[index] ?? 1} progress={scrollYProgress} />)}
      </ol>
      <span className="journey-terminal" aria-hidden="true" />
    </div>
  );
}
