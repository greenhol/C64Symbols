import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { D3Service } from 'd3-ng2-service';
import { AppComponent } from './app.component';
import { SymbolGeneratorComponent } from './symbol-generator/symbol-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    SymbolGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
