import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
import { ScriptLoaderService } from './script-loader.service'
//@ts-ignore
declare global {
  interface Window {
    OlvyUtils: any;
    OlvyConfig :any
  }
}
@Component({
  selector: 'olvy-widget',
  standalone: true,
  template: `
  <div>
  <ng-content></ng-content>
  </div>
  `,
  styles: [
  ]
})
export class OlvyWidgetComponent implements OnInit {
  @Input() config:any; 
  @Output() initialized = new EventEmitter<void>();
  static OlvyUtils:any;
  constructor(private scriptLoaderService: ScriptLoaderService) {}


 async ngOnInit() {
    try {
      // Wait for the utils object to be loaded
   OlvyWidgetComponent.OlvyUtils = await this.scriptLoaderService.getUtils();
   window.OlvyConfig=this.config
    } catch (error) {
      console.error(error);
    }
  }
 // to fetch olvy utils from the script
  static async getOlvyUtils() {
    
    try {
      const scriptLoadedService = new ScriptLoaderService()
       // Wait for the utils object to be loaded
      const utils = await  scriptLoadedService.getUtils();
      return utils
    } catch (error) {
      console.error(error);
    }
  }
}




