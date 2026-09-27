"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges, Line } from "@react-three/drei";
import { Group, MathUtils } from "three";
import type { SceneProps } from "./HeroSceneCanvas";

type Point = [number, number, number];
// Shared attachment points: a central assembly with asymmetric satellite frames.
const nodes: Point[] = [
  [-1.8, 1.2, -.6], [-.8, 2.05, -.9], [.6, 1.8, -.7], [1.8, .9, -.6],
  [2, -.4, .1], [1.1, -1.6, .6], [-.3, -1.9, .2], [-1.5, -.9, .7],
  [-1.1, .3, 1.2], [.5, 1, 1.1], [1.3, -.2, 1.4], [-.1, -.8, 1.2],
];
const links = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,8],[3,9],[5,10],[7,11]];

export default function HeroScene({ progress, pointer, reduced, active, compact }: SceneProps) {
  const root = useRef<Group>(null);
  const lattice = useRef<Group>(null);
  const core = useRef<Group>(null);
  const foreground = useRef<Group>(null);
  const rear = useRef<Group>(null);
  const elapsed = useRef(0);
  const orbit = useMemo(() => Array.from({ length: 81 }, (_, i): Point => {
    const angle = i / 80 * Math.PI * 2;
    return [Math.cos(angle) * 2.6, Math.sin(angle) * .65, Math.sin(angle) * 1.7];
  }), []);
  useFrame((_, delta) => {
    if (!root.current || !lattice.current || !core.current || !foreground.current || !rear.current) return;
    const p = reduced ? 0 : progress.get();
    if (active && !reduced) elapsed.current += Math.min(delta, .05);
    const t = reduced ? 0 : elapsed.current;
    const px = reduced ? 0 : pointer.current.x;
    const py = reduced ? 0 : pointer.current.y;
    const blend = reduced ? 1 : 1 - Math.exp(-delta * 3);
    root.current.rotation.x = MathUtils.lerp(root.current.rotation.x, .15 + py * .07 + p * .12, blend);
    root.current.rotation.y = MathUtils.lerp(root.current.rotation.y, -.35 + Math.sin(t * .09) * .14 + px * .12 + p * .35, blend);
    root.current.position.z = -p * 1.8;
    lattice.current.scale.setScalar(1 + p * .32);
    core.current.rotation.y = .5 + Math.sin(t * .065) * .12;
    core.current.rotation.z = -.3 - p * .2;
    foreground.current.position.x = MathUtils.lerp(foreground.current.position.x, p * .85 + px * .09, blend);
    foreground.current.position.y = MathUtils.lerp(foreground.current.position.y, -p * .35 - py * .06, blend);
    foreground.current.rotation.y = Math.sin(t * .08) * .1;
    rear.current.position.x = MathUtils.lerp(rear.current.position.x, -p * .55 - px * .05, blend);
    rear.current.rotation.z = Math.sin(t * .045) * .08;
  });
  return <>
    <ambientLight intensity={.65} />
    <directionalLight position={[3, 4, 5]} intensity={2.4} color="#e1dce8" />
    <directionalLight position={[-4, -1, 2]} intensity={1.1} color="#a484d1" />
    <group ref={root} rotation={[.15, -.35, -.2]} scale={compact ? .93 : 1}>
      <group ref={lattice}>
        {links.map(([a, b]) => <Line key={`${a}-${b}`} points={[nodes[a], nodes[b]]} color="#9d8caf" transparent opacity={.3} lineWidth={.8} />)}
        {nodes.map((point, i) => <mesh key={i} position={point}>
          <octahedronGeometry args={[i % 4 === 0 ? .075 : .04, 0]} />
          <meshBasicMaterial color={i % 4 === 0 ? "#be97e0" : "#aaa2b4"} />
        </mesh>)}
      </group>
      <group ref={core} rotation={[.35, .5, -.3]}>
        <mesh>
          <icosahedronGeometry args={[1.36, 0]} />
          <meshStandardMaterial color="#665477" metalness={.45} roughness={.48} transparent opacity={.88} flatShading />
          <Edges color="#c0a4db" transparent opacity={.65} />
        </mesh>
      </group>
      <group ref={rear}>
        <mesh position={[-1.35, 1.05, -.85]} rotation={[.4, .2, .6]}>
          <octahedronGeometry args={[.92, 0]} />
          <meshStandardMaterial color="#62556f" transparent opacity={.3} depthWrite={false} roughness={.7} flatShading />
          <Edges color="#9c89b0" transparent opacity={.5} />
        </mesh>
        <mesh position={[1.35, .8, -.65]} rotation={[.6, -.3, .2]}>
          <tetrahedronGeometry args={[.8, 0]} />
          <meshStandardMaterial color="#746780" transparent opacity={.4} depthWrite={false} roughness={.6} flatShading />
          <Edges color="#b3a2c4" transparent opacity={.55} />
        </mesh>
      </group>
      <group ref={foreground}>
        <mesh position={[1.1, -1.05, 1.15]} rotation={[.3, .5, .3]}>
          <octahedronGeometry args={[.7, 0]} />
          <meshStandardMaterial color="#9782b0" metalness={.3} roughness={.4} transparent opacity={.85} flatShading />
          <Edges color="#d0bbdf" transparent opacity={.7} />
        </mesh>
      </group>
      <Line points={orbit} color="#a08eb2" transparent opacity={.4} lineWidth={.85} />
      <group rotation={[.7, .3, 1.05]}><Line points={orbit} color="#897897" transparent opacity={.25} lineWidth={.75} /></group>
    </group>
  </>;
}
