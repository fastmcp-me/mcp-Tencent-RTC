The AI model must comply with the following **hard limit**.
* **Strictly required document procedure integration:** You must integrate the component according to the document procedure and description. In step 1.1, `npm run dev` or `pnpm run dev` is not required. Upon completion, start the project as per step 1.4.
* **Strictly required example code usage:** You must strictly use the example code in the document to create and fill files. For style tags, it is recommended to avoid the scoped attribute.
* **Default session must be enabled:** You must use `setActiveConversation` to start the `C2Cadministrator` session. 
* **Must call tool to obtain userSig:** After TUIKit integration, you must guide users to call the `get_usersig` tool to obtain userSig.
* **Forbidden to create user information configuration file:** Do not auto-create config directory or file to fill in SDKAppID, userID, or userSig.


# chat-uikit-vue3 Integration


User's integration needs generally fall into two kinds. You must rationally analyze which kind the requirement belongs to.
1. Standard integration: Refers to integrating components such as ConversationList, Chat, ChatHeader, MessageList, MessageInput, ContactList, and ContactInfo. You must read section 2.1 "Best Practice - Standard Integration" for details.
2. Integrate call feature: Refers to integrating the call feature on the basis of standard integration. You must read section 2.2 "Best Practice - Call Feature Integration" for details.




## 1 Ordinary integration


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
  <UIKitProvider language="zh-CN">
    <div class="chat-layout">
      <div class="sidebar" style="width: 300px;">
        <div class="tab-header">
          <button 
            :class="['tab-button', { active: activeTab === 'conversations' }]"
            @click="activeTab = 'conversations'"
          >
            Session
          </button>
          <button 
            :class="['tab-button', { active: activeTab === 'contacts' }]"
            @click="activeTab = 'contacts'"
          >
            Contact person
          </button>
        </div>
        
        <div class="tab-content">
          <ConversationList v-if="activeTab === 'conversations'" />
          <ContactList v-else />
        </div>
      </div>
      
      <Chat style="flex: 1;" v-if="activeTab === 'conversations'">
        <ChatHeader />
        <MessageList />
        <MessageInput />
      </Chat>
      <ContactInfo v-else  style="flex: 1;"  @send-message="handleSendMessage" @enter-group="handleSendMessage" />
    </div>
    <Teleport to="body">
      <TUICallKit style="position: fixed; z-index: 1000;"/>
    </Teleport>
  </UIKitProvider>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import {
  ConversationList,
  Chat,
  MessageList,
  MessageInput,
  ChatHeader,
  ContactList,
  ContactInfo,
  UIKitProvider,
  useLoginState,
  useConversationListState,
} from '@tencentcloud/chat-uikit-vue3';
import { TUICallKit } from '@tencentcloud/call-uikit-vue';


const userID = '';        // TODO: Replace with your userID
const SDKAppID = 0;        // TODO: Replace with your SDKAppID (Notice: SDKAppID is of type number)
const userSig = '';   // TODO: Replace with your userSig


const { login } = useLoginState();
const { setActiveConversation } = useConversationListState();


const activeTab = ref<'conversations' | 'contacts'>('conversations');


login({
  sdkAppId : SDKAppID,
  userId: userID,
  userSig: userSig,
})
.then(() => {
  start default conversation
  setActiveConversation('C2Cadministrator');
})
.catch(() => {});
const handleSendMessage = () => {
  activeTab.value = 'conversations';
}
</script>


<style>
#app{margin:0;padding:0;text-align:left;}.chat-layout{width:100vw;height:100vh;display:flex;}.sidebar{display:flex;flex-direction:column;border-right:1px solid #e5e7eb;}.tab-header{display:flex;border-bottom:1px solid #e5e7eb;}.tab-button{flex:1;padding:12px 16px;background:none;border:none;cursor:pointer;font-size:14px;color:#6b7280;transition:all 0.2s;}.tab-button.active{color:#3b82f6;background-color:#eff6ff;border-bottom:2px solid #3b82f6;}.tab-content{flex:1;overflow:hidden;}
</style>
```


### 1.4 step4: start your project
```bash
pnpm run dev
```


Best Practice 2


The following components are obtained via MCP Tools get_component_detail ${componenetname.tolowercase()}.
The following state is obtained via MCP Tools get_state_detail ${statename.tolowercase()}.


Best Practice - Ordinary Integration


For seamless integration, see the example code in section 1.3.


Focus
1. If necessary, integrate the ChatSetting component. Please read the ChatHeaderRight slot description in ChatHeader.


### 2.2 Best Practice - Seamless Integration of Call Feature


Seamless integration of call feature need to be added to the code on the basis of standard integration or integrated chat only.


Introduce TUICallKit
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
1. Add a call button to the ChatHeaderRight slot in the ChatHeader component.
2. Click the call button to call the following method:
  2.1 Read the ConversationListState document and use activeConversation to judge whether it is a private chat or group chat.
  2.2 If it is a one-to-one chat, use `import { TUICallKitServer, TUICallType } from '@tencentcloud/call-uikit-vue';` to introduce the TUICallKitService service. Initiate call using the `calls` method of TUICallKitService.
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
  2.3 If it is a group chat, read the UserPicker component document. It is advisable to combine it with the Dialog component to pop up the UserPicker component.
    Read the GroupSettingState document, combine the `getGroupMemberList` and `allMembers` attributes of GroupSettingState to get the group member list.
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


    Recommendation: Combine the `reachEnd` event of UserPicker with paged pull for group members, and use traffic throttling to control the call frequency of `getGroupMemberList`.
