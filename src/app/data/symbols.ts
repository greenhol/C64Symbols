import { dim } from './dimensions';
import { C64Symbol } from './types';

const hAB: C64Symbol = {
    displayName: 'Q (l)',
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
const hD1: C64Symbol = {
    displayName: 'Q (r)',
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
const hB3: C64Symbol = {
    displayName: 'W (l)',
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
const hD7: C64Symbol = {
    displayName: 'W (r)',
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
const hB1: C64Symbol = {
    displayName: 'E (l)',    
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
const hC5: C64Symbol = {
    displayName: 'E (r)',
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*1,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*1
        }
    ]
}; // e2
const hB2: C64Symbol = {
    displayName: 'R (l)',
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
const hD2: C64Symbol = {
    displayName: 'R (r)',
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*6,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*6
        }
    ]
}; // r2
const hA3: C64Symbol = {
    displayName: 'T (l)',
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
const hD4: C64Symbol = {
    displayName: 'T (r)',
    lines: [
        {
            x1: dim.boxWidth/7*1,
            y1: 0,
            x2: dim.boxWidth/7*1,
            y2: dim.boxHeight
        }
    ]
}; // t2
const hB7: C64Symbol = {
    displayName: 'Y (l)',
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
const hD9: C64Symbol = {
    displayName: 'Y (r)',
    lines: [
        {
            x1: dim.boxWidth/7*6,
            y1: 0,
            x2: dim.boxWidth/7*6,
            y2: dim.boxHeight
        }
    ]
}; // y2
const hB8: C64Symbol = {
    displayName: 'U (l)',
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
const hD5: C64Symbol = {
    displayName: 'U (r)',
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
const hA2: C64Symbol = {
    displayName: 'I (l)',
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
const hC9: C64Symbol = {
    displayName: 'I (r)',
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
const hB9: C64Symbol = {
    displayName: 'O (l)',
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
const hCF: C64Symbol = {
    displayName: 'O (r)',
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
const hAF: C64Symbol = {
    displayName: 'P (l)',
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
const hD0: C64Symbol = {
    displayName: 'P (r)',
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
const hB0: C64Symbol = {
    displayName: 'A (l)',
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
const hC1: C64Symbol = {
    displayName: 'A (r)',
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
const hAE: C64Symbol = {
    displayName: 'S (l)',
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
const hD3: C64Symbol = {
    displayName: 'S (r)',
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
const hAC: C64Symbol = {
    displayName: 'D (l)',
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
const hC4: C64Symbol = {
    displayName: 'D (r)',
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*2,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*2
        }
    ]
}; // d2
const hBB: C64Symbol = {
    displayName: 'F (l)',
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
const hC6: C64Symbol = {
    displayName: 'F (r)',
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*5,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*5
        }
    ]
}; // f2
const hA5: C64Symbol = {
    displayName: 'G (l)',
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
const hC7: C64Symbol = {
    displayName: 'G (r)',
    lines: [
        {
            x1: dim.boxWidth/7*2,
            y1: 0,
            x2: dim.boxWidth/7*2,
            y2: dim.boxHeight
        }
    ]
}; // g2
const hB4: C64Symbol = {
    displayName: 'H (l)',
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
const hC8: C64Symbol = {
    displayName: 'H (r)',
    lines: [
        {
            x1: dim.boxWidth/7*5,
            y1: 0,
            x2: dim.boxWidth/7*5,
            y2: dim.boxHeight
        }
    ]
}; // h2
const hB5: C64Symbol = {
    displayName: 'J (l)',
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
const hCA: C64Symbol = {
    displayName: 'J (r)',
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
const hA1: C64Symbol = {
    displayName: 'K (l)',
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
const hCB: C64Symbol = {
    displayName: 'K (r)',
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
const hB6: C64Symbol = {
    displayName: 'L (l)',
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
const hCC: C64Symbol = {
    displayName: 'L (r)',
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
const hAD: C64Symbol = {
    displayName: 'Z (l)',
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
const hDA: C64Symbol = {
    displayName: 'Z (r)',
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
const hBD: C64Symbol = {
    displayName: 'X (l)',
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
const hD8: C64Symbol = {
    displayName: 'X (r)',
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
const hBC: C64Symbol = {
    displayName: 'C (l)',
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
const hC3: C64Symbol = {
    displayName: 'C (r)',
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/2,
            x2: dim.boxWidth,
            y2: dim.boxHeight/2
        }
    ]
}; // c2
const hBE: C64Symbol = {
    displayName: 'V (l)',
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
const hD6: C64Symbol = {
    displayName: 'V (r)',
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
const hBF: C64Symbol = {
    displayName: 'B (l)',
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
const hC2: C64Symbol = {
    displayName: 'B (r)',
    lines: [
        {
            x1: dim.boxWidth/2,
            y1: 0,
            x2: dim.boxWidth/2,
            y2: dim.boxHeight
        }
    ]
}; // b2
const hA7: C64Symbol = {
    displayName: 'N (l)',
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
const hCE: C64Symbol = {
    displayName: 'N (r)',
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
const hAA: C64Symbol = {
    displayName: 'M (l)',
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
const hCD: C64Symbol = {
    displayName: 'M (r)',
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
const hA6: C64Symbol = {
    displayName: '+ (l)',
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
const hDB: C64Symbol = {
    displayName: '+ (r)',
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
const hDC: C64Symbol = {
    displayName: '- (l)',
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
const hDD: C64Symbol = {
    displayName: '- (r)',
    lines: [
        {
            x1: dim.boxWidth/7*3,
            y1: 0,
            x2: dim.boxWidth/7*3,
            y2: dim.boxHeight
        }
    ]
}; // mi2
const hA4: C64Symbol = {
    displayName: '@ (l)',
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
const hBA: C64Symbol = {
    displayName: '@ (r)',
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
const hDF: C64Symbol = {
    displayName: '* (l)',
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
const hC0: C64Symbol = {
    displayName: '* (r)',
    lines: [
        {
            x1: 0,
            y1: dim.boxHeight/7*4,
            x2: dim.boxWidth,
            y2: dim.boxHeight/7*4
        }
    ]
}; // st2
const hA8: C64Symbol = {
    displayName: '£ (l)',
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
const hA9: C64Symbol = {
    displayName: '£ (r)',
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

export const symbols: Map<string, C64Symbol> = new Map([
    [ 'AB', hAB ],
    [ 'D1', hD1 ],
    [ 'B3', hB3 ],
    [ 'D7', hD7 ],
    [ 'B1', hB1 ],
    [ 'C5', hC5 ],
    [ 'B2', hB2 ],
    [ 'D2', hD2 ],
    [ 'A3', hA3 ],
    [ 'D4', hD4 ],
    [ 'B7', hB7 ],
    [ 'D9', hD9 ],
    [ 'B8', hB8 ],
    [ 'D5', hD5 ],
    [ 'A2', hA2 ],
    [ 'C9', hC9 ],
    [ 'B9', hB9 ],
    [ 'CF', hCF ],
    [ 'AF', hAF ],
    [ 'D0', hD0 ],
    [ 'B0', hB0 ],
    [ 'C1', hC1 ],
    [ 'AE', hAE ],
    [ 'D3', hD3 ],
    [ 'AC', hAC ],
    [ 'C4', hC4 ],
    [ 'BB', hBB ],
    [ 'C6', hC6 ],
    [ 'A5', hA5 ],
    [ 'C7', hC7 ],
    [ 'B4', hB4 ],
    [ 'C8', hC8 ],
    [ 'B5', hB5 ],
    [ 'CA', hCA ],
    [ 'A1', hA1 ],
    [ 'CB', hCB ],
    [ 'B6', hB6 ],
    [ 'CC', hCC ],
    [ 'AD', hAD ],
    [ 'DA', hDA ],
    [ 'BD', hBD ],
    [ 'D8', hD8 ],
    [ 'BC', hBC ],
    [ 'C3', hC3 ],
    [ 'BE', hBE ],
    [ 'D6', hD6 ],
    [ 'BF', hBF ],
    [ 'C2', hC2 ],
    [ 'A7', hA7 ],
    [ 'CE', hCE ],
    [ 'AA', hAA ],
    [ 'CD', hCD ],
    [ 'A6', hA6 ],
    [ 'DB', hDB ],
    [ 'DC', hDC ],
    [ 'DD', hDD ],
    [ 'A4', hA4 ],
    [ 'BA', hBA ],
    [ 'DF', hDF ],
    [ 'C0', hC0 ],
    [ 'A8', hA8 ],
    [ 'A9', hA9 ]
]);