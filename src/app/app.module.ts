import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcularpresionComponent } from './calcularpresion/calcularpresion.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcularpresionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
