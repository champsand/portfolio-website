export type Point = [number, number, number];
export const assembly: Point[] = [
  [-1.8, 1.2, -.6], [-.8, 2.05, -.9], [.6, 1.8, -.7], [1.8, .9, -.6],
  [2, -.4, .1], [1.1, -1.6, .6], [-.3, -1.9, .2], [-1.5, -.9, .7],
  [-1.1, .3, 1.2], [.5, 1, 1.1], [1.3, -.2, 1.4], [-.1, -.8, 1.2],
];
export const links = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,8],[3,9],[5,10],[7,11]];
const scattered = assembly.map(([x,y,z]): Point => [x * 1.4, y * 1.25, z * .6]);
const dual = assembly.map(([,y,z], i): Point => [(i < 6 ? -1 : 1) * (1.1 + i % 3 * .3), y * .65, z * .5]);
const path = assembly.map(([, ,z], i): Point => [-2.2 + (i % 6) * .85, i < 6 ? .25 : (i === 10 ? -1.3 : -.4), z * .3]);
const chronology = assembly.map(([, ,z], i): Point => [i < 6 ? -.15 : .22, 2 - (i % 6) * .8, z * .25]);

export type VisualTarget = {
  x: number; y: number; scale: number; rotation: Point;
  opacity: number; forms: number; lines: number; orbits: number;
  spread: number; pointer: number; idle: number; nodes: Point[];
};
const base: VisualTarget = { x: .72, y: .48, scale: 1, rotation: [.15,-.35,-.2], opacity: 1, forms: 1, lines: 1, orbits: 1, spread: 0, pointer: 1, idle: 1, nodes: assembly };
const state = (target: Partial<VisualTarget>): VisualTarget => ({ ...base, ...target });

// Viewport fractions position the assembly. All narrative targets live here.
export const visualStates = {
  hero: base,
  currently: state({ x:.92, y:.55, scale:.38, opacity:.3, forms:.25, lines:.45, orbits:.12, spread:1.2, pointer:.05, idle:.25, nodes:scattered }),
  intro: state({ x:.9, scale:.5, opacity:.4, forms:.35, lines:.6, orbits:.2, spread:1.4, pointer:.15, idle:.35, nodes:scattered }),
  habit: state({ x:.88, y:.42, scale:.72, opacity:.75, forms:.65, lines:.7, orbits:.45, spread:1.1, pointer:.4, idle:.4, nodes:scattered }),
  hate: state({ x:.87, y:.46, scale:.58, rotation:[.1,.25,.1], opacity:.6, forms:.4, lines:.8, orbits:.08, spread:1.6, pointer:.4, idle:.3, nodes:dual }),
  tomato: state({ x:.85, y:.55, scale:.62, rotation:[.05,-.1,-.35], opacity:.65, forms:.2, lines:.85, orbits:0, spread:1.8, pointer:.4, idle:.3, nodes:path }),
  about: state({ x:.95, scale:.35, opacity:0, forms:0, lines:0, orbits:0, spread:2, pointer:0, idle:0, nodes:scattered }),
  toolbox: state({ x:.96, scale:.38, opacity:.15, forms:0, lines:.5, orbits:0, spread:2, pointer:.05, idle:.12, nodes:scattered }),
  journey: state({ x:.47, y:.55, scale:.65, rotation:[0,0,0], opacity:.4, forms:0, lines:.65, orbits:0, spread:1, pointer:.2, idle:.12, nodes:chronology }),
  beyond: state({ x:.97, scale:.38, opacity:.15, forms:0, lines:.35, orbits:0, spread:2, pointer:.05, idle:.1, nodes:scattered }),
  credentials: state({ x:.97, scale:.3, opacity:.05, forms:0, lines:.2, orbits:0, spread:1.8, pointer:0, idle:0, nodes:scattered }),
  contact: state({ x:.74, y:.36, scale:.65, rotation:[.2,-.6,.18], opacity:.6, forms:.9, lines:.8, orbits:.4, spread:.35, pointer:.3, idle:.35 }),
  footer: state({ x:.8, y:.3, scale:.4, rotation:[.2,-.6,.18], opacity:.05, forms:.25, lines:.2, orbits:.1, spread:.2, pointer:0, idle:.05 }),
};
export type VisualState = keyof typeof visualStates;
export const sections: { id: string; state: VisualState }[] = [
  {id:"hero",state:"hero"}, {id:"currently",state:"currently"}, {id:"work",state:"intro"},
  {id:"work-habit-flow",state:"habit"}, {id:"work-hate-speech-detection",state:"hate"},
  {id:"work-tomato-leaf-detection",state:"tomato"}, {id:"about",state:"about"},
  {id:"skills",state:"toolbox"}, {id:"journey",state:"journey"}, {id:"beyond-code",state:"beyond"},
  {id:"certifications",state:"credentials"}, {id:"contact",state:"contact"}, {id:"home-footer",state:"footer"},
];
