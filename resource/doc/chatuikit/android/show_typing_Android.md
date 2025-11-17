## Description

TUIKit supports showing "Typing..." in a one-to-one chat in the classic UI starting from version [6.5.2803](https://www.tencentcloud.com/zh/document/product/1047/34282#6.5.2803-.402022.07.15---.E5.A2.9E.E5.BC.BA.E7.89.88).

This feature is implemented using the [Online Message](https://www.tencentcloud.com/zh/document/product/1047/48019) capability of IMSDK.
<table>
<tr>
<td rowspan="1" colSpan="1" >Enabling "Typing..."</td>

<td rowspan="1" colSpan="1" >Disabling "Typing..."</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027325838/505f5e73dc7711eea122525400bb593a.jpg)</td>

<td rowspan="1" colSpan="1" >![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027325838/56355b11dc7711eebb01525400b5f95f.jpg)</td>
</tr>
</table>


## Disabling "Typing..."

In the `TUIChat` component, within the [GeneralConfig.java](https://github.com/TencentCloud/chat-uikit-android/blob/main/TUIKit/TUIChat/tuichat/src/main/java/com/tencent/qcloud/tuikit/tuichat/config/GeneralConfig.java) file, a switch for the "Typing..." feature, named **enableTypingStatus**, is provided. Its type is boolean, with a default value of `true`.
``` java
public class GeneralConfig {
    private boolean enableTypingStatus = true;
}
```

To disable the typing indicator feature, simply change the default value of **enableTypingStatus** to `false`, or call the following method before initializing the chat page.
``` java
TUIChatConfigs.getConfigs().getGeneralConfig().setEnableTypingStatus(false);
```

## FAQs

### Why is there no prompt for typing after the switch is turned on?

The rule for showing "Typing..." in a one-to-one chat is: the other party has sent you a message within the last 30 seconds and is currently typing.

## Exchange and Feedback

Join the [Telegram technical exchange group](https://t.me/+1doS9AUBmndhNGNl) or [WhatsApp discussion group](https://chat.whatsapp.com/Gfbxk7rQBqc8Rz4pzzP27A), benefit from the support of professional engineers, and solve your toughest challenges.