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

export const a1: C64Symbol = {
    rectangles: [
        {
            x: dim.boxWidth/2,
            y: dim.boxWidth/2,
            width: dim.boxWidth/2,
            height: dim.boxHeight/2,
            fill: false,
            stroke: true
        },
    ]
};

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
