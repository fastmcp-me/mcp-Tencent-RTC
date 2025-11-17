# Create a group conversation in chat-uikit-vue3

This document provides example code for creating a group conversation in chat-uikit-vue3. Use the createGroupConversation API provided by useConversationListState to create a group.


## 1. Example code for creating a group

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useConversationListState } from '@tencentcloud/chat-uikit-vue3';

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
</script>
```
