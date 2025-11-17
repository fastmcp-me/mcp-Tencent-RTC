# TUIKit Introduction

TUIKit is a UI component library based on Tencent Cloud Chat SDK. It provides some common UI components, including session, chat, relationship chain, group, audio and video call and other features.
Based on UI components, you can quickly build your own business logic like building blocks.
The components in TUIKit implement UI features while calling the appropriate APIs of the IM SDK to handle IM-related logic and data. Therefore, developers using TUIKit only need to consider their business or personalized expansion.


## TUIKit main features

TUIKit is mainly divided into several UI subcomponents: Chat, ConversationList, ChatSetting, ContactList, and Search. Each UI component is responsible for showing different content.

## Chat

Chat is primarily responsible for displaying the message interface. You can use it to directly send different types of messages, including text, emoji, images, video, file, and custom message types. You can also long-press messages to forward, recall, or refer to them, as well as check message read receipt details. 

## ConversationList

ConversationList is primarily responsible for showing and editing the conversation list, including session pinning, mute conversation notifications, delete conversation, and other features. 

## Search

<table>
<tr>
<td rowspan="1" colSpan="1">global search</td>


<td rowspan="1" colSpan="1">in-conversation search</td>
</tr>


<tr>
<td rowspan="1" colSpan="1"><br>![Search ALL text containing "hello" via global search](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027119864/bc24fa6e74a311eeb5cb52540099b6dd.gif)<br>Search ALL text containing "hello" via global search</td>


<td rowspan="1" colSpan="1"><br>![Search all file messages in specific conversations](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027119864/c05824eb74a311eeb3675254006b5335.gif)<br>Search all file messages in specific conversations</td>
</tr>
</table>

## ChatSetting

ChatSetting is primarily responsible for managing group information, group members, and group permissions. 

## ContactList

ContactList is primarily responsible for showing the contact person and permission setting.