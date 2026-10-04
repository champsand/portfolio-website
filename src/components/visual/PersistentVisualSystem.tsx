"use client";

import dynamic from "next/dynamic";
import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useSectionProgress, type ScrollSample } from "./useSectionProgress";
import { visualStates } from "./visualStates";

const SceneCanvas = dynamic(() => import("./SceneCanvas"), { ssr:false });
class SceneBoundary extends Component<{ children:ReactNode; onFailure:() => void }, { failed:boolean }> {
  state = { failed:false };
  static getDerivedStateFromError() { return { failed:true }; }
  componentDidCatch() { this.props.onFailure(); }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function PersistentVisualSystem() {
  const layer = useRef<HTMLDivElement>(null);
  const pointer = useRef({x:0,y:0});
  const [reduced, setReduced] = useState<boolean | null>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);
  const runningRef = useRef(false);
  const [active, setActive] = useState(false);
  const [compact, setCompact] = useState(true);
  const update = useCallback((sample:ScrollSample) => {
    const mobile = sample.width <= 768;
    const intensity = visualStates[sample.from].opacity * (1 - sample.mix) + visualStates[sample.to].opacity * sample.mix;
    const running = !document.hidden && !reduced && (mobile ? sample.scroll < sample.hero.bottom : intensity > .005);
    if (runningRef.current !== running) { runningRef.current = running; setActive(running); }
    if (layer.current) {
      layer.current.style.visibility = running ? "visible" : "hidden";
      layer.current.dataset.section = sample.from;
      layer.current.dataset.active = String(running);
      layer.current.dataset.progress = sample.sectionProgress.toFixed(3);
    }
  }, [reduced]);
  const sample = useSectionProgress(update);
  const onReady = useCallback((ready:boolean) => {
    const home = layer.current?.closest<HTMLElement>(".home-page");
    if (home) home.dataset.sceneReady = String(ready);
  }, []);
  const onFailure = useCallback(() => onReady(false), [onReady]);
  useEffect(() => {
    const size = () => { setCompact(window.innerWidth <= 1100); update(sample.current); };
    const visibility = () => update(sample.current);
    const move = (event:PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer.current.x = event.clientX / window.innerWidth * 2 - 1;
      pointer.current.y = event.clientY / window.innerHeight * 2 - 1;
    };
    const leave = () => { pointer.current.x = 0; pointer.current.y = 0; };
    size();
    window.addEventListener("resize", size);
    window.addEventListener("pointermove", move, {passive:true});
    document.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      window.removeEventListener("resize", size);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", visibility);
      onReady(false);
    };
  }, [onReady, sample, update]);
  return <div ref={layer} className="persistent-visual" aria-hidden="true">
    {reduced === false && <SceneBoundary onFailure={onFailure}><SceneCanvas enabled sample={sample} pointer={pointer} active={active} compact={compact} onReady={onReady} /></SceneBoundary>}
  </div>;
}
