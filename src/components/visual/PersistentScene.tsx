"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges, Line } from "@react-three/drei";
import { BufferGeometry, Group, Material, Mesh, MathUtils, OctahedronGeometry, MeshBasicMaterial } from "three";
import type { SceneProps } from "./SceneCanvas";
import { assembly, links, visualStates, type Point } from "./visualStates";

// Imperative Three material adapter; React never owns these animated properties.
class Surface {
  readonly opacity:number;
  readonly filled:boolean;
  constructor(readonly material:Material, public kind:"forms"|"lines"|"nodes"|"orbits") { this.opacity = material.opacity; this.filled = material.type === "MeshStandardMaterial"; }
  fade(weight:number) { this.material.opacity = this.opacity * weight; }
}

export default function PersistentScene({ sample, pointer, active, compact, onReady }:SceneProps & {onReady:(ready:boolean)=>void}) {
  const root = useRef<Group>(null);
  const lattice = useRef<Group>(null);
  const core = useRef<Group>(null);
  const foreground = useRef<Group>(null);
  const rear = useRef<Group>(null);
  const orbits = useRef<Group>(null);
  const groups = useMemo(() => [core, foreground, rear] as const, []);
  const keys = ["corePosition", "foregroundPosition", "rearPosition"] as const;
  const nodeMeshes = useRef<(Mesh|null)[]>([]);
  const surfaces = useRef<Surface[]>([]);
  const nodeShapes = useMemo(() => [new OctahedronGeometry(.075,0), new OctahedronGeometry(.04,0)], []);
  const nodeMaterials = useMemo(() => [new MeshBasicMaterial({color:"#be97e0",transparent:true}), new MeshBasicMaterial({color:"#aaa2b4",transparent:true})], []);
  useEffect(() => () => { nodeShapes.forEach(shape => shape.dispose()); nodeMaterials.forEach(material => material.dispose()); }, [nodeShapes,nodeMaterials]);
  const metrics = useRef({time:0,frames:0});
  const elapsed = useRef(0);
  const ready = useRef(false);
  const opacity = useRef(1);
  const connections = useRef<BufferGeometry>(null);
  const edgeWeights = useRef(new Float32Array(links.length).fill(1));
  const linePositions = useMemo(() => new Float32Array(links.length * 6), []);
  const orbit = useMemo(() => Array.from({ length:81 }, (_,i):Point => {
    const angle = i / 80 * Math.PI * 2;
    return [Math.cos(angle)*2.6, Math.sin(angle)*.65, Math.sin(angle)*1.7];
  }), []);
  useLayoutEffect(() => {
    const entries:Surface[] = [];
    const collect = (group:Group|null, kind:Surface["kind"]) => group?.traverse(object => {
      if (!("material" in object)) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) if (material instanceof Material) entries.push(new Surface(material,kind));
    });
    collect(core.current,"forms"); collect(rear.current,"forms"); collect(foreground.current,"forms");
    collect(orbits.current,"orbits"); collect(lattice.current,"lines");
    for (const entry of entries) if (nodeMeshes.current.some(mesh => mesh?.material === entry.material)) entry.kind = "nodes";
    surfaces.current = entries;
  }, []);
  useFrame(({viewport, gl}, delta) => {
    if (!active || !connections.current || !root.current || !core.current || !foreground.current || !rear.current || !orbits.current) return;
    const s = sample.current;
    const mobile = s.width <= 768;
    const a = mobile ? visualStates.hero : visualStates[s.from];
    const b = mobile ? visualStates.hero : visualStates[s.to];
    const mix = mobile ? 0 : s.mix;
    const lerp = MathUtils.lerp;
    const blend = ready.current ? 1 - Math.exp(-Math.min(delta,.05) * 5) : 1;
    const idle = lerp(a.idle,b.idle,mix);
    elapsed.current += Math.min(delta,.05) * idle;
    const t = elapsed.current;
    const influence = lerp(a.pointer,b.pointer,mix);
    const px = pointer.current.x * influence, py = pointer.current.y * influence;
    const heroWeight = mobile ? 1 : s.from === "hero" ? 1 - mix : 0;
    const contactWeight = mobile ? 0 : (s.from === "contact" ? 1 - mix : 0) + (s.to === "contact" ? mix : 0);
    const heroX = s.hero.x / s.width, heroY = (s.hero.y - s.scroll) / s.height;
    let x = lerp(a.x,b.x,mix), y = lerp(a.y,b.y,mix);
    x = lerp(x,heroX,heroWeight); y = lerp(y,heroY,heroWeight);
    x = lerp(x,s.contact.x / s.width,contactWeight);
    y = lerp(y,(s.contact.y - s.scroll) / s.height,contactWeight);
    if (s.from === "journey") y += s.sectionProgress * .08;
    const baseSize = Math.min(s.height * .85,850) / s.height;
    let size = lerp(a.scale,b.scale,mix) * baseSize;
    size = lerp(size,s.hero.height / s.height * (compact ? .93 : 1),heroWeight);
    size = lerp(size,Math.min(s.height * .92,920) / s.height * lerp(a.scale,b.scale,mix),contactWeight);
    if (compact && !mobile) size *= lerp(.72,1,heroWeight);
    root.current.position.x = lerp(root.current.position.x,(x-.5)*viewport.width,blend);
    root.current.position.y = lerp(root.current.position.y,(.5-y)*viewport.height,blend);
    root.current.scale.setScalar(lerp(root.current.scale.x,size,blend));
    root.current.rotation.x = lerp(root.current.rotation.x,lerp(a.rotation[0],b.rotation[0],mix)+py*.07,blend);
    root.current.rotation.y = lerp(root.current.rotation.y,lerp(a.rotation[1],b.rotation[1],mix)+Math.sin(t*.09)*.14*idle+px*.12,blend);
    root.current.rotation.z = lerp(root.current.rotation.z,lerp(a.rotation[2],b.rotation[2],mix),blend);
    const spread = lerp(a.spread,b.spread,mix);
    const depth = lerp(a.depth,b.depth,mix);
    for (let i=0;i<3;i++) {
      const group = groups[i].current!;
      const key = keys[i];
      group.position.set(
        lerp(group.position.x,lerp(a[key][0],b[key][0],mix),blend),
        lerp(group.position.y,lerp(a[key][1],b[key][1],mix),blend),
        lerp(group.position.z,lerp(a[key][2],b[key][2],mix),blend));
      group.scale.setScalar(lerp(group.scale.x,lerp(i === 0 ? a.primaryScale : a.secondaryScale,i === 0 ? b.primaryScale : b.secondaryScale,mix),blend));
    }
    orbits.current.scale.set(lerp(a.orbitScale[0],b.orbitScale[0],mix),lerp(a.orbitScale[1],b.orbitScale[1],mix),lerp(a.orbitScale[2],b.orbitScale[2],mix));
    core.current.rotation.y = .5 + Math.sin(t*.065)*.12 + spread*.35;
    core.current.rotation.z = -.3 - spread*.2;
    foreground.current.rotation.y = Math.sin(t*.08)*.1 + spread*.45;
    rear.current.rotation.z = Math.sin(t*.045)*.08 - spread*.25;
    for (let i=0;i<assembly.length;i++) {
      const mesh = nodeMeshes.current[i];
      if (!mesh) continue;
      mesh.position.x = lerp(mesh.position.x,lerp(a.nodes[i][0],b.nodes[i][0],mix),blend);
      mesh.position.y = lerp(mesh.position.y,lerp(a.nodes[i][1],b.nodes[i][1],mix),blend);
      mesh.position.z = lerp(mesh.position.z,lerp(a.nodes[i][2],b.nodes[i][2],mix)*depth,blend);
      mesh.scale.setScalar(lerp(mesh.scale.x,MathUtils.clamp(lerp(a.nodeCount,b.nodeCount,mix)-i,0,1),blend));
      mesh.visible = !compact || i % 2 === 0;
    }
    const positions = connections.current.attributes.position;
    for (let i=0;i<links.length;i++) {
      const start = nodeMeshes.current[links[i][0]], end = nodeMeshes.current[links[i][1]];
      if (!start || !end) continue;
      positions.setXYZ(i*2,start.position.x,start.position.y,start.position.z);
      // Retract unused links into their source nodes: continuous topology, no popping.
      edgeWeights.current[i] = lerp(edgeWeights.current[i],compact && i % 2 ? 0 : lerp(a.edges[i],b.edges[i],mix),blend);
      positions.setXYZ(i*2+1,lerp(start.position.x,end.position.x,edgeWeights.current[i]),lerp(start.position.y,end.position.y,edgeWeights.current[i]),lerp(start.position.z,end.position.z,edgeWeights.current[i]));
    }
    positions.needsUpdate = true;
    // The bounded lattice moves; don't retain an obsolete initial culling sphere.
    connections.current.computeBoundingSphere();
    const handoff = (s.from === "habit" || s.from === "hate") ? 1 - Math.sin(mix*Math.PI)*.2 : 1;
    const targetOpacity = mobile ? heroWeight : lerp(a.opacity,b.opacity,mix)*handoff;
    opacity.current = lerp(opacity.current,targetOpacity,blend);
    for (const entry of surfaces.current) {
      const weight = entry.kind === "nodes" ? 1 : lerp(a[entry.kind],b[entry.kind],mix);
      entry.fade(opacity.current * weight * (entry.filled ? lerp(a.surface,b.surface,mix) : 1));
    }
    core.current.visible = rear.current.visible = foreground.current.visible = lerp(a.forms,b.forms,mix) > .01;
    orbits.current.visible = !compact && lerp(a.orbits,b.orbits,mix) > .01;
    if (!ready.current) { ready.current = true; onReady(true); }
    metrics.current.frames++;
    // Development-only instrumentation: no React state, sampled twice per second.
    if (process.env.NODE_ENV === "development" && (metrics.current.time += delta) > .5) {
      metrics.current.time = 0;
      gl.domElement.dataset.frames = String(metrics.current.frames);
      gl.domElement.dataset.materials = String(new Set(surfaces.current.map(surface => surface.material)).size);
      gl.domElement.dataset.calls = String(gl.info.render.calls);
      gl.domElement.dataset.geometries = String(gl.info.memory.geometries);
      gl.domElement.dataset.programs = String(gl.info.programs?.length ?? 0);
      gl.domElement.dataset.dpr = String(gl.getPixelRatio());
    }
  });
  return <>
    <ambientLight intensity={.65} />
    <directionalLight position={[3, 4, 5]} intensity={2.4} color="#e1dce8" />
    <directionalLight position={[-4, -1, 2]} intensity={1.1} color="#a484d1" />
    <group ref={root} rotation={[.15, -.35, -.2]} >
      <group ref={lattice}>
        <lineSegments><bufferGeometry ref={connections}><bufferAttribute attach="attributes-position" args={[linePositions,3]} /></bufferGeometry><lineBasicMaterial color="#9d8caf" transparent opacity={.3} depthWrite={false} /></lineSegments>
        {assembly.map((point, i) => <mesh ref={mesh => { nodeMeshes.current[i] = mesh; }} key={i} position={point} geometry={nodeShapes[i % 4 === 0 ? 0 : 1]} material={nodeMaterials[i % 4 === 0 ? 0 : 1]} />)}
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
      <group ref={orbits}>
      <Line points={orbit} color="#a08eb2" transparent opacity={.4} lineWidth={.85} />
      <group rotation={[.7, .3, 1.05]}><Line points={orbit} color="#897897" transparent opacity={.25} lineWidth={.75} /></group>
      </group>
    </group>
  </>;
}
