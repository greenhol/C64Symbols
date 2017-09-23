import { dim } from './dimensions';
import { C64Symbol } from './types';

export const q1: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/2,
            y1: 0,
            x2: dim.boxWidth/2,
            y2: dim.boxHeight
        },
        {
            x1: dim.boxWidth/2,
            y1: dim.boxHeight/2,
            x2: dim.boxWidth,
            y2: dim.boxHeight/2
        }
    ]
};
export const q2: C64Symbol = {
    circles: [
        {
            cx: dim.boxWidth/2,
            cy: dim.boxWidth/2,
            r: dim.boxWidth/2,
            fill: true,
            stroke: false
        },
    ]
};
export const w1: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/2,
            y1: 0,
            x2: dim.boxWidth/2,
            y2: dim.boxHeight
        },
        {
            x1: 0,
            y1: dim.boxHeight/2,
            x2: dim.boxWidth/2,
            y2: dim.boxHeight/2
        }
    ]
};
export const w2: C64Symbol = {
    circles: [
        {
            cx: dim.boxWidth/2,
            cy: dim.boxWidth/2,
            r: dim.boxWidth/2,
            fill: false,
            stroke: true
        },
    ]
};
export const e1: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/2,
            y1: 0,
            x2: dim.boxWidth/2,
            y2: dim.boxHeight/2
        },
        {
            x1: 0,
            y1: dim.boxHeight/2,
            x2: dim.boxWidth,
            y2: dim.boxHeight/2
        }
    ]
};
export const e2: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*1,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*1
        }
    ]
};
export const r1: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/2,
            y1: dim.boxHeight/2,
            x2: dim.boxWidth/2,
            y2: dim.boxHeight
        },
        {
            x1: 0,
            y1: dim.boxHeight/2,
            x2: dim.boxWidth,
            y2: dim.boxHeight/2
        }
    ]
};
export const r2: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*6,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*6
        }
    ]
};
export const t1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth,
            height: dim.boxHeight/8*1,
            fill: true,
            stroke: false
        }
    ]
};
export const t2: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/7*1,
            y1: 0,
            x2: dim.boxWidth/7*1,
            y2: dim.boxHeight
        }
    ]
};
export const y1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth,
            height: dim.boxHeight/8*2,
            fill: true,
            stroke: false
        }
    ]
};
export const y2: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/7*6,
            y1: 0,
            x2: dim.boxWidth/7*6,
            y2: dim.boxHeight
        }
    ]
};
export const u1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth,
            height: dim.boxHeight/8*3,
            fill: true,
            stroke: false
        }
    ]
};
export const u2: C64Symbol = {
    paths: [
        {
            d: `M${dim.boxWidth} ${dim.boxHeight/2-dim.strokeWidth}
            A${dim.boxWidth/2+dim.strokeWidth} ${dim.boxHeight/2+dim.strokeWidth}
            0 0 0
            ${dim.boxWidth/2-dim.strokeWidth},${dim.boxHeight}`,
            fill: false,
            stroke: true
        }
    ]
};
export const i1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: dim.boxHeight/8*4,
            width: dim.boxWidth,
            height: dim.boxHeight/8*4,
            fill: true,
            stroke: false
        }
    ]
};
export const i2: C64Symbol = {
    paths: [
        {
            d: `M0 ${dim.boxHeight/2-dim.strokeWidth}
            A${dim.boxWidth/2+dim.strokeWidth} ${dim.boxHeight/2+dim.strokeWidth}
            0 0 1
            ${dim.boxWidth/2+dim.strokeWidth},${dim.boxHeight}`,
            fill: false,
            stroke: true
        }
    ]
};
export const o1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: dim.boxHeight/8*5,
            width: dim.boxWidth,
            height: dim.boxHeight/8*3,
            fill: true,
            stroke: false
        }
    ]
};
export const o2: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth,
            height: dim.thickBorder,
            fill: true,
            stroke: false
        },
        {
            x: 0,
            y: 0,
            width: dim.thickBorder,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
};
export const p1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: dim.boxHeight/8*6,
            width: dim.boxWidth,
            height: dim.boxHeight/8*2,
            fill: true,
            stroke: false
        }
    ]
};
export const p2: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth,
            height: dim.thickBorder,
            fill: true,
            stroke: false
        },
        {
            x: dim.boxWidth-dim.thickBorder,
            y: 0,
            width: dim.thickBorder,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
};

export const a1: C64Symbol = {
    rectangles: [
        {
            x: dim.boxWidth/2,
            y: dim.boxHeight/2,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: false,
            stroke: true
        },
    ]
};
export const a2: C64Symbol = {};
export const s1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: dim.boxHeight/2,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: false,
            stroke: true
        },
    ]
};
export const s2: C64Symbol = {};
export const d1: C64Symbol = {
    rectangles: [
        {
            x: dim.boxWidth/2,
            y: dim.boxHeight/2,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: true,
            stroke: true
        },
    ]
};
export const d2: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*2,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*2
        }
    ]
};
export const f1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: dim.boxHeight/2,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: true,
            stroke: true
        },
    ]
};
export const f2: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*5,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*5
        }
    ]
};
export const g1: C64Symbol = {};
export const g2: C64Symbol = {};
export const h1: C64Symbol = {};
export const h2: C64Symbol = {};
export const j1: C64Symbol = {};
export const j2: C64Symbol = {};
export const k1: C64Symbol = {};
export const k2: C64Symbol = {};
export const l1: C64Symbol = {};
export const l2: C64Symbol = {};

export const z1: C64Symbol = {};
export const z2: C64Symbol = {
    paths: [
        {
            d: `M${dim.boxWidth/2} 0
             L${dim.boxWidth} ${dim.boxHeight/2}
             L${dim.boxWidth/2} ${dim.boxHeight}
             L0 ${dim.boxHeight/2}
             Z`,
            fill: true,
            stroke: false
        },
    ]
};
export const x1: C64Symbol = {};
export const x2: C64Symbol = {};
export const c1: C64Symbol = {};
export const c2: C64Symbol = {};
export const v1: C64Symbol = {};
export const v2: C64Symbol = {};
export const b1: C64Symbol = {};
export const b2: C64Symbol = {};
export const n1: C64Symbol = {};
export const n2: C64Symbol = {};
export const m1: C64Symbol = {};
export const m2: C64Symbol = {};

export const pl1: C64Symbol = {};
export const pl2: C64Symbol = {};
export const mi1: C64Symbol = {};
export const mi2: C64Symbol = {};
export const et1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: dim.boxHeight/8*7,
            width: dim.boxWidth,
            height: dim.boxHeight/8*1,
            fill: true,
            stroke: false
        }
    ]
};
export const et2: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: dim.boxHeight-dim.thickBorder,
            width: dim.boxWidth,
            height: dim.thickBorder,
            fill: true,
            stroke: false
        },
        {
            x: dim.boxWidth-dim.thickBorder,
            y: 0,
            width: dim.thickBorder,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
};
export const st1: C64Symbol = {};
export const st2: C64Symbol = {};
