import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OlvyWidgetComponent  } from '../../../olvyhq/widget-angular/src/lib/widget-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    OlvyWidgetComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
