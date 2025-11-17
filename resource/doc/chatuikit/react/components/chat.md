# Chat component document

## Overview

The chat component is responsible for rendering the chat interface, including the chat window header component ChatHeader, the message list component MessageList, and the message input component MessageInput.


## Component composition


The Chat component includes the following content:
-**ChatHeader**: Chat window header component


- **MessageList**: Message list component. The message list component includes message operation capabilities. For detailed properties, read the MessageList component document.


- **MessageInput**: Message input component


## Basic Usage


Chat components can be used without any required attributes.
``` typescript
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
} from '@tencentcloud/chat-uikit-react';
</script>
```
