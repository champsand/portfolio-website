export type Point = [number, number, number];
export const assembly: Point[] = [
  [-1.8, 1.2, -.6], [-.8, 2.05, -.9], [.6, 1.8, -.7], [1.8, .9, -.6],
  [2, -.4, .1], [1.1, -1.6, .6], [-.3, -1.9, .2], [-1.5, -.9, .7],
  [-1.1, .3, 1.2], [.5, 1, 1.1], [1.3, -.2, 1.4], [-.1, -.8, 1.2],
];
export const links = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,8],[3,9],[5,10],[7,11]];
const scattered = assembly.map(([x,y,z]): Point => [x * 1.4, y * 1.25, z * .6]);
const dual = assembly.map(([,y,z], i): Point => [(i < 6 ? -1 : 1) * (2 + i % 3 * .4), y * .9, z * 1.2]);
const path = assembly.map(([, ,z], i): Point => [-2.2 + (i % 6) * .85, i < 6 ? .25 : (i === 10 ? -1.3 : -.4), z * .3]);
const chronology = assembly.map(([, ,z], i): Point => [i < 6 ? 1.35 : -.8, 2.6 - (i % 6) * 1.05, z * .25]);

export type VisualTarget = {
  x: number; y: number; scale: number; rotation: Point;
  opacity: number; forms: number; lines: number; orbits: number;
  spread: number; pointer: number; idle: number; nodes: Point[];
  nodeCount: number; depth: number; primaryScale: number; secondaryScale: number; surface: number;
  corePosition: Point; foregroundPosition: Point; rearPosition: Point;
  orbitScale: Point; edges: number[];
};
const base: VisualTarget = { x: .72, y: .48, scale: 1, rotation: [.15,-.35,-.2], opacity: 1, forms: 1, lines: 1, orbits: 1, spread: 0, pointer: 1, idle: 1, nodes: assembly,
  nodeCount:12, depth:1, primaryScale:1, secondaryScale:1, surface:1, corePosition:[0,0,0], foregroundPosition:[0,0,0], rearPosition:[0,0,0], orbitScale:[1,1,1], edges:links.map(() => 1) };
const state = (target: Partial<VisualTarget>): VisualTarget => ({ ...base, ...target });

