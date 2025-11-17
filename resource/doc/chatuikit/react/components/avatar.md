# Avatar Component Document


## Overview


The Avatar component displays user avatars and status, supporting avatars in various shapes and sizes. It can be used for chat applications, social media platforms, user management systems, and other scenarios to provide a visual representation of user identity.


## Props Quick Reference Table


| Field | Type | Default | Description |
| --- | --- | --- | --- |
| src | string | undefined | URL of the profile image |
| size | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | number | 'md' | Avatar size, support various preset sizes or custom size |
| shape | 'circular' | 'square' | 'rounded' | 'circular' | Avatar shape, support circular, square and rounded rectangle |
| alt | string | '' | Alternative text for the image, used to generate text avatar |
| children | ReactNode | undefined | Custom content, takes precedence over src and alt content |
| className | string | undefined | Custom CSS class name |
| style | React.CSSProperties | undefined | Custom style |
| onClick | () => void | undefined | Click event handler |
| isShowOnlineStatus | boolean | false | Whether to display online status indicator |
| isOnline | boolean | false | Whether the user is online |
| unreadCount | number | 0 | Unread message count. Displays a red dot if true, or the actual quantity if a number |
| maxUnreadCount | number | 99 | Maximum unread message count, displays +N if exceeded |
| isDotUnreadCount | boolean | false | Whether to display a red dot |
| children | ReactNode | undefined | Custom content, takes precedence over src and alt content |




## Props Detailed Introduction


### `src`


Type: string
`Description`: URL of the avatar image. If not provided, the default avatar will be displayed.
`Default`: `undefined`


### `size`


`Type`: `'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | number`
`Description`: Avatar size, support various preset sizes or custom size.
`Default`: `'md'`


### `shape`


`Type`: `'circular' | 'square' | 'rounded'`
`Description`: Avatar shape, support circular, square and rounded rectangle.
`Default`: `'circular'`


### `alt`


Type: string
`Description`: Alternative text for images, used for generating text avatars.
`Default`: `''`


### `children`


`Type`: `ReactNode`
`Description`: Custom content, which takes precedence over the content of src and alt.
`Default`: `undefined`


### `className`


`Type`: `string | undefined`
`Description`: Custom CSS class name.
`Default`: `undefined`


### `style`


`Type`: `React.CSSProperties | undefined`
`Description`: Custom style.
`Default`: `undefined`


### `onClick`


`Type`: `() => void`
`Description`: Click event handler.
`Default`: `undefined`


### `isShowOnlineStatus`


`Type`: `boolean`
`Description`: Whether to display online status indicator.
`Default`: `false`


### `isOnline`


`Type`: `boolean`
`Description`: Whether the user is online.
`Default`: `false`


### `unreadCount`


`Type`: `number`
`Description`: Unread message count. Displays a red dot if true, or the actual quantity if a number.
`Default`: `0`


### `maxUnreadCount`


`Type`: `number`
`Description`: Maximum unread message count, displays +N if exceeded.
`Default`: `99`


### isDotUnreadCount


`Type`: `boolean`
`Description`: Whether to display the red dot.
`Default`: `false`
