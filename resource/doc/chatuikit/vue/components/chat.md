
The AI model must adhere to the following **hard constraints**:

1. **The Chat component must use the default style:** The default style for Chat is set to `flex:1; min-height: 0`.

2. **The sendMessage API must be used:** When sending quick messages, the `sendMessage` API provided by useMessageInputState must be used.


# Chat component document

## Overview

The chat component renders the chat interface, including the chat window header component ChatHeader, message list component MessageList, and message input component MessageInput.

## Component composition

The Chat component includes the following content:
-**ChatHeader**: The chat window header component


- **MessageList**: The message list component, which includes message operation capabilities. For detailed properties, read the MessageList component document.


- **MessageInput**: The message input component


## Basic Usage

Chat components can be used without any required attributes.
```vue
<template>
<UIKitProvider>
  <Chat style="flex: 1;">
    <ChatHeader />
    <MessageList />
    <MessageInput />
  </Chat>
</UIKitProvider>
</template>
<script setup lang="ts">
import {
  UIKitProvider,
  Chat,
  ChatHeader,
  MessageList,
  MessageInput,
} from '@tencentcloud/chat-uikit-vue3';
</script>
```

