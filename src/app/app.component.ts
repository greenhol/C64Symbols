import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SymbolGeneratorComponent } from './symbol-generator/symbol-generator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  @ViewChild(SymbolGeneratorComponent)
  private symbolGenerator: SymbolGeneratorComponent;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  public ngOnInit() {
    this.generateDownloadUrl();
  }

  public next(): void {
    this.symbolGenerator.next(); 
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
