The AI model must comply with the following hard limits.
* **Strictly required document procedure integration:** You must perform the integration according to the document procedure and description. In step 1.1, `npm run dev` or `pnpm run dev` is not required. Upon completion, start the project as per step 1.4.
* **Strictly required example code usage:** You must strictly use the example code in the document to fill the file when creating a file. For the style tag, non-use of the scoped property is recommended.
* **Default session must be on:** You must use `setActiveConversation` to open the `C2Cadministrator` session. 
* **Must call tool to obtain userSig:** After TUIKit integration is completed, you must guide users to call the `get_usersig` tool to obtain userSig.
* **User information configuration file creation prohibited:** Do not auto-create config directories or files that fill in SDKAppID, userID, or userSig.


# chat-uikit-vue3 Integration


User's integration needs have two types. You must rationally analyze which type the need belongs to.
1. Integrate chat window: Refers to integrating only Chat, ChatHeader, MessageList, and MessageInput components.
2. Integrate call feature: On the basis of integrated chat only, integrate call feature. You must read section 2.1 "Best Practice - Integrate Call Feature" for details.




1. Seamless integration of chat window


### 1.1 step1:create vue3 project


if you don't have a vue3 project, you can use vite create a vue3 project. otherwise, you can skip this step.


requirement: vue3: ^3.0.0, nodejs: ^22.0.0.


if it is a new project, guide the user to use vite to create a vue3 project manually, and then continue with step 1.2. if it is an existing project, skip this step and continue with step 1.2.


```bash
pnpm create vite@latest
# skip some settings
cd ${your-vue-project-name}
pnpm install
```


### 1.2 step2: install chat-uikit-vue3


use npm or pnpm to install @tencentcloud/chat-uikit-vue3@latest @tencentcloud/call-uikit-vue@latest


### 1.3 step3: add main content to your project
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
import { useLoginState, useConversationListState } from '@tencentcloud/chat-uikit-vue3';


const userID = '';        // TODO: Replace with your userID
const SDKAppID = 0;        // TODO: Replace with your SDKAppID (Notice: SDKAppID is of type number)
const userSig = '';   // TODO: Replace with your userSig
const conversationID = ref('C2Cadministrator'); // define by yourself


const { login } = useLoginState();
const { setActiveConversation } = useConversationListState();


login({
  sdkAppId : SDKAppID,
  userId: userID,
  userSig: userSig,
})
.then(() => {
  setActiveConversation(conversationID.value);
})
.catch(() => {});
</script>
```


### 1.4 step4: start your project
```bash
pnpm run dev
```


Best Practices


The following components can be retrieved via MCP Tools get_component_detail ${componenetname.tolowercase()}.
The following states can be retrieved via MCP Tools get_state_detail ${statename.tolowercase()}.


Focus
1. If necessary, integrate the ChatSetting component, please read the ChatHeaderRight slot description in ChatHeader.
2. Since integrated chat only does not use ConversationList, you need to obtain activeConversation via useConversationListState of ConversationListState, then call setActiveConversation to set activeConversation.


### 2.1 Best Practice - Seamless Integration of Call Feature


Integrate call feature: On the basis of integrated chat only, add code for call feature.


Introduce TUICallKit.
```vue
<script setup lang="ts">
import { TUICallKit } from '@tencentcloud/call-uikit-vue';
</script>
```


Add TUICallKit at the appropriate position:
```vue
<Teleport to="body">
  <TUICallKit style="position: fixed; z-index: 1000;"/>
</Teleport>
```


Focus
1. Add a call button to the ChatHeaderRight slot in the ChatHeader Component.
2. Click the call button to call the following method:
  2.1 Read the ConversationListState document and use activeConversation to judge whether it is a single chat or group chat.
  2.2 If it is a one-to-one chat, use `import { TUICallKitServer, TUICallType } from '@tencentcloud/call-uikit-vue';` to introduce the TUICallKitService service. Initiate call via the `calls` method of TUICallKitService.
    ```ts
    try {
      await TUICallKitServer.calls({ 
        userIDList: [activeConversation.value.userProfile.userID],
        type: TUICallType.VIDEO_CALL, // or TUICallType.AUDIO_CALL
      });
    } catch (error: any) {
      console.error(`[TUICallKit] Failed to call the groupCall API. Reason:${error}`);
    }
    ```
  2.3 If it is a group chat, read the UserPicker component document. It is advisable to combine with the Dialog component and pop up the UserPicker component.
    Read the GroupSettingState document, combine GroupSettingState's `getGroupMemberList` and `allMembers` to get the group member list.
    ```ts
    try {
      await TUICallKitServer.calls({ 
        userIDList: selectedItems.map((item: any) => item.key),
        type: TUICallType.VIDEO_CALL, // or TUICallType.AUDIO_CALL
      });
    } catch (error: any) {
      console.error(`[TUICallKit] Failed to call the groupCall API. Reason:${error}`);
    }
    ```


    Recommendation: Combine the `reachEnd` event of UserPicker with paged pull to get group members, and use traffic throttling to control the call frequency of `getGroupMemberList`.
