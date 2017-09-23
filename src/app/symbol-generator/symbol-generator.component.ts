import { Component, ViewEncapsulation, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { dim } from './../data/dimensions';
import { C64Symbol, SvgLine, SvgRectangle, SvgCircle, SvgPath } from './../data/types';
import { q1, q2, w1, w2, a1, z2 } from './../data/symbols';

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
  private cnt = 0;

  constructor(private element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
  }

  ngOnInit() {
    const data: C64Symbol = w2;
    this.svg = this.d3.select(this.element.nativeElement).append('svg');

    this.svgg = this.svg.append('g')
      .attr('transform', 'translate(10.5, 10.5)');

    // Create Box
    this.svgg.append('rect')
      .attr('width', dim.boxWidth)
      .attr('height', dim.boxHeight)
      .style('stroke-width', dim.strokeWidth)
      .style('fill', 'none')
      .style('stroke', 'black');

    this.allSymbos.push(q1);
    this.allSymbos.push(q2);
    this.allSymbos.push(w1);
    this.allSymbos.push(w2);
    this.allSymbos.push(a1);
    this.allSymbos.push(z2);

    this.createSymbol(this.allSymbos[this.cnt])

    // setInterval(() => {
    //   this.next();
    // }, 1000);
  }

  public next(): void {
    this.createSymbol(this.allSymbos[this.cnt]);
    this.cnt++;      
    if (this.cnt > this.allSymbos.length-1) {
      this.cnt = 0; 
    }
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
