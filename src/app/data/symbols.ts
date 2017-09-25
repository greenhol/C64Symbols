import { dim } from './dimensions';
import { C64Symbol } from './types';

export const hAB: C64Symbol = {
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
}; // q1
export const hD1: C64Symbol = {
    circles: [
        {
            cx: dim.boxWidth/2,
            cy: dim.boxWidth/2,
            r: dim.boxWidth/2,
            fill: true,
            stroke: false
        },
    ]
}; // q2
export const hB3: C64Symbol = {
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
}; // w1
export const hD7: C64Symbol = {
    circles: [
        {
            cx: dim.boxWidth/2,
            cy: dim.boxWidth/2,
            r: dim.boxWidth/2,
            fill: false,
            stroke: true
        },
    ]
}; // w2
export const hB1: C64Symbol = {
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
}; // e1
export const hC5: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*1,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*1
        }
    ]
}; // e2
export const hB2: C64Symbol = {
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
}; // r1
export const hD2: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*6,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*6
        }
    ]
}; // r2
export const hA3: C64Symbol = {
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
}; // t1
export const hD4: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/7*1,
            y1: 0,
            x2: dim.boxWidth/7*1,
            y2: dim.boxHeight
        }
    ]
}; // t2
export const hB7: C64Symbol = {
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
}; // y1
export const hD9: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/7*6,
            y1: 0,
            x2: dim.boxWidth/7*6,
            y2: dim.boxHeight
        }
    ]
}; // y2
export const hB8: C64Symbol = {
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
}; // u1
export const hD5: C64Symbol = {
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
}; // u2
export const hA2: C64Symbol = {
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
}; // i1
export const hC9: C64Symbol = {
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
}; // i2
export const hB9: C64Symbol = {
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
}; // o1
export const hCF: C64Symbol = {
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
}; // o2
export const hAF: C64Symbol = {
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
}; // p1
export const hD0: C64Symbol = {
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
}; // p2
export const hB0: C64Symbol = {
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
}; // a1
export const hC1: C64Symbol = {}; // a2
export const hAE: C64Symbol = {
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
}; // s1
export const hD3: C64Symbol = {}; // s2
export const hAC: C64Symbol = {
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
}; // d1
export const hC4: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*2,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*2
        }
    ]
}; // d2
export const hBB: C64Symbol = {
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
}; // f1
export const hC6: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*5,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*5
        }
    ]
}; // f2
export const hA5: C64Symbol = {}; // g1
export const hC7: C64Symbol = {}; // g2
export const hB4: C64Symbol = {}; // h1
export const hC8: C64Symbol = {}; // h2
export const hB5: C64Symbol = {}; // j1
export const hCA: C64Symbol = {}; // j2
export const hA1: C64Symbol = {}; // k1
export const hCB: C64Symbol = {}; // k2
export const hB6: C64Symbol = {}; // l1
export const hCC: C64Symbol = {}; // l2
export const hAD: C64Symbol = {}; // z1
export const hDA: C64Symbol = {
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
}; // z2
export const hBD: C64Symbol = {}; // x1
export const hD8: C64Symbol = {}; // x2
export const hBC: C64Symbol = {}; // c1
export const hC3: C64Symbol = {}; // c2
export const hBE: C64Symbol = {}; // v1
export const hD6: C64Symbol = {}; // v2
export const hBF: C64Symbol = {}; // b1
export const hC2: C64Symbol = {}; // b2
export const hA7: C64Symbol = {}; // n1
export const hCE: C64Symbol = {}; // n2
export const hAA: C64Symbol = {}; // m1
export const hCD: C64Symbol = {}; // m2
export const hA6: C64Symbol = {}; // pl1
export const hDB: C64Symbol = {}; // pl2
export const hDC: C64Symbol = {}; // mi1
export const hDD: C64Symbol = {}; // mi2
export const hA4: C64Symbol = {
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
}; // et1
export const hBA: C64Symbol = {
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
}; // et2
export const hDF: C64Symbol = {}; // st1
export const hC0: C64Symbol = {}; // st2
export const hA8: C64Symbol = {}; // pd1
export const hA9: C64Symbol = {}; // pd2
