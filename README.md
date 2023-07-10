# @olvyhq/widget-angular

This angular component allows you to easily include Olvy widgets in your Angular applications. The component takes care of all the necessary set up and configuration, allowing you to simply specify which Olvy widget you want to use and any relevant options. 


![Logo](https://olvy-development.s3.amazonaws.com/public_images/olvy-angular.png)

## Demo

https://codesandbox.io/s/olvy-widget-angular-qf2fvd

## Installation

Install @olvyhq/widget-angular with npm

```bash
  npm install @olvyhq/widget-angular
```
Check the [NPM package](https://www.npmjs.com/package/@olvyhq/widget-angular)

---

## Usage/Examples



```javascript
import { WidgetAngularComponent } from '@olvyhq/widget-angular';
@NgModule({
  ....

  imports: [
    WidgetAngularComponent
  ],

  ....
 
})
```
#### How to use 

```javascript
  <olvy-widget [config]="<Configuration>">
    <div "<css-selector>" ></div>
  </olvy-widget>

//Replace "<css-selector>" with the selector you configured on Olvy for target element and <Configuration> with your configuration

```

#### Example

```javascript
<olvy-widget [config]="appConfig">
    <div id="olvy-whats-new">Announcement Widget</div>
  </olvy-widget>
  //here appConfig has the configuration and #olvy-whats-new is the target element
```

#### Configuration
```javascript
appConfig={
    workspaceAlias: "olvysdktest"
  }
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Optional**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |



## Methods

#### Fetch olvy Utils

```javascript
let OlvyUtils = await OlvyWidgetComponent.getOlvyUtils()
```
#### To show widget

```javascript
OlvyUtils.showWidget(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To hide widget

```javascript
OlvyUtils.hideWidget(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To set user

```javascript
OlvyUtils.setUser(workspaceAlias, userObject) 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `userObject` | `object` | **Required**.  |

#### To set feedback meta info

```javascript
OlvyUtils.setFeedbackMetaInfo (workspaceAlias, metaInfo)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `metaInfo` | `object` | **Required**. |

#### To refresh unread count

```javascript
OlvyUtils.refreshUnreadCount(workspaceAlias,widgetAliasOrID) 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To show unread releases count

```javascript
OlvyUtils.getUnreadReleasesCount(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To remove unread indicator element

```javascript
OlvyUtils.removeUnreadIndicatorElement(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To add unread indicator element

```javascript
OlvyUtils.addUnreadIndicatorElement(workspaceAlias,widgetAliasOrID, count) 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To get last opened timestamp

```javascript
OlvyUtils.getLastOpenedTimestamp(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To refresh the widget

```javascript
OlvyUtils.refresh(workspaceAlias,widgetAliasOrID)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To teardown the widget

```javascript
OlvyUtils.teardown(workspaceAlias,widgetAliasOrID)
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `widgetAliasOrID` | `string` | **Required**. widget Id or alias ( you can find it on widget details page in olvy dashbaord ) |

#### To create feedback

```javascript
OlvyUtils.createFeedback(workspaceAlias,params)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `workspaceAlias` | `string` | **Required**. Your subdomain |
| `params` | `object` | **Required**.  |



## Tests

```bash
 npx jest
```
