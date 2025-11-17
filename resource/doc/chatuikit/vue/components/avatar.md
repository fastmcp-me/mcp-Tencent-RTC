# Avatar Component Documentation


## Overview


The Avatar component displays user avatars and status, supporting various shapes and sizes. It can be used for chat applications, social platforms, user management systems, and other scenarios to visualize user identity.


## Props Quick Reference Table


| Field | Type | Default Value | Description |
| --- | --- | --- | --- |
| src | string | undefined | URL of the profile image |
| size | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | number | 'md' | Avatar size, support various preset sizes or custom size |
| shape | 'circular' | 'square' | 'rounded' | 'circular' | Avatar shape, support circle, square and rounded rectangle |
| alt | string | '' | Alternative text for the image, used to generate text avatar |
| children | ReactNode | undefined | Custom content, takes precedence over src and alt content |
| className | string | undefined | Custom CSS class name |
| style | React.CSSProperties | undefined | Custom style |
| onClick | () => void | undefined | Click event handler |
| isShowOnlineStatus | boolean | false | Whether to display the online status indicator |
| isOnline | boolean | false | Whether the user is online |
| unreadCount | number | 0 | Unread message count. Shows a red dot if true, or the actual quantity if a number |
| maxUnreadCount | number | 99 | Maximum unread message count. Displays +N if exceeding |
| isDotUnreadCount | boolean | false | Whether to display a red dot |
| children | ReactNode | undefined | Custom content, takes precedence over src and alt content |




## Props Detailed Introduction


### `src`


`type`: `string`
`description`: URL of the profile image. If not provided, the default avatar will be displayed.
`default`: `undefined`


### `size`


`type`: `'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | number`
`description`: Avatar size, support various preset sizes or custom size.
`default`: `'md'`


### `shape`


`type`: `'circular' | 'square' | 'rounded'`
`description`: Avatar shape, support circle, square and rounded rectangle.
`default`: `'circular'`


### `alt`


`type`: `string`
`description`: Alternative text for images, used to generate text avatars.
`default`: `''`


### `children`


`type`: `ReactNode`
`description`: Custom content, which takes precedence over the content of src and alt.
`default`: `undefined`


### `className`


`type`: `string | undefined`
`description`: Custom CSS class name.
`default`: `undefined`


### `style`


`type`: `React.CSSProperties | undefined`
`description`: Custom style.
`default`: `undefined`


### `onClick`


`type`: `() => void`
`description`: Click event handler.
`default`: `undefined`


### `isShowOnlineStatus`


`type`: `boolean`
`description`: Whether to display the online status indicator.
`default`: `false`


### `isOnline`


`type`: `boolean`
`description`: Whether the user is online.
`default`: `false`


### `unreadCount`


`type`: `number`
`description`: Unread message count. Shows a red dot if true, or the actual quantity if a number.
`default value`: `0`


### `maxUnreadCount`


`type`: `number`
`description`: Maximum unread message count. Displays +N if exceeding.
`default`: `99`


### isDotUnreadCount


`type`: `boolean`
`description`: Whether to display the red dot.
`default`: `false`
