
# chat-uikit-vue3 init


This article provides sample code for initializing login and opening the default session in chat-uikit-vue3:

1. Drive component login using the `login` API provided by `useLoginState`.

2. Open the default session using the `setActiveConversation` API provided by `useConversationListState`.


## Login and initialization example code

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { useLoginState, useConversationListState } from '@tencentcloud/chat-uikit-vue3';

const userID = '';        // TODO: Replace with your userID
const SDKAppID = 0;        // TODO: Replace with your SDKAppID (Notice: SDKAppID is of type number）
const userSig = '';   // TODO: Replace with your userSig

const { login } = useLoginState();
const { setActiveConversation } = useConversationListState();

login({
  sdkAppId : SDKAppID,
  userId: userID,
  userSig: userSig,
})
.then(() => {
  // open default conversation
  setActiveConversation('C2Cadministrator');
})

.catch(() => {});

</script>

```