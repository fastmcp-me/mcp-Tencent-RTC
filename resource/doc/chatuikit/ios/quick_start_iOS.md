This document will guide you through integrating TUIKit and successfully sending your first message.

## Environment Requirements
- Xcode 10 or later

- iOS 9.0 or later


## Create an Application

Before integrating TUIKit, you need to create a Chat application in the console. The steps are as follows:
1. Register a console account.

2. Go to `Applications`, click `Create Application`, and an application information input box will pop up.

3. Fill in the application name, select the product as Chat, and choose an appropriate region.


   After the operation is complete, you will see the application you just created in the `My Applications` list.
   

   > **Note:**
   > 

   > Note down the SDKAppID of this application, as it will be used in subsequent steps. Also, keep the SDKSecretKey strictly confidential and do not disclose it to irrelevant personnel.
   > 


   The steps are illustrated as follows:

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/0ff0f1b5142511ef83b95254002977b6.png)


## Create User Accounts

Creating an application only ensures you can initialize the SDK normally. To successfully send messages, you also need to create a user account in the application. There are many ways to create an account, such as directly creating it in the console or registering via API on the client. You may choose any method that suits you best.

> **Note:**
> 

> Sending messages involves at least two users, so at this step, you need to create at least two accounts. Note down the userID of these two accounts for subsequent steps.
> 


If you need to create an account in the console, follow these steps:
1. Click to enter the application you created above, and you will see the Chat on the left sidebar. Click to enter.

2. On the Chat submenu, click `Users` to go to the Account Management page.

3. Click `Create account`, and an account creation dialog box will pop up. It is recommended to select `General` for a regular member. Although `Nickname` is not required, we still recommend setting it. If `userID` is not displayed on the UI, you can identify different users through `Nickname`.


   The details are as follows:

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/0fd9f952142511efa09b525400762795.png)


   If you need to register through the client, no additional operations are needed. You just need to input a new `userID` in the section "Log In to TUIKit" below, and TUIKit will automatically register that `userID` for you.


## Install TUIKit

The feature of sending messages in chat interactions is implemented by `TUIChat`. You need to integrate at least `TUIChat` to properly send and receive messages. Other components, such as `TUIConversation`, `TUIContact`, and `TUIGroup`, can be integrated as needed.
- If you need multiple UI components, you can integrate TUIKit. For details, see [Install TUIKit](https://www.tencentcloud.com/document/product/1047/50056#cocoapods-.E9.9B.86.E6.88.90).

- If you only need to integrate TUIChat, see [Install TUIChat Only](https://www.tencentcloud.com/document/product/1047/60169#beaaa1f6-5555-42ca-b353-32ad98a620da).


## Log In to TUIKit

TUILogin provides an API to log in to TUIKit, as follows:
``` objectivec
// API location: TUICore/TUILogin.h
+ (void)login:(int)sdkAppID userID:(NSString *)userID userSig:(NSString *)userSig succ:(__nullable TSucc)succ fail:(__nullable TFail)fail;
```

This API requires three parameters:
- sdkAppID, the new application's SDKAppID, which was obtained in the previous steps.

- userID, user1's userID, which was obtained in the previous steps. Note that it is not the user's nickname.

- userSig, user1's userSig, which can be generated in real time using the development tools provided by the console. The path is: Homepage > Development Tools > UserSig Tools > Signature (UserSig) Generator, as shown below:

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/0fefcdc8142511efa09b525400762795.png)


## Navigate to Chat Interface

To send messages, the next step is:
1. Use one of the previously registered accounts (hereinafter referred to as user1) to log in to TUIKit, and then user1 is online.

2. User1 sends a message to another account (hereinafter referred to as user2). User2 does not need to log in and does not need to have any friend relationship with user1.
   

   > **Note:**
   > 

   > The following steps explain how to send a message to user2 after logging in as user1. If you wish for user1 and user2 to interact via chat, you need to use the same steps to log in as user2 and enter the chat interface with user1.
   > 


   You can jump to the chat interface in the callback of user1's successful login, and then you can send a message to user2.


   The sample code is as follows, where userID needs to be user2's id.


   


【Swift】
``` swift
// Pass userID for 1v1 conversation.
func pushToChatViewController(groupID: String?, userID: String?) {
    // Create conversationData.
    let conversationData = TUIChatConversationModel()
    conversationData.userID = userID
    
    // Create c2c chatVC.
    let chatVC = TUIC2CChatViewController_Minimalist()
    chatVC.conversationData = conversationData
    
    // Option 1: navigate to chatVC.
    navigationController?.pushViewController(chatVC, animated: true)
    // Option 2: add chatVC as a childVC to your parent VC.
    // addChild(chatVC)
    // view.addSubview(chatVC.view)
}
```


【Objective-C】
``` objectivec
// Pass userID for 1v1 conversation.
- (void)pushToChatViewController:(NSString *)groupID userID:(NSString *)userID {
    // Create conversationData.
    TUIChatConversationModel *conversationData = [[TUIChatConversationModel alloc] init];
    conversationData.userID = userID;
    
    // Create c2c chatVC.
    TUIBaseChatViewController_Minimalist *chatVC = [[TUIC2CChatViewController_Minimalist alloc] init];
    chatVC.conversationData = conversationData;
    
    // Option 1: navigate to chatVC.
    [self.navigationController pushViewController:chatVC animated:YES];
    // Option 2: add chatVC as a childVC to your parent VC.
    // [self addChildViewController:vc];
    // [self.view addSubview:vc.view];
}
```


## Send Your First Message

After completing the previous steps, you can jump to the following chat interface. Click the input box to send your first message:

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/cea1842b2c8c11ef9130525400bf8054.png)


## Contact Us

If you have any questions about this article, feel free to join the [Telegram Technical Group](https://t.me/+EPk6TMZEZMM5OGY1), where you will receive reliable technical support.

