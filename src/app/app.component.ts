import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SymbolGeneratorComponent } from './symbol-generator/symbol-generator.component';

interface SymbolElement {
  hex: string;
  key: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public symbolList: SymbolElement[] = [
    { hex: 'AB', key: 'Q (l)' },
    { hex: 'D1', key: 'Q (r)' },
    { hex: 'B3', key: 'W (l)' },
    { hex: 'D7', key: 'W (r)' },
    { hex: 'B1', key: 'E (l)' },
    { hex: 'C5', key: 'E (r)' },
    { hex: 'B2', key: 'R (l)' },
    { hex: 'D2', key: 'R (r)' },
    { hex: 'A3', key: 'T (l)' },
    { hex: 'D4', key: 'T (r)' },
    { hex: 'B7', key: 'Y (l)' },
    { hex: 'D9', key: 'Y (r)' },
    { hex: 'B8', key: 'U (l)' },
    { hex: 'D5', key: 'U (r)' },
    { hex: 'A2', key: 'I (l)' },
    { hex: 'C9', key: 'I (r)' },
    { hex: 'B9', key: 'O (l)' },
    { hex: 'CF', key: 'O (r)' },
    { hex: 'AF', key: 'P (l)' },
    { hex: 'D0', key: 'P (r)' },
    { hex: 'B0', key: 'A (l)' },
    { hex: 'C1', key: 'A (r)' },
    { hex: 'AE', key: 'S (l)' },
    { hex: 'D3', key: 'S (r)' },
    { hex: 'AC', key: 'D (l)' },
    { hex: 'C4', key: 'D (r)' },
    { hex: 'BB', key: 'F (l)' },
    { hex: 'C6', key: 'F (r)' },
    { hex: 'A5', key: 'G (l)' },
    { hex: 'C7', key: 'G (r)' },
    { hex: 'B4', key: 'H (l)' },
    { hex: 'C8', key: 'H (r)' },
    { hex: 'B5', key: 'J (l)' },
    { hex: 'CA', key: 'J (r)' },
    { hex: 'A1', key: 'K (l)' },
    { hex: 'CB', key: 'K (r)' },
    { hex: 'B6', key: 'L (l)' },
    { hex: 'CC', key: 'L (r)' },
    { hex: 'AD', key: 'Z (l)' },
    { hex: 'DA', key: 'Z (r)' },
    { hex: 'BD', key: 'X (l)' },
    { hex: 'D8', key: 'X (r)' },
    { hex: 'BC', key: 'C (l)' },
    { hex: 'C3', key: 'C (r)' },
    { hex: 'BE', key: 'V (l)' },
    { hex: 'D6', key: 'V (r)' },
    { hex: 'BF', key: 'B (l)' },
    { hex: 'C2', key: 'B (r)' },
    { hex: 'A7', key: 'N (l)' },
    { hex: 'CE', key: 'N (r)' },
    { hex: 'AA', key: 'M (l)' },
    { hex: 'CD', key: 'M (r)' },
    { hex: 'A6', key: '+ (l)' },
    { hex: 'DB', key: '+ (r)' },
    { hex: 'DC', key: '- (l)' },
    { hex: 'DD', key: '- (r)' },
    { hex: 'A4', key: '@ (l)' },
    { hex: 'BA', key: '@ (r)' },
    { hex: 'DF', key: '* (l)' },
    { hex: 'C0', key: '* (r)' },
    { hex: 'A8', key: '£ (l)' },
    { hex: 'A9', key: '£ (r)' }
  ];
  public symbol = this.symbolList[0];

  @ViewChild(SymbolGeneratorComponent)
  private symbolGenerator: SymbolGeneratorComponent;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  public ngAfterViewInit() {
    this.generateDownloadUrl();
  }

  public onDropDownChange(value: SymbolElement) {
    this.symbolGenerator.drawSymbol(value.hex);
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
