Flutter Chat UIKit is designed to provide developers with a comprehensive set of tools to create feature-rich chat applications with ease.

It is built with a modular approach, allowing you to pick and choose the components you need while keeping your application lightweight and efficient.

The UIKit includes a wide range of capabilities, such as Conversation list, Message handling, 

Contact lists, Message Translation, Speech-to-Text, and more.

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/3c72a5c84e1811efb66652540055f650.jpeg)


## Features
1. **Personalized Appearance** : With built-in  **Dark and Light  **modes, the UIKit offers a variety of  **theme and appearance customization**  options to meet your business needs.

2. **Multi-Platform Compatibility** : The adaptable single codebase ensures compatibility across various platforms, including  **Mobile **devices (iOS/Android),  **Tablet **(iPad and Android tablets),  **Web **browsers, and  **Desktop **environments (Windows/macOS).

3. **Localization Support** : Developed with native English and additional language options, including Arabic, Japanese, Korean, Simplified Chinese, and Traditional Chinese. The internationalization features ensure a localized interface language and support custom and  **supplementary language** , with Arabic support for  **RTL**  UI.

4. **Enhanced Performance** : The UIKit delivers improved message list  **performance** ,  **memory usage** , and precise message positioning capabilities, catering to scenarios with large message volumes and navigation to older messages.

5. **Advanced Features** : Boasting numerous advanced capabilities, the UIKit includes continuous voice message playback, enhanced multimedia and file message experiences, and intuitive left-right swiping for multimedia message previews.

6. **Refined User Experience** : Detail optimizations such as rich  **animations** ,  **haptic feedback** , and  **a polished interface**  contribute to an improved user experience. New features like grid-style avatars, redesigned forwarding panels, group member selectors, and revamped long-press message menus further enrich the experience.

7. **Modular Design** : Components are organized into modular packages, allowing for selective importing and reducing unnecessary bloat. Each package supports  **built-in navigation transitions** , streamlining development and integration by automatically handling transitions, such as between Conversation and Message.

8. **Developer-Friendly Approach** : A more unified, standardized component parameter design, clearer code naming conventions, and detailed comments, combined with the flexibility to choose  **global or instance-level configuration ** management, make development easier and more efficient.


## Getting Started

### Requirements
- Flutter version: 3.19 or above

- Dart version: 3.0 or above


### Setting Up Application in the Console

#### **Step1：Create an Account**

Visit the [Console](https://trtc.io/login?source=flutter_article_blog_1&utm_campaign=social) of trtc.io and create an account by following the prompts.

#### **Step2：Start a Free Trial**

Create an application on the homepage and start your free trial.

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/8d559df04e1d11efbaba525400d5f8ef.png)


#### **Step3：Generate Test Users**

Create two users (test accounts) on [Account Management](https://console.trtc.io/chat/account-management). Following by use the [UserSig Tools](https://console.trtc.io/usersig) to create the corresponding UserSigs for them, note down the UserSigs for later use.

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/5aa85bf04e1d11efb66652540055f650.png)


#### **Step4：Retrieve Your SDKAppID**

Go to [Applications](https://console.trtc.io/app), select your newly created application, and navigate to the corresponding [Application Overview](https://console.trtc.io/overview) to find your SDKAppID.

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/dba31d984e1d11efabc0525400fdb830.png)


At this point, the Console setup is complete. Make sure to note down the `SDKAppID `and the two sets of `UserID `and `UserSig`.

### Coding

> **Note：**
> 

> The guide provide a** Simplified Overview** of integrating with Flutter Chat UIKit only.
> 

> For a detailed integration process, please refer to this guide: [Detailed Integration Guide](https://trtc.io/document/58585?platform=flutter&product=chat&menulabel=uikit).
> 


To begin, it's best to have a Flutter project ready or create a new one to fully experience this tutorial. We recommend following the steps to [create a new Flutter project](https://docs.flutter.dev/get-started/codelab).

If you're interested in exploring a fully-fledged app with an extensive range of features, advanced capabilities, and customization options, please check out [This Repo](https://github.com/TencentCloud/chat-demo-flutter/tree/v2).

#### Step 1. Import the Packages

To get started, import the base package, tencent_cloud_chat_common.
``` bash
flutter pub add tencent_cloud_chat_common
```

Next, import the UI component packages that suit your needs:
``` bash
flutter pub add tencent_cloud_chat_message
flutter pub add tencent_cloud_chat_conversation
flutter pub add tencent_cloud_chat_contact
flutter pub add tencent_cloud_chat_sticker
flutter pub add tencent_cloud_chat_message_reaction
flutter pub add tencent_cloud_chat_text_translate
```

For demonstration purposes, we suggest importing all of them. However, in real-world projects, you can import packages based on your specific requirements.

The architecture of Flutter Chat UIKit is shown below:

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027325838/cc821984eaa111efb98e525400e889b2.png)


