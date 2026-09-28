"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import type { Project } from "@/types/portfolio";

export default function DemoPreview({ demo }: { demo: NonNullable<Project["showcase"]["demo"]> }) {
  const [opened, setOpened] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    element.focus({ preventScroll: true });
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) element.pause(); });
    const pauseHidden = () => { if (document.hidden) element.pause(); };
    observer.observe(element);
    document.addEventListener("visibilitychange", pauseHidden);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", pauseHidden); };
  }, [opened]);
  return <div className={`demo-preview${opened ? " is-open" : ""}`}>
    {opened ? <video ref={video} tabIndex={0} controls muted playsInline preload="none" poster={demo.poster} aria-label="Habit Flow recorded demo" aria-describedby="work-demo-description">
      <source src={demo.src} type="video/mp4" />
      Your browser cannot play this video. <a href={demo.src}>Open the recorded demo</a>.
    </video> : <button type="button" onClick={() => setOpened(true)} aria-label="Open Habit Flow recorded demo">
      <Image src={demo.poster} alt="" fill sizes="(min-width: 1100px) 320px, (min-width: 600px) 40vw, 65vw" />
      <span><Play size={15} aria-hidden="true" /> Open demo</span>
    </button>}
    <p id="work-demo-description" className="sr-only">{demo.description}</p>
    <p className="demo-caption">Recorded product walkthrough</p>
  </div>;
}
