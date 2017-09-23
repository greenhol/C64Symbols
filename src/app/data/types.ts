export interface C64Symbol {
    lines?: SvgLine[];
    rectangles?: SvgRectangle[];
    circles?: SvgCircle[];
    paths?: SvgPath[];
}

export interface SvgLine {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

export interface SvgRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: boolean;
    stroke: boolean;
}

export interface SvgCircle {
    cx: number;
    cy: number;
    r: number;
    fill: boolean;
    stroke: boolean;
}

export interface SvgPath {
    d: string;
    fill: boolean;
    stroke: boolean;
}