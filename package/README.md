# @magicdidac/icos

Package to upload images to ICOS and dialog made with MUI.

## Install

With npm
```sh
npm i @magicdidac/icos
```

With yarn
```sh
yarn add @magicdidac/icos
```

## Examples

These are some examples of the four types of notification.

![screenshoot]


## How to use

### NotificationProvider

`index.tsx`
```js
import {NotificationProvider} from '@magicdidac/icos'
...
<React.StrictMode>
  <NotificationProvider>
    <App />
  </NotificationProvider>
</React.StrictMode>
...
```

#### Properties

| Property  | Description                                                   | Default          | Values                                                |
|-----------|---------------------------------------------------------------|------------------|-------------------------------------------------------|
| positionX | The horizontal position where the notifications will be shown | PositionX.right  | PositionX.left \| PositionX.center \| PositionX.right |
| postionY  | The vertical position where the notifications will be shown   | PositionY.bottom | PositionY.top \| PositionY.bottom                     |
| width     | The width of the notifications                                | 400px            | string                                                |

### useNotifications

This is a hook to invoke notifications

```js
import { useNotifications } from '@magicdidac/notification'
...
const notifications = useNotifications()
...
return (
 <button onClick={() => notifications.success("Working!")}>Click Me!</button>
)
...
```

#### Functions

Every function has the same parameters
| Parameter         | Description                                                        | Optional | Default |
|-------------------|--------------------------------------------------------------------|----------|---------|
| message           | The message to show                                                |    No    |         |
| options.autoClose | Set to true to close the notification automatically over 5 seconds |    Yes   | true    |

These are all the functions

[screenshoot]: images/screenshoot.png