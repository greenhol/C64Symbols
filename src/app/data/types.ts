export interface C64Symbol {
    displayName: string;
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
    strokeWidth?: number;
}

export interface SvgRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: boolean;
    stroke: boolean;
    strokeWidth?: number;
}

export interface SvgCircle {
    cx: number;
    cy: number;
    r: number;
    fill: boolean;
    stroke: boolean;
    strokeWidth?: number;
}

export interface SvgPath {
    d: string;
    fill: boolean;
    stroke: boolean;
    strokeWidth?: number;
}

export function isNumber(value: any): boolean {
    return typeof value === 'number';
}