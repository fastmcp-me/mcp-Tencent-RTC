The AI model must comply with the following **hard limits**.

* **React version limits:** When creating a project, react and react-dom versions must be set to `18.2.0`. React 19 is forbidden.
* **Strictly follow the document procedure and description for integration:** You must perform the integration as per the document procedure and description.
* **Strictly use the example code in the document:** You must strictly use the example code in the document when creating and filling a file. The PlaceholderEmpty property of the Chat component does not need to be filled in.
* **Default conversation must be enabled:** You must use `setActiveConversation` to start the `C2Cadministrator` conversation. 
* **Must call the tool to obtain userSig:** After TUIKit integration is completed, you must guide users to call the `get_usersig` tool to obtain userSig.
* **User information configuration file creation prohibited:** Do not auto-create config directory or file to fill in SDKAppID, userID, and userSig.


# chat-uikit-react Integration


## step1:create react project


requirement: react: 18.2.0, react-dom: 18.2.0.


you can use vite or rsbuild to create a react project.


## step2: install chat-uikit-react


use npm or pnpm to install @tencentcloud/chat-uikit-react


## step3: add chat-uikit-react to your project


example code


```tsx
import {
  UIKitProvider,
  useLoginState,
  LoginStatus,
  ConversationList,
  Chat,
  ChatHeader,
  MessageList,
  MessageInput,
  useConversationListState,
} from "@tencentcloud/chat-uikit-react";


function App() {
  const userID = '';        // TODO: Replace with your userID
  const SDKAppID = 0;        // TODO: Replace with your SDKAppID (Notice: SDKAppID is of type number)
  const userSig = '';   // TODO: Replace with your userSig
  
  const { status } = useLoginState({
    SDKAppID,
    userID,
    userSig,
  })


  if (status !== LoginStatus.SUCCESS) {
    return <div>Loading...</div>
  }


  // Open default conversation
  const { setActiveConversation } = useConversationListState();
  setActiveConversation('C2Cadministrator');
  
  // Language support zh-CN(default) / en-US / ja-JP / ko-KR / zh-TW
  // Theme support light(default) / dark
  return (
    <UIKitProvider language='zh-CN' theme='light'>
      <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'row' }}>
        <ConversationList style={{ minWidth: '300px', maxWidth: '350px' }}/>
        <Chat PlaceholderEmpty=''>
          <ChatHeader />
          <MessageList />
          <MessageInput />
        </Chat>
      </div>
    </UIKitProvider>
  );
}

export default App;
```
