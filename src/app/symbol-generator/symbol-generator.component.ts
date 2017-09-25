import { Component, ViewEncapsulation, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { dim } from './../data/dimensions';
import { C64Symbol, SvgLine, SvgRectangle, SvgCircle, SvgPath } from './../data/types';
import {
  hAB, hD1, hB3, hD7, hB1, hC5, hB2, hD2, hA3, hD4, hB7, hD9, hB8, hD5, hA2, hC9, hB9,
  hCF, hAF, hD0, hB0, hC1, hAE, hD3, hAC, hC4, hBB, hC6, hA5, hC7, hB4, hC8, hB5, hCA,
  hA1, hCB, hB6, hCC, hAD, hDA, hBD, hD8, hBC, hC3, hBE, hD6, hBF, hC2, hA7, hCE, hAA,
  hCD, hA6, hDB, hDC, hDD, hA4, hBA, hDF, hC0, hA8, hA9
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
    this.allSymbols.set('AB', hAB);
    this.allSymbols.set('D1', hD1);
    this.allSymbols.set('B3', hB3);
    this.allSymbols.set('D7', hD7);
    this.allSymbols.set('B1', hB1);
    this.allSymbols.set('C5', hC5);
    this.allSymbols.set('B2', hB2);
    this.allSymbols.set('D2', hD2);
    this.allSymbols.set('A3', hA3);
    this.allSymbols.set('D4', hD4);
    this.allSymbols.set('B7', hB7);
    this.allSymbols.set('D9', hD9);
    this.allSymbols.set('B8', hB8);
    this.allSymbols.set('D5', hD5);
    this.allSymbols.set('A2', hA2);
    this.allSymbols.set('C9', hC9);
    this.allSymbols.set('B9', hB9);
    this.allSymbols.set('CF', hCF);
    this.allSymbols.set('AF', hAF);
    this.allSymbols.set('D0', hD0);
    this.allSymbols.set('B0', hB0);
    this.allSymbols.set('C1', hC1);
    this.allSymbols.set('AE', hAE);
    this.allSymbols.set('D3', hD3);
    this.allSymbols.set('AC', hAC);
    this.allSymbols.set('C4', hC4);
    this.allSymbols.set('BB', hBB);
    this.allSymbols.set('C6', hC6);
    this.allSymbols.set('A5', hA5);
    this.allSymbols.set('C7', hC7);
    this.allSymbols.set('B4', hB4);
    this.allSymbols.set('C8', hC8);
    this.allSymbols.set('B5', hB5);
    this.allSymbols.set('CA', hCA);
    this.allSymbols.set('A1', hA1);
    this.allSymbols.set('CB', hCB);
    this.allSymbols.set('B6', hB6);
    this.allSymbols.set('CC', hCC);
    this.allSymbols.set('AD', hAD);
    this.allSymbols.set('DA', hDA);
    this.allSymbols.set('BD', hBD);
    this.allSymbols.set('D8', hD8);
    this.allSymbols.set('BC', hBC);
    this.allSymbols.set('C3', hC3);
    this.allSymbols.set('BE', hBE);
    this.allSymbols.set('D6', hD6);
    this.allSymbols.set('BF', hBF);
    this.allSymbols.set('C2', hC2);
    this.allSymbols.set('A7', hA7);
    this.allSymbols.set('CE', hCE);
    this.allSymbols.set('AA', hAA);
    this.allSymbols.set('CD', hCD);
    this.allSymbols.set('A6', hA6);
    this.allSymbols.set('DB', hDB);
    this.allSymbols.set('DC', hDC);
    this.allSymbols.set('DD', hDD);
    this.allSymbols.set('A4', hA4);
    this.allSymbols.set('BA', hBA);
    this.allSymbols.set('DF', hDF);
    this.allSymbols.set('C0', hC0);
    this.allSymbols.set('A8', hA8);
    this.allSymbols.set('A9', hA9);
  }

  ngOnInit() {
    const data: C64Symbol = hAB;
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

    this.createSymbol(this.allSymbols.get('AB'));
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
