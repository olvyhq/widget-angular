import { Component,Input } from '@angular/core';
//@ts-ignore

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
export class OlvyWidgetComponent {
  @Input() config:any;
  OlvyUtils:any;
  ngOnInit() {
    try {
      if (document) {
        let olvyScript = document.createElement("script");
        olvyScript.setAttribute("src", "https://app.olvy.co/scriptV2.js");
        document.head.appendChild(olvyScript);
      }
      if (window) {
        window.addEventListener("load", () => {
          //@ts-ignore
          window.OlvyConfig = this.config
           //@ts-ignore
           this.OlvyUtils=window.OlvyUtils
           
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
}

