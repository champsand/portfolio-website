"use client";

import { useEffect, useState, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import PersistentScene from "./PersistentScene";
import type { ScrollSample } from "./useSectionProgress";

export type SceneProps = {
  sample:RefObject<ScrollSample>;
  pointer:RefObject<{x:number;y:number}>;
  active:boolean;
  compact:boolean;
};

export default function SceneCanvas({onReady, enabled, ...props}:SceneProps & {enabled:boolean; onReady:(ready:boolean) => void}) {
  const [lost, setLost] = useState(false);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!canvas) return;
    const loss = () => { onReady(false); setLost(true); };
    canvas.addEventListener("webglcontextlost", loss);
    return () => { canvas.removeEventListener("webglcontextlost", loss); onReady(false); };
  }, [canvas, onReady]);
  if (lost || !enabled) return null;
  return <Canvas dpr={props.compact ? 1 : [1,1.5]} camera={{position:[0,0,7.8],fov:38}}
    frameloop={props.active ? "always" : "never"}
    gl={{alpha:true,antialias:true,powerPreference:"low-power"}}
    fallback={null}
    onCreated={({gl}) => { setCanvas(gl.domElement); }}>
    <PersistentScene {...props} onReady={onReady} />
  </Canvas>;
}
