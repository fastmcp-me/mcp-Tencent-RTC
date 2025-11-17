## Overview


UserPicker is a powerful selector component that supports two display modes: list and tree. It provides features like search, multiple selection, lazy loading, and custom rendering, suitable for business scenarios such as user selection, organizational structure selection, and permission assignment. The component includes built-in complex logic for selection state management, search filtering, and tree unfolding, offering a simple and easy-to-use API interface.


## Props quick reference table


| Field | Type | Default | Description |
| -------------------- | -------------------------------------------- | -------------------------- | ----------- |
| displayMode | `'list' \| 'tree'` | required | Display mode, list or tree |
| dataSource | `UserPickerDataSource<T>` | `[]` | Data source |
| defaultSelectedItems | `Array<{ key: string; [key: string]: any }>` | `[]` | Items selected by default |
| lockedItems | `Array<{ key: string; [key: string]: any }>` | `[]` | Locked items (cannot be canceled) |
| maxCount | `number` | `Number.POSITIVE_INFINITY` | Maximum select quantity |
| minCount | `number` | `0` | Minimum select quantity |
| enableSearch | `boolean` | `true` | Whether to enable search functionality |
| searchPlaceholder | `string` | `undefined` | Search box placeholder |
| renderItem | `Function` | `undefined` | Custom render function |
| onSelectedChange | `Function` | `undefined` | Change callback for selection |
| onMaxCountExceed | `Function` | `undefined` | Callback when maximum number is exceeded |
| onSearch | `Function` | `undefined` | Search callback |
| onReachEnd | `Function` | `undefined` | Callback when scrolling to the bottom in list mode |
| onExpand | `Function` | `undefined` | Expand callback in tree mode |


## Ref expose method quick reference table


| Method | Parameter | Return | Description |
| -------- | ---- | ---- | ---- |
| getSelectedItems | None | UserPickerResult<T> | Get the currently selected items |
| updateTreeData | nodeKey: string, partialNode: Partial<UserPickerNode<T>> | void | Update tree mode node data |


## Props detailed introduction


### displayMode


-`'list' | 'tree'`
- `description`: The display mode of the component. `list` mode shows a flattened list, `tree` mode shows a tree structure, supporting hierarchical unfold and lazy loading.


### dataSource


- `Type`: `UserPickerDataSource<T>`
- `description`: The data source of the component, which accepts different data structures based on displayMode. Default: `[]`.


```typescript
Data structure in list mode
interface UserPickerRow<T = unknown> {
  key: string;           // unique identifier
  label: string;         // display name
  avatarUrl?: string;    // avatar URL
  extraData?: T;         // extension data
}


Data structure in tree mode
interface UserPickerNode<T = unknown> {
  key: string;                        // unique identifier
  label: string;                      // display name
  isLeafNode: boolean;                // is leaf node
  avatarUrl?: string;                 // avatar URL
  lazyLoad?: boolean;                 // whether lazy loading is supported
  children?: Array<UserPickerNode<T>>; // sub-node
  extraData?: T;                      // extension data
}


export type UserPickerDataSource<T = unknown> = Array<UserPickerRow<T>> | Array<UserPickerNode<T>>;
```


#### Example 1: Data source in list mode


```vue
<template>
  <UserPicker
    display-mode="list"
    :data-source="listData"
    @selected-change="handleSelectionChange"
  />
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { UserPicker } from 'tuikit-atomicx-vue3';
import type { UserPickerRow } from 'tuikit-atomicx-vue3/types';


User list data
const listData = ref<UserPickerRow[]>([
  {
    key: 'user1',
    label: 'Zhang San',
    avatarUrl: 'https://example.com/avatar1.jpg',
    extraData: { department: 'Technology Department', role: 'frontend engineer' }
  },
  {
    key: 'user2', 
    label: 'Li Si',
    avatarUrl: 'https://example.com/avatar2.jpg',
    extraData: { department: 'Product Department', role: 'product manager' }
  }
]);


const handleSelectionChange = (selectedItems: any[]) => {
  console.log('Selected user:', selectedItems);
};
</script>
```


### defaultSelectedItems


- `type`: `Array<{ key: string; [key: string]: any }>`
- `description`: Project list chosen by default, identified by the key field. Default is `[]`.


### lockedItems


