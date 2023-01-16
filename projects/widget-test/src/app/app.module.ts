import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetAngularComponent } from '@olvyhq/widget-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetAngularComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
