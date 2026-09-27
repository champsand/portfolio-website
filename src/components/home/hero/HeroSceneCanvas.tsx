"use client";

import { useEffect, useState, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import type { MotionValue } from "motion/react";
import HeroScene from "./HeroScene";

export type SceneProps = {
  progress: MotionValue<number>;
  pointer: RefObject<{ x: number; y: number }>;
  reduced: boolean;
  active: boolean;
  compact: boolean;
};

export default function HeroSceneCanvas({ onReady, ...props }: SceneProps & { onReady: (ready: boolean) => void }) {
  // This module is mounted only by next/dynamic with ssr: false.
  const [supported] = useState(() => {
    const context = document.createElement("canvas").getContext("webgl2");
    const available = !!context;
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    return available;
  });
  const [lost, setLost] = useState(false);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!canvas) return;
    const handleLoss = () => { onReady(false); setLost(true); };
    canvas.addEventListener("webglcontextlost", handleLoss);
    return () => canvas.removeEventListener("webglcontextlost", handleLoss);
  }, [canvas, onReady]);
  useEffect(() => () => onReady(false), [onReady]);
  if (!supported || lost) return null;
  return <div className="hero-canvas">
    <Canvas dpr={props.compact ? 1 : [1, 1.5]} camera={{ position: [0, 0, 7.8], fov: 38 }}
      frameloop={props.active && !props.reduced ? "always" : "demand"}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => { setCanvas(gl.domElement); onReady(true); }}>
      <HeroScene {...props} />
    </Canvas>
  </div>;
}

