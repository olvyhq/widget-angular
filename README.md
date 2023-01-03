# widget-angular

## Project setup

npm install @olvyhq/widget-angular

### Getting Started
```
Import 

import { WidgetAngularComponent } from '@olvyhq/widget-angular';
@NgModule({
  ....

  imports: [
    WidgetAngularComponent
  ],

  ....
 
})
```


### How to use in your component
```
  <widget-angular [config]="<Configuration>">
    <div id="<Target-Element-Id>">test angular</div>
  </widget-angular>

Replace <Target-Element-Id> with your target element id and <Configuration> with your desired configuration
```
### Example
```
 <widget-angular [config]="appConfig">
    <div id="olvy-whats-new">Announcement Widget</div>
  </widget-angular>
    </OlvyWidget>
```
//on component.ts

appConfig={
    workspaceAlias: "olvysdktest"
  }




### Customize configuration
```
{
    widgetId:"",   // (optional)
    workspaceAlias:""  //(required)
}
```
