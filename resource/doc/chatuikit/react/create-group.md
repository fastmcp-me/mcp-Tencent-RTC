# Create a group conversation  in chat-uikit-react

This document provides example code for creating a group session in chat-uikit-react. Use the createGroupConversation API provided by useConversationListState to create a group.

## 1. Create group example code

```tsx
import { useConversationListState } from '@tencentcloud/chat-uikit-react';


const {
  createGroupConversation,
  setActiveConversation,
} = useConversationListState();


createGroupConversation({
  name: `group-${Math.random()}`,
  type: 'Public',
}).then((conversation) => {
  setActiveConversation(conversation.conversationID);
});
```