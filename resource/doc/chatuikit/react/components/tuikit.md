# TUIKit Introduction

TUIKit is a UI component library based on Tencent Cloud IM SDK. It provides some common UI components, including session, chat, relationship chain, group, audio and video call, and other features.
Based on UI components, you can quickly build your own business logic like building blocks.
TUIKit components implement UI features while calling the appropriate IM SDK APIs to handle IM-related logic and data. Therefore, developers using TUIKit only need to focus on their business or personalized expansion.
TUIKit, developed with React, features a UI style that better fits the usage habits of overseas customers and supports internationalization. If your business needs to go global, welcome to integration.


## TUIKit composition

TUIKit is mainly divided into ConversationList, Chat, ChatSetting, and Profile modules. Each module is responsible for different content. See the open-source code (https://github.com/TencentCloud/chat-uikit-react).


The UI effect on the Web is as shown below.


![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027666621/ca60ad0a7e4011ef852f52540075b605.png)




The UI effect on HTML5 is as shown below.


![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027666621/72617d0b7e4111efa87a525400bdab9d.png)




Key Feature Introduction


Chat is primarily responsible for showing the message interface. You can use it to directly send different types of messages, supporting text/emoji/image/video/file/custom message types, and simultaneously support message forwarding/withdrawal/reference, queries, read receipt, and other features.


![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027666621/ae44c9c27e4211ef80ff525400d5f8ef.png)




Feature introduction for ConversationList


ConversationList is primarily responsible for showing and editing the session list, including session pinning, delete conversation, and other features.


![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027666621/b58134fa7e4211ef82535254002693fd.png)




Introduction to the Features


ChatSetting is primarily responsible for Chat settings.


![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027666621/f9aa50217e4211efb9d8525400f69702.png)




## Key Features of Contact


Contact is primarily responsible for showing the relationship chain as well as creating sessions.


![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027666621/8179f4907e4311efb9d8525400f69702.png)




## Key Features of Profile


Profile is primarily responsible for managing user profiles. 


![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027666621/8ac9cd7a7e4311ef80ff525400d5f8ef.png)
