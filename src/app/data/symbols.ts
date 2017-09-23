import {global} from './../../global/global';
import {C64Symbol} from './types';

export const q1: C64Symbol = {
    lines: [
        {
            x1: global.boxWidth/2,
            y1: 0,
            x2: global.boxWidth/2,
            y2: global.boxHeight
        },
        {
            x1: global.boxWidth/2,
            y1: global.boxHeight/2,
            x2: global.boxWidth,
            y2: global.boxHeight/2
        }
    ]
};

export const q2: C64Symbol = {
    circles: [
        {
            cx: global.boxWidth/2,
            cy: global.boxWidth/2,
            r: global.boxWidth/2,
            fill: true,
            stroke: false
        },
    ]
};

export const w1: C64Symbol = {
    lines: [
        {
            x1: global.boxWidth/2,
            y1: 0,
            x2: global.boxWidth/2,
            y2: global.boxHeight
        },
        {
            x1: 0,
            y1: global.boxHeight/2,
            x2: global.boxWidth/2,
            y2: global.boxHeight/2
        }
    ]
};

export const w2: C64Symbol = {
    circles: [
        {
            cx: global.boxWidth/2,
            cy: global.boxWidth/2,
            r: global.boxWidth/2,
            fill: false,
            stroke: true
        },
    ]
};

export const a1: C64Symbol = {
    rectangles: [
        {
            x: global.boxWidth/2,
            y: global.boxWidth/2,
            width: global.boxWidth/2,
            height: global.boxHeight/2,
            fill: false,
            stroke: true
        },
    ]
};

export const z2: C64Symbol = {
    paths: [
        {
            d: `M${global.boxWidth/2} 0
             L${global.boxWidth} ${global.boxHeight/2}
             L${global.boxWidth/2} ${global.boxHeight}
             L0 ${global.boxHeight/2}
             Z`,
            fill: true,
            stroke: false
        },
    ]
};
