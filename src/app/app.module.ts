import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DinosaurComponent } from './dinosaur/dinosaur.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosaurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
