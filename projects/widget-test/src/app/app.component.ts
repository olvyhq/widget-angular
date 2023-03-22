import { Component } from '@angular/core';
import { OlvyWidgetComponent  } from 'projects/olvyhq/widget-angular/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'widget-test';
  appConfig={
    workspaceAlias: "olvysdktest"
  }
  olvyUtils:any
  
  async ngOnInit() {
  }
  async openWidget(){
    this.olvyUtils=await OlvyWidgetComponent.getOlvyUtils()
    this.olvyUtils.showWidget("olvysdktest","stupefied_buck_CMnyh")
  }

  
 
}