#### Step 2. Initial Setup for UIKit

Before you start using each Modular Package UI component, follow these initial setup steps:

**Global Configuration**

Replace your project's `MaterialApp` by `TencentCloudChatMaterialApp`.

This enables automatic management and configuration of language, theme (with material3), theme mode, and other settings. If you prefer manual configuration, refer to [Implement the global configuration for UIKit manually](https://trtc.io/document/58585?platform=flutter&product=chat&menulabel=uikit#ab6bd508-218a-4002-9b76-0ee081e8929a).

**Initialization and Login**

Call `TencentCloudChat.controller.initUIKit` to initialize and log in.

Pass in the **SDKAppID**, **userID**, and **userSig **of your Tencent Cloud Chat application created in the previous step. Also, declare the register of each sub Modular UI Package in the `usedComponentsRegister` list.
``` java
TencentCloudChat.controller.initUIKit(
  options: const TencentCloudChatInitOptions(
    sdkAppID: , /// [Required]: The SDKAppID of your Tencent Cloud Chat application
    userID: , /// [Required]: The userID of the logged-in user
    userSig: , /// [Required]: The userSig of the logged-in user
  ),
  components: const TencentCloudChatInitComponentsRelated( /// [Required]: The modular UI components related settings, taking effects on a global scale.
    usedComponentsRegister: [
      /// [Required]: List of registration functions for the components used in the Chat UIKit.
          TencentCloudChatConversationManager.register,
          TencentCloudChatMessageManager.register,
          TencentCloudChatContactManager.register,
      ],
  ),
);
```

Perfect! With the global configuration complete, we're now ready to dive into the usage of our Modular UI Components. Let's explore how they can enhance your chat application experience.

#### Step3. Integrating Modular UI Components

In most use cases, you'll need to manually instantiate and add the `TencentCloudChatConversation` and `TencentCloudChatContact `components to a widget, if necessary.

Other components are automatically navigated based on user actions.

In this tutorial, we'll use the `bottomNavigationBar` to manage the pages and switch between the `TencentCloudChatConversation` and `TencentCloudChatContact `components.

First, declare a `currentIndex` variable and a `List<Widget> pages` array to indicate the currently selected component and store the component instances.
``` java
List<Widget> pages = [];
int currentIndex = 0;
```

Store the instances in the `pages` array.
``` java
pages = [
      const TencentCloudChatConversation(),
      const TencentCloudChatContact(),
    ];
```

Finally, modify the `build` method as follows:
``` java
@override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        currentIndex: currentIndex,
        onTap: (index) async {
          if (index != currentIndex) {
            setState(
                  () {
                currentIndex = index;
              },
            );
          }
        },
        items: const [
          BottomNavigationBarItem(
              icon: Icon(Icons.chat_bubble_outline), label: "Chats"),
          BottomNavigationBarItem(
              icon: Icon(Icons.contacts), label: "Contacts"),
        ],
      ),
      body: pages[currentIndex],
    );
  }
```

And that's it! You've successfully integrated the components.

#### Step 4. Experience the Flutter Chat UIKit in Action

Now, let's run the project and experience the Flutter Chat UIKit.

Log in with the first test account created in the `initUIKit` method and launch the app.

Start by running `flutter run`.

Once you've successfully entered the app, you'll see the Conversation and Contact pages, with the ability to switch between them at the bottom.

However, there are no conversations to test yet.

Don't worry! Switch to the Contacts page, click 'Add Contact' in the top-right corner, and add the other test account as a contact. You'll now see the other account in the Contacts list.

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/8f25285c4e1911ef8f105254002693fd.png)


Click on the contact to start chatting. You can also rerun the app, log in with the other user's UserID, and experience sending messages to each other.

In conclusion, we've now completed the entire simplified integration process. Thank you for experiencing the power of Tencent Cloud Flutter Chat UIKit.

For more information on detailed integration, configuration, and advanced usage, please refer to this guide: [Detailed Integration Guide](https://www.tencentcloud.com/document/product/1047/58585).