- `type`: `Array<{ key: string; [key: string]: any }>`
- `description`: Locked project list, these projects will be forcibly selected and users are unable to cancel. Default is `[]`.


### maxCount


- `type`: `number`
- `description`: Maximum number limit allowed. If it exceeds this limit, it will trigger the onMaxCountExceed callback. Default is `Number.POSITIVE_INFINITY`.


### minCount


- `type`: `number`
- `description`: Minimum number required for form validation. Default value is `0`.


### enableSearch


- `type`: `boolean`
- `description`: Whether to enable search functionality. If enabled, the search bar will be displayed. Default is `true`.


### searchPlaceholder


- `type`: `string`
- `description`: Placeholder text for the search bar. If not set, use default internationalization text. Default is `undefined`.


### renderItem


- `Type`: `(data: UserPickerRow<T> | UserPickerNode<T>) => any`
- `description`: Custom project render function. Can customize the display content and style of each option. Default is `undefined`.


```typescript
type RenderItemFunction<T> = (data: UserPickerRow<T> | UserPickerNode<T>) => VNode | string;
```


Custom render function


```vue
<template>
  <UserPicker
    display-mode="list"
    :data-source="userData"
    :render-item="customRenderItem"
  />
</template>


<script setup lang="ts">
import { h } from 'vue';
import { UserPicker } from 'tuikit-atomicx-vue3';
import type { UserPickerRow } from 'tuikit-atomicx-vue3/types';


const userData = ref<UserPickerRow[]>([
  {
    key: 'user1',
    label: 'Zhang San',
    extraData: { status: 'online', department: 'Technology Department' }
  }
]);


custom render function, display user status and department information
const customRenderItem = (data: UserPickerRow) => {
  return h('div', { class: 'custom-user-item' }, [
    h('div', { class: 'user-name' }, data.label),
    h('div', { class: 'user-info' }, [
      h('span', { 
        class: `status ${data.extraData?.status}` 
      }, data.extraData?.status === 'online' ? 'online' : 'offline'),
      h('span', { class: 'department' }, data.extraData?.department)
    ])
  ]);
};
</script>
```


### onSelectedChange


- `Type`: `(selectedItems: UserPickerResult<T>) => void`
-description: Select the callback function when the state changes. It will input all currently selected items. The default is undefined. Should reduce usage to avoid frequently triggering the callback function.


```typescript
interface UserPickerResultItem<T = unknown> {
  key: string;
  label: string;
  avatarUrl?: string;
  isLeafNode?: boolean;    // Only meaningful in tree mode
  extraData?: T;
  path?: string[];         // Only meaningful in tree mode, records the node path
}


type UserPickerResult<T = unknown> = Array<UserPickerResultItem<T>>;
```


### onMaxCountExceed


- `Type`: `(selectedItems: UserPickerResult<T>) => void`
- `description`: Callback function triggered when the selected quantity exceeds the maxCount limit. Default is `undefined`.


### onSearch


- `Type`: `(value: string) => void`
- `description`: Callback function triggered when the search input changes. It can be used to implement server-side search. Default is `undefined`.


### onReachEnd


- `Type`: `() => void`
- `description`: Callback function triggered when scrolling to the bottom in list mode. It is often used to implement load by page. Default is `undefined`.


### onExpand


- `Type`: `(node: UserPickerNode<T>) => void`
- `description`: Callback function triggered when a node unfolds in tree mode. It is used to implement lazy loading of sub-nodes. Default is `undefined`.


## Ref Expose method detailed introduction


### getSelectedItems


- `Type`: `() => UserPickerResult<T>`
- `description`: As a best practice to confirm after completing the selection.


```typescript
interface UserPickerResultItem<T = unknown> {
  key: string;
  label: string;
  avatarUrl?: string;
  isLeafNode?: boolean;    // Only meaningful in tree mode
  extraData?: T;
  path?: string[];         // Only meaningful in tree mode, records the node path
}


type UserPickerResult<T = unknown> = Array<UserPickerResultItem<T>>;
```


Confirm and retrieve the selected item after completing the selection


```vue
<template>
  <UserPicker
    ref="userPickerRef"
    display-mode="list"
    :data-source="userData"
  />
</template>


<script setup lang="ts">
const userPickerRef = useRef();


function onConfirm() {
  userPickerRef.value.getSelectedItems();
}