// Viewport fractions position the assembly. All narrative targets live here.
export const visualStates = {
  hero: base,
  currently: state({ x:.72, y:.52, scale:1.12, opacity:.48, forms:.7, surface:.28, lines:.85, orbits:.24, spread:1.8, depth:1.65, primaryScale:1.35, secondaryScale:1.6, corePosition:[2,-.6,.2], foregroundPosition:[1,-.8,.5], rearPosition:[-2,.8,-.5], orbitScale:[1.6,.7,1], pointer:.05, idle:.2, nodes:scattered }),
  intro: state({ x:.68, y:.52, scale:1.18, opacity:.6, forms:.65, surface:.3, lines:1, orbits:.3, spread:1.4, depth:1.4, primaryScale:1.3, corePosition:[1.9,.4,0], rearPosition:[-2,0,-1], orbitScale:[1.5,1,1], pointer:.15, idle:.25, nodes:scattered }),
  habit: state({ x:.7, y:.5, scale:1.28, rotation:[.2,-.45,-.18], opacity:.82, forms:.9, surface:.4, lines:1, orbits:.65, spread:1.2, depth:1.6, primaryScale:1.45, secondaryScale:1.65, corePosition:[1.3,1,-.4], foregroundPosition:[-.9,-.6,.35], rearPosition:[-2,.3,-.5], orbitScale:[1.35,1.5,1], pointer:.5, idle:.35, nodes:scattered }),
  hate: state({ x:.65, y:.5, scale:1.15, rotation:[.08,.3,.16], opacity:.78, forms:.85, surface:.38, lines:1.1, orbits:.08, spread:.7, depth:1.4, primaryScale:1.15, secondaryScale:1.5, corePosition:[-1.6,2.5,-.4], foregroundPosition:[2.5,1.5,.2], rearPosition:[.6,1.5,-.7], edges:[1,1,1,1,.15,1,1,1,.12,.15,1,1], pointer:.45, idle:.25, nodes:dual }),
  tomato: state({ x:.61, y:.52, scale:1.2, rotation:[.05,-.15,-.32], opacity:.78, forms:.8, surface:.32, lines:1.2, orbits:0, spread:.5, depth:1.7, primaryScale:.95, secondaryScale:1.35, corePosition:[2.8,2,-.3], foregroundPosition:[2.6,1.2,.4], rearPosition:[-2,1.6,-.6], edges:[1,1,1,1,1,.1,.3,.15,.1,.1,0,.1], pointer:.45, idle:.25, nodes:path }),
  about: state({ nodeCount:3, x:.88, y:.48, scale:1.2, rotation:[.1,.2,.1], opacity:.28, forms:.3, surface:.08, lines:.24, orbits:.5, spread:1.6, depth:.45, primaryScale:1.4, corePosition:[1,0,-1], orbitScale:[1.5,1.8,1], edges:[0,0,0,0,0,0,0,0,0,0,0,0], pointer:0, idle:.06, nodes:scattered }),
  toolbox: state({ x:.14, y:.6, scale:1.02, opacity:.36, forms:.5, surface:0, lines:.85, orbits:.06, spread:1.5, depth:.7, primaryScale:1.25, corePosition:[-1.4,-.3,-.6], pointer:.05, idle:.1, nodes:scattered }),
  journey: state({ x:.28, y:.55, scale:1.18, rotation:[0,0,0], opacity:.55, forms:.45, surface:0, lines:1.1, orbits:0, spread:1, depth:.55, primaryScale:1.55, secondaryScale:.6, corePosition:[-2.2,-.5,-.8], rearPosition:[-2,0,-1], edges:[1,1,1,1,1,0,1,0,.25,.25,.25,.25], pointer:.06, idle:.08, nodes:chronology }),
  beyond: state({ nodeCount:4, x:.92, y:.5, scale:1.18, opacity:.26, forms:.3, surface:0, lines:.4, orbits:.4, spread:1.8, depth:.6, corePosition:[1.5,0,-1], orbitScale:[1.5,1.3,1], pointer:.03, idle:.08, nodes:scattered }),
  credentials: state({ nodeCount:4, x:.78, y:.45, scale:.85, opacity:.18, forms:.12, surface:.1, lines:.4, orbits:0, spread:1.8, depth:.4, corePosition:[1,0,-1.8], pointer:0, idle:.04, nodes:scattered }),
  contact: state({ x:.76, y:.42, scale:1.02, rotation:[.25,-.65,.2], opacity:.88, forms:1, surface:.75, lines:1.15, orbits:.45, spread:.2, depth:1.35, primaryScale:1.15, secondaryScale:.85, corePosition:[.45,.4,0], foregroundPosition:[.4,.8,0], rearPosition:[.25,.3,0], orbitScale:[1.1,.75,1], nodes:assembly.map(([x,y,z]): Point => [x,y + .65,z]), pointer:.15, idle:.25 }),
  footer: state({ nodeCount:1, x:.85, y:.25, scale:.7, rotation:[.25,-.65,.2], opacity:.15, forms:.2, surface:.15, lines:.35, orbits:.1, spread:.2, depth:.6, pointer:0, idle:.03 }),
};
export type VisualState = keyof typeof visualStates;
export const sections: { id: string; state: VisualState }[] = [
  {id:"hero",state:"hero"}, {id:"currently",state:"currently"}, {id:"work",state:"intro"},
  {id:"work-habit-flow",state:"habit"}, {id:"work-hate-speech-detection",state:"hate"},
  {id:"work-tomato-leaf-detection",state:"tomato"}, {id:"about",state:"about"},
  {id:"skills",state:"toolbox"}, {id:"journey",state:"journey"}, {id:"beyond-code",state:"beyond"},
  {id:"certifications",state:"credentials"}, {id:"contact",state:"contact"}, {id:"home-footer",state:"footer"},
];
