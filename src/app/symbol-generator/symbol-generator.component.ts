import { Component, ViewEncapsulation, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { dim } from './../data/dimensions';
import { C64Symbol, SvgLine, SvgRectangle, SvgCircle, SvgPath } from './../data/types';
import { q1, q2, w1, w2, e1, e2, r1, r2, t1, t2, y1, y2, u1, u2, i1, i2, o1, o2, p1, p2,
  a1, a2, s1, s2, d1, d2, f1, f2, g1, g2, h1, h2, j1, j2, k1, k2, l1, l2,
  z1, z2, x1, x2, c1, c2, v1, v2, b1, b2, n1, n2, m1, m2,
  pl1, pl2, mi1, mi2, et1, et2, st1, st2
} from './../data/symbols';

@Component({
  selector: 'app-symbol-generator',
  template: ``,
  encapsulation: ViewEncapsulation.None
})
export class SymbolGeneratorComponent implements OnInit {

  public get svgElement(): Element {
    return this.element.nativeElement.querySelector('svg');
  };

  private d3: D3;
  private el: Element;
  private svg: any;
  private svgg: any;
  private allSymbos: C64Symbol[] = [];
  private allSymbols: Map<string, C64Symbol> = new Map();
  private cnt = 0;

  constructor(private element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.allSymbols.set('q1', q1);
    this.allSymbols.set('q2', q2);
    this.allSymbols.set('w1', w1);
    this.allSymbols.set('w2', w2);
    this.allSymbols.set('e1', e1);
    this.allSymbols.set('e2', e2);
    this.allSymbols.set('r1', r1);
    this.allSymbols.set('r2', r2);
    this.allSymbols.set('t1', t1);
    this.allSymbols.set('t2', t2);
    this.allSymbols.set('y1', y1);
    this.allSymbols.set('y2', y2);
    this.allSymbols.set('u1', u1);
    this.allSymbols.set('u2', u2);
    this.allSymbols.set('i1', i1);
    this.allSymbols.set('i2', i2);
    this.allSymbols.set('o1', o1);
    this.allSymbols.set('o2', o2);
    this.allSymbols.set('p1', p1);
    this.allSymbols.set('p2', p2);
    this.allSymbols.set('a1', a1);
    this.allSymbols.set('a2', a2);
    this.allSymbols.set('s1', s1);
    this.allSymbols.set('s2', s2);
    this.allSymbols.set('d1', d1);
    this.allSymbols.set('d2', d2);
    this.allSymbols.set('f1', f1);
    this.allSymbols.set('f2', f2);
    this.allSymbols.set('g1', g1);
    this.allSymbols.set('g2', g2);
    this.allSymbols.set('h1', h1);
    this.allSymbols.set('h2', h2);
    this.allSymbols.set('j1', j1);
    this.allSymbols.set('j2', j2);
    this.allSymbols.set('k1', k1);
    this.allSymbols.set('k2', k2);
    this.allSymbols.set('l1', l1);
    this.allSymbols.set('l2', l2);
    this.allSymbols.set('z1', z1);
    this.allSymbols.set('z2', z2);
    this.allSymbols.set('x1', x1);
    this.allSymbols.set('x2', x2);
    this.allSymbols.set('c1', c1);
    this.allSymbols.set('c2', c2);
    this.allSymbols.set('v1', v1);
    this.allSymbols.set('v2', v2);
    this.allSymbols.set('b1', b1);
    this.allSymbols.set('b2', b2);
    this.allSymbols.set('n1', n1);
    this.allSymbols.set('n2', n2);
    this.allSymbols.set('m1', m1);
    this.allSymbols.set('m2', m2);
    this.allSymbols.set('pl1', pl1);
    this.allSymbols.set('pl2', pl2);
    this.allSymbols.set('mi1', mi1);
    this.allSymbols.set('mi2', mi2);
    this.allSymbols.set('et1', et1);
    this.allSymbols.set('et2', et2);
    this.allSymbols.set('st1', st1);
    this.allSymbols.set('st2', st2);
  }

  ngOnInit() {
    const data: C64Symbol = w2;
    this.svg = this.d3.select(this.element.nativeElement)
      .append('svg')
      .style("width", dim.boxWidth + 20)
      .style("height", dim.boxWidth + 20);

    this.svgg = this.svg.append('g')
      .attr('transform', 'translate(10.5, 10.5)');

    // Create Box
    this.svgg.append('rect')
      .attr('width', dim.boxWidth)
      .attr('height', dim.boxHeight)
      .style('stroke-width', dim.strokeWidth)
      .style('fill', 'none')
      .style('stroke', 'black');

    this.createSymbol(this.allSymbols.get('q1'));
  }

  public drawSymbol(name: string): void {
    this.createSymbol(this.allSymbols.get(name));
  }

  private createSymbol(symbol: C64Symbol): void {
    let shape: string;
    let data: SvgLine[] | SvgCircle[] | SvgRectangle[] | SvgPath[];
    // Update Lines
    shape = 'line';
    data = symbol.lines;
    this.svgg.selectAll(`${shape}.${shape}`).remove(); 
    if (data) {
      this.svgg.selectAll(`${shape}.${shape}`)
        .data(data)
        .enter()
        .append(shape)
        .classed(shape, true)
        .attr('x1', (d: SvgLine) => d.x1)
        .attr('y1', (d: SvgLine) => d.y1)
        .attr('x2', (d: SvgLine) => d.x2)
        .attr('y2', (d: SvgLine) => d.y2)
        .style('stroke', dim.color)
        .style('stroke-width', dim.strokeWidth);
    }
    // Update Circles
    shape = 'circle';
    data = symbol.circles;
    this.svgg.selectAll(`${shape}.${shape}`).remove(); 
    if (data) {
      this.svgg.selectAll(`${shape}.${shape}`)
        .data(data)
        .enter()
        .append(shape)
        .classed(shape, true)
        .attr('cx', (d: SvgCircle) => d.cx)
        .attr('cy', (d: SvgCircle) => d.cy)
        .attr('r', (d: SvgCircle) => d.r)
        .style('stroke', (d: SvgCircle) => d.stroke ? 'black' : 'none')
        .style('fill', (d: SvgCircle) => d.fill ? 'black' : 'none')
        .style('stroke-width', dim.strokeWidth);
    }    
    // Update Rectangles
    shape = 'rect';
    data = symbol.rectangles;
    this.svgg.selectAll(`${shape}.${shape}`).remove(); 
    if (data) {
      this.svgg.selectAll(`${shape}.${shape}`)
        .data(data)
        .enter()
        .append(shape)
        .classed(shape, true)
        .attr('x', (d: SvgRectangle) => d.x)
        .attr('y', (d: SvgRectangle) => d.y)
        .attr('width', (d: SvgRectangle) => d.width)
        .attr('height', (d: SvgRectangle) => d.height)
        .style('stroke', (d: SvgCircle) => d.stroke ? 'black' : 'none')
        .style('fill', (d: SvgCircle) => d.fill ? 'black' : 'none')
        .style('stroke-width', dim.strokeWidth);
    }
    // Update Paths
    shape = 'path';
    data = symbol.paths;
    this.svgg.selectAll(`${shape}.${shape}`).remove(); 
    if (data) {
      this.svgg.selectAll(`${shape}.${shape}`)
        .data(data)
        .enter()
        .append(shape)
        .classed(shape, true)
        .attr('d', (d: SvgPath) => d.d)
        .style('stroke', (d: SvgPath) => d.stroke ? 'black' : 'none')
        .style('fill', (d: SvgPath) => d.fill ? 'black' : 'none')
        .style('stroke-width', dim.strokeWidth);
    }    
  }
}
