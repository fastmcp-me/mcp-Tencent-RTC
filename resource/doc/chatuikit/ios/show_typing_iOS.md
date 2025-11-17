## Description

TUIKit supports showing "Typing..." in a one-to-one chat in the classic UI starting from version [6.5.2803](https://www.tencentcloud.com/zh/document/product/1047/34282#6.5.2803-.402022.07.15---.E5.A2.9E.E5.BC.BA.E7.89.88).

This feature is implemented using the [Online Message](https://www.tencentcloud.com/zh/document/product/1047/48019) capability of Chat SDK.
<table>
<tr>
<td rowspan="1" colSpan="1" >Enabling "Typing..."</td>

<td rowspan="1" colSpan="1" >Disabling "Typing..."</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027325838/2ab1cf48dc7811eebb01525400b5f95f.jpeg)</td>

<td rowspan="1" colSpan="1" >![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027325838/2ae9b494dc7811eebb01525400b5f95f.jpeg)</td>
</tr>
</table>


## Disabling "Typing..."

In the `TUIChat` component, within the `TUIChatConfig` file, a switch for the "Typing" feature, named `enableTypingStatus`, is provided. Its type is BOOL, with a default value of `YES`.

To disable the typing indicator feature, simply change the default value of `enableTypingStatus` to `NO`, or call the following method before initializing the chat page.




【Swift】
``` swift
TUIChatConfig.shared.enableTypingStatus = true
```


【Objective-C】
``` objectivec
TUIChatConfig.defaultConfig.enableTypingStatus = NO;
```

## FAQs

### Why is there no prompt for typing after the switch is turned on?

The rule for showing "Typing..." in a one-to-one chat is: the other party has sent you a message within the last 30 seconds and is currently typing.

## Exchange and Feedback

Join the [Telegram technical exchange group](https://t.me/+1doS9AUBmndhNGNl) or [WhatsApp discussion group](https://chat.whatsapp.com/Gfbxk7rQBqc8Rz4pzzP27A), benefit from the support of professional engineers, and solve your toughest challenges.



