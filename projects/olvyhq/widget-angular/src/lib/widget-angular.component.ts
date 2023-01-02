import { Component,Input } from '@angular/core';

@Component({
  selector: 'widget-angular',
  template: `
  <div>
  <ng-content></ng-content>
  </div>
  `,
  styles: [
  ]
})
export class WidgetAngularComponent {
  @Input() config:any;
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
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
}