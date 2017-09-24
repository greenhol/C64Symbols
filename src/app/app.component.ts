import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SymbolGeneratorComponent } from './symbol-generator/symbol-generator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public symbolNameList: string[] = [
    'q1', 'q2', 'w1', 'w2', 'e1', 'e2', 'r1', 'r2', 't1', 't2', 'y1', 'y2', 'u1', 'u2', 'i1', 'i2', 'o1', 'o2', 'p1', 'p2',
    'a1', 'a2', 's1', 's2', 'd1', 'd2', 'f1', 'f2', 'g1', 'g2', 'h1', 'h2', 'j1', 'j2', 'k1', 'k2', 'l1', 'l2',
    'z1', 'z2', 'x1', 'x2', 'c1', 'c2', 'v1', 'v2', 'b1', 'b2', 'n1', 'n2', 'm1', 'm2',
    'pl1', 'pl2', 'mi1', 'mi2', 'et1', 'et2', 'st1', 'st2'
  ];
  public symbolName = this.symbolNameList[0];

  @ViewChild(SymbolGeneratorComponent)
  private symbolGenerator: SymbolGeneratorComponent;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  public ngAfterViewInit() {
    this.generateDownloadUrl();
  }

  public onDropDownChange(value: string) {
    this.symbolGenerator.drawSymbol(value);
    this.generateDownloadUrl();
  }

  private generateDownloadUrl() {
    // provide correct url for download
    const svgElement = this.symbolGenerator.svgElement;    
    //get svg source
    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svgElement);
    //add name spaces.
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
      source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
      source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }
    //add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    //convert svg source to URI data scheme.
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    const linkElement = this.element.nativeElement.querySelector('#link');
    this.renderer.setAttribute(linkElement, 'href', url);
  }

}
