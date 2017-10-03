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
            r: dim.boxWidth/2-dim.strokeWidth/2,
            fill: true,
            stroke: true
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
            r: dim.boxWidth/2-dim.strokeWidth/2,
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
export const hC1: C64Symbol = {
    circles: [
        {
            cx: 0.25 * dim.boxWidth,
            cy: 0.625 * dim.boxHeight,
            r: 0.2 * dim.boxWidth,
            fill: true,
            stroke: false
        },
        {
            cx: 0.75 * dim.boxWidth,
            cy: 0.625 * dim.boxHeight,
            r: 0.2 * dim.boxWidth,
            fill: true,
            stroke: false
        }
    ],
    paths: [
        {
            d: `M${0.5 * dim.boxWidth} 0
            L${0.906 * dim.boxWidth} ${0.5 * dim.boxHeight}
            L${0.65 * dim.boxWidth} ${0.8 * dim.boxHeight}
            L${0.35 * dim.boxWidth} ${0.8 * dim.boxHeight}
            L${0.094 * dim.boxWidth} ${0.5 * dim.boxHeight}
            Z`,
            fill: true,
            stroke: false
        },
        {
            d: `M${0.25 * dim.boxWidth} ${1 * dim.boxHeight}
            L${0.4 * dim.boxWidth} ${0.95 * dim.boxHeight}
            L${0.4 * dim.boxWidth} ${0.625 * dim.boxHeight}
            L${0.6 * dim.boxWidth} ${0.625 * dim.boxHeight}
            L${0.6 * dim.boxWidth} ${0.95 * dim.boxHeight}
            L${0.75 * dim.boxWidth} ${1 * dim.boxHeight}
            Z`,
            fill: true,
            stroke: true
        }
    ]
}; // a2
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
export const hD3: C64Symbol = {
    circles: [
        {
            cx: 0.325 * dim.boxWidth,
            cy: 0.325 * dim.boxHeight,
            r: 0.275 * dim.boxWidth,
            fill: true,
            stroke: false
        },
        {
            cx: 0.675 * dim.boxWidth,
            cy: 0.325 * dim.boxHeight,
            r: 0.275 * dim.boxWidth,
            fill: true,
            stroke: false
        }
    ],
    paths: [
        {
            d: `M${0.5 * dim.boxWidth} ${1 * dim.boxHeight}
            L${0.105 * dim.boxWidth} ${0.49 * dim.boxHeight}
            L${0.325 * dim.boxWidth} ${0.325 * dim.boxHeight}
            L${0.675 * dim.boxWidth} ${0.325 * dim.boxHeight}
            L${0.895 * dim.boxWidth} ${0.49 * dim.boxHeight}
            Z`,
            fill: true,
            stroke: false
        }
    ]
}; // s2
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
export const hA5: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth/8*1,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
}; // g1
export const hC7: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/7*2,
            y1: 0,
            x2: dim.boxWidth/7*2,
            y2: dim.boxHeight
        }
    ]
}; // g2
export const hB4: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth/8*2,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
}; // h1
export const hC8: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/7*5,
            y1: 0,
            x2: dim.boxWidth/7*5,
            y2: dim.boxHeight
        }
    ]
}; // h2
export const hB5: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth/8*3,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
}; // j1
export const hCA: C64Symbol = {
    paths: [
        {
            d: `M${dim.boxWidth/2-dim.strokeWidth} 0
            A${dim.boxWidth/2+dim.strokeWidth} ${dim.boxHeight/2+dim.strokeWidth}
            0 0 0
            ${dim.boxWidth},${dim.boxHeight/2+dim.strokeWidth}`,
            fill: false,
            stroke: true
        }
    ]
}; // j2
export const hA1: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth/8*4,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
}; // k1
export const hCB: C64Symbol = {
    paths: [
        {
            d: `M${dim.boxWidth/2+dim.strokeWidth} 0
            A${dim.boxWidth/2+dim.strokeWidth} ${dim.boxHeight/2+dim.strokeWidth}
            0 0 1
            0,${dim.boxHeight/2+dim.strokeWidth}`,
            fill: false,
            stroke: true
        }
    ]
}; // k2
export const hB6: C64Symbol = {
    rectangles: [
        {
            x: dim.boxWidth/8*5,
            y: 0,
            width: dim.boxWidth/8*3,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
}; // l1
export const hCC: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.thickBorder,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        },
        {
            x: 0,
            y: dim.boxHeight-dim.thickBorder,
            width: dim.boxWidth,
            height: dim.thickBorder,
            fill: true,
            stroke: false
        }
    ]
}; // l2
export const hAD: C64Symbol = {
    rectangles: [
        {
            x: dim.boxWidth/2,
            y: 0,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: false,
            stroke: true
        },
    ]
}; // z1
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
export const hBD: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: false,
            stroke: true
        },
    ]
}; // x1
export const hD8: C64Symbol = {
    circles: [
        {
            cx: 0.5 * dim.boxWidth,
            cy: 0.275 * dim.boxHeight,
            r: 0.225 * dim.boxWidth,
            fill: true,
            stroke: false
        },
        {
            cx: 0.275 * dim.boxWidth,
            cy: 0.65 * dim.boxHeight,
            r: 0.225 * dim.boxWidth,
            fill: true,
            stroke: false
        },
        {
            cx: 0.725 * dim.boxWidth,
            cy: 0.65 * dim.boxHeight,
            r: 0.225 * dim.boxWidth,
            fill: true,
            stroke: false
        }
    ],
    paths: [
        {
            d: `M${0.25 * dim.boxWidth} ${1 * dim.boxHeight}
            L${0.4 * dim.boxWidth} ${0.95 * dim.boxHeight}
            L${0.4 * dim.boxWidth} ${0.275 * dim.boxHeight}
            L${0.6 * dim.boxWidth} ${0.2755 * dim.boxHeight}
            L${0.6 * dim.boxWidth} ${0.95 * dim.boxHeight}
            L${0.75 * dim.boxWidth} ${1 * dim.boxHeight}
            Z`,
            fill: true,
            stroke: true
        }
    ]
}; // x2
export const hBC: C64Symbol = {
    rectangles: [
        {
            x: dim.boxWidth/2,
            y: 0,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: true,
            stroke: true
        },
    ]
}; // c1
export const hC3: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/2,
            x2: dim.boxWidth,
            y2: dim.boxHeight/2
        }
    ]
}; // c2
export const hBE: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: true,
            stroke: true
        }
    ]
}; // v1
export const hD6: C64Symbol = {
    lines: [
        {
            x1: 0.55*dim.strokeWidth,
            y1: 0.55*dim.strokeWidth,
            x2: dim.boxWidth-0.55*dim.strokeWidth,
            y2: dim.boxHeight-0.55*dim.strokeWidth,
            strokeWidth: dim.strokeWidth*1.66
        },
        {
            x1: 0.55*dim.strokeWidth,
            y1: dim.boxHeight-0.55*dim.strokeWidth,
            x2: dim.boxWidth-0.55*dim.strokeWidth,
            y2: 0.55*dim.strokeWidth,
            strokeWidth: dim.strokeWidth*1.66
        }
    ]
}; // v2
export const hBF: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: true,
            stroke: false
        },
        {
            x: dim.boxWidth/2,
            y: dim.boxHeight/2,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: true,
            stroke: false
        }
    ]
}; // b1
export const hC2: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/2,
            y1: 0,
            x2: dim.boxWidth/2,
            y2: dim.boxHeight
        }
    ]
}; // b2
export const hA7: C64Symbol = {
    rectangles: [
        {
            x: dim.boxWidth/8*6,
            y: 0,
            width: dim.boxWidth/8*2,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
}; // n1
export const hCE: C64Symbol = {
    lines: [
        {
            x1: 0.55*dim.strokeWidth,
            y1: dim.boxHeight-0.55*dim.strokeWidth,
            x2: dim.boxWidth-0.55*dim.strokeWidth,
            y2: 0.55*dim.strokeWidth,
            strokeWidth: dim.strokeWidth*1.66
        }
    ]
}; // n2
export const hAA: C64Symbol = {
    rectangles: [
        {
            x: dim.boxWidth/8*7,
            y: 0,
            width: dim.boxWidth/8*1,
            height: dim.boxHeight,
            fill: true,
            stroke: false
        }
    ]
}; // m1
export const hCD: C64Symbol = {
    lines: [
        {
            x1: 0.55*dim.strokeWidth,
            y1: 0.55*dim.strokeWidth,
            x2: dim.boxWidth-0.55*dim.strokeWidth,
            y2: dim.boxHeight-0.55*dim.strokeWidth,
            strokeWidth: dim.strokeWidth*1.66
        }
    ]
}; // m2
export const hA6: C64Symbol = {
    rectangles: [
        {
            x: 0,
            y: 0,
            width: (dim.boxWidth-dim.strokeWidth)/4 + dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 2*(dim.boxWidth-dim.strokeWidth)/4,
            y: 0,
            width: (dim.boxWidth-dim.strokeWidth)/4,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 1*(dim.boxWidth-dim.strokeWidth)/4,
            y: dim.strokeWidth/2 + 1*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4,
            height:(dim.boxHeight-dim.strokeWidth)/4,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 3*(dim.boxWidth-dim.strokeWidth)/4,
            y: dim.strokeWidth/2 + 1*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4 + dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4,
            fill: true,
            stroke: false
        },
        {
            x: 0,
            y: dim.strokeWidth/2 + 2*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4 + dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 2*(dim.boxWidth-dim.strokeWidth)/4,
            y: dim.strokeWidth/2 + 2*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4,
            height:(dim.boxHeight-dim.strokeWidth)/4,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 1*(dim.boxWidth-dim.strokeWidth)/4,
            y: dim.strokeWidth/2 + 3*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 3*(dim.boxWidth-dim.strokeWidth)/4,
            y: dim.strokeWidth/2 + 3*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4 + dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        }
    ]
}; // pl1
export const hDB: C64Symbol = {
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
            x2: dim.boxWidth,
            y2: dim.boxHeight/2
        }
    ]
}; // pl2
export const hDC: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/2+dim.strokeWidth/2,
            y1: 0,
            x2: dim.boxWidth/2+dim.strokeWidth/2,
            y2: dim.boxHeight
        }
    ],
    rectangles: [
        {
            x: 0,
            y: 0,
            width: (dim.boxWidth-dim.strokeWidth)/4 + dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 1*(dim.boxWidth-dim.strokeWidth)/4,
            y: dim.strokeWidth/2 + 1*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4+dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4,
            fill: true,
            stroke: false
        },
        {
            x: 0,
            y: dim.strokeWidth/2 + 2*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4 + dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 1*(dim.boxWidth-dim.strokeWidth)/4,
            y: dim.strokeWidth/2 + 3*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4+dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        }
    ]
}; // mi1
export const hDD: C64Symbol = {
    lines: [
        {
            x1: dim.boxWidth/7*3,
            y1: 0,
            x2: dim.boxWidth/7*3,
            y2: dim.boxHeight
        }
    ]
}; // mi2
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
export const hDF: C64Symbol = {
    paths: [
        {
            d: `M0 0
            L${dim.boxWidth} ${dim.boxHeight}
            L${dim.boxWidth} 0`,
            fill: true,
            stroke: false
        }
    ]
}; // st1
export const hC0: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*4,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*4
        }
    ]
}; // st2
export const hA8: C64Symbol = {
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/2-dim.strokeWidth/2,
            x2: dim.boxWidth,
            y2: dim.boxHeight/2-dim.strokeWidth/2
        }
    ],
    rectangles: [
        {
            x: dim.strokeWidth/2 + 1*(dim.boxWidth-dim.strokeWidth)/4,
            y: 2*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 3*(dim.boxWidth-dim.strokeWidth)/4,
            y: 2*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4 + dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        },
        {
            x: 0,
            y: dim.strokeWidth/2 + 3*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4 + dim.strokeWidth/2,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        },
        {
            x: dim.strokeWidth/2 + 2*(dim.boxWidth-dim.strokeWidth)/4,
            y: dim.strokeWidth/2 + 3*(dim.boxHeight-dim.strokeWidth)/4,
            width: (dim.boxWidth-dim.strokeWidth)/4,
            height:(dim.boxHeight-dim.strokeWidth)/4 + dim.strokeWidth/2,
            fill: true,
            stroke: false
        }
    ]
}; // pd1
export const hA9: C64Symbol = {
    paths: [
        {
            d: `M0 0
            L0 ${dim.boxHeight}
            L${dim.boxWidth} 0`,
            fill: true,
            stroke: false
        }
    ]
}; // pd2
