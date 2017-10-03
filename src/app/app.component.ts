import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { C64Symbol } from './data/types';
import { symbols } from './data/symbols';
import { SymbolGeneratorComponent } from './symbol-generator/symbol-generator.component';

interface SymbolElement {
  id: string;
  displayName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public symbolList: SymbolElement[] = [
    { id: '', displayName: 'All' }
  ];
  public symbol = this.symbolList[0];

  @ViewChild(SymbolGeneratorComponent)
  private symbolGenerator: SymbolGeneratorComponent;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    symbols.forEach((value: C64Symbol, key: string) => {
      this.symbolList.push({
        id: key,
        displayName: value.displayName
      });
    });
  }

  public ngAfterViewInit() {
    this.onDropDownChange(this.symbol);
  }

  public onDropDownChange(value: SymbolElement) {
    this.symbolGenerator.drawSymbol(value.id);
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
