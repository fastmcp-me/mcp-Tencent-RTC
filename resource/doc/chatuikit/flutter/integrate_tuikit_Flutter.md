> **Note：**
> 

> This documentation primarily covers our new Flutter UIKit (tencent_cloud_chat). If you're looking for the documentation for the earlier version of UIKit, [please click here](https://www.tencentcloud.com/document/product/1047/50054).
> 


Our Flutter Chat UIKit is designed to provide developers with a comprehensive set of tools to create feature-rich chat applications with ease.

It is built with a modular approach, allowing you to pick and choose the components you need while keeping your application lightweight and efficient.

The UIKit includes a wide range of capabilities, such as Conversation list, Message handling, 

Contact lists, Message Translation, Speech-to-Text,  and more.

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/1a2b9494f18b11eeb6df5254005c8f7c.jpg)

## Features
1. **Personalized Appearance** : With built-in  **dark and light**  modes, the UIKit offers a variety of  **theme and appearance customization**  options to meet your business needs.

2. **Multi-Platform Compatibility** : The adaptable single codebase ensures compatibility across various platforms, including  **mobile**  devices (iOS/Android),  **tablets**  (iPad and Android tablets),  **web**  browsers, and  **desktop**  environments (Windows/macOS).

3. **Localization Support** : Developed with native English and additional language options, including Arabic, Japanese, Korean, Simplified Chinese, and Traditional Chinese. The internationalization features ensure a localized interface language and support custom and  **supplementary language** , with Arabic support for  **RTL**  UI.

4. **Enhanced Performance** : The UIKit delivers improved message list  **performance** ,  **memory usage** , and precise message positioning capabilities, catering to scenarios with large message volumes and navigation to older messages.

5. **Advanced Features** : Boasting numerous advanced capabilities, the UIKit includes continuous voice message playback, enhanced multimedia and file message experiences, and intuitive left-right swiping for multimedia message previews.

6. **Refined User Experience** : Detail optimizations such as rich  **animations** ,  **haptic feedback** , and  **a polished interface**  contribute to an improved user experience. New features like grid-style avatars, redesigned forwarding panels, group member selectors, and revamped long-press message menus further enrich the experience.

7. **Modular Design** : Components are organized into modular packages, allowing for selective importing and reducing unnecessary bloat. Each package supports  **built-in navigation transitions** , streamlining development and integration by automatically handling transitions, such as between Conversation and Message.

8. **Developer-Friendly Approach** : A more unified, standardized component parameter design, clearer code naming conventions, and detailed comments, combined with the flexibility to choose  **global or instance-level configuration ** management, make development easier and more efficient.


## Compatibility

This UIKit supports **mobile**, **tablet**, and **desktop** UI styles, and is compatible with Android, iOS, macOS, Windows, and Web (will be supported in future versions).

It comes with built-in support for English, Simplified Chinese, Traditional Chinese, Japanese, Korean, and Arabic languages (with support for Arabic RTL interface), and light and dark appearance styles.

## Requirements
- Flutter version: 3.24 or above

- Dart version: 3.0 or above


## Getting Started

### Demo

You can refer to the [Demo source code](https://github.com/TencentCloud/chat-demo-flutter/tree/v2) alongside this document to ensure a smooth and successful integration process.

> **Note：**
> 

> To respect the copyright of emoji designs, the Chat Demo/TUIKit project does not include cutouts of large emoji elements. Please replace them with your own designs or other emoji packs for which you hold the copyright before officially launching for commercial use. **The default smiley face emoji pack shown below is copyrighted by Tencent RTC** and is available for licensed use for a fee. If you need to obtain a license, please [contact us](https://trtc.io/contact).
> 

> ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027202808/a226e70297f711efaaca525400fdb830.png)
> 


### Import Packages

#### Base Package

To start using our UIKit, first import the base package, tencent_cloud_chat_common.

#### Modular UI Packages

Next, import the required UI component packages that suit your needs from the following list:
- tencent_cloud_chat_message

- tencent_cloud_chat_conversation

- tencent_cloud_chat_contact

- tencent_cloud_chat_sticker

- tencent_cloud_chat_message_reaction

- tencent_cloud_chat_text_translate

- tencent_cloud_chat_sound_to_text

- tencent_cloud_chat_search *(In Beta)*


   The architecture of our UIKit is shown below:




![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027325838/fd4f6c63e5ca11efb98e525400e889b2.png)


> **Platform Integration:**
> 

> Before proceeding to the "Basic Usage" section, make sure to complete the integration of additional platforms following the steps outlined here, especially if you are targeting these specific platforms for deployment.
> 
> - **Web / macOS: **Please [Follow this guide](https://trtc.io/document/45907?platform=flutter&product=chat&menulabel=uikit#more) if you plan to deploy your project on***Web*** or ***macOS*** platforms.
> - **iOS: **Open `ios/Podfile` , and replace the final section with the following content.
> `post_install do |installer|`
> `  installer.pods_project.targets.each do |target|`
> `    flutter_additional_ios_build_settings(target)`
> `    target.build_configurations.each do |config|        `
> `          config.build_settings['EXCLUDED_ARCHS[sdk=iphonesimulator*]'] = 'arm64'               `
> `          config.build_settings['ENABLE_BITCODE'] = 'NO'        `
> `          config.build_settings["ONLY_ACTIVE_ARCH"] = "NO"    `
> `        end`
> `    target.build_configurations.each do |config|`
> `          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= [`
> `            '$(inherited)',`
> `            'PERMISSION_MICROPHONE=1',`
> `            'PERMISSION_CAMERA=1',`
> `            'PERMISSION_PHOTOS=1',`
> `          ]`
> `        end`
> `  end`
> `end`
> - **Android / Windows: **No additional actions required.


## Basic Usage

Before you start using each Modular Package UI component, there are some initial setup steps you need to follow in your project.
1. Prepare the necessary Tencent Cloud Chat configuration information, such as sdkappid, test userID, userSig, etc. [You can refer to Run Demo](https://trtc.io/zh/document/45907?platform=flutter&product=chat&menulabel=uikit).

2. **Packages installing:**


   In your Flutter project, install the main package and the optional modular packages mentioned in the Getting Started section.

3. Global configuration**:**


   Import `TencentCloudChatMaterialApp`: Replace your project's `MaterialApp` with `TencentCloudChatMaterialApp`. This enables automatic management and configuration of the language, theme *(with material3)*, theme mode, and other settings, ensuring that the UIKit's interface parameters are consistent with your project.


   This step will take over the language, theme, and theme mode configuration of your project. If you do not want the automatic management of the configuration for your project, you can manually import the features you need into your project according to the **following guide**.


   





#### Implement the global configuration for UIKit manually.

It is recommended to replace your project's `MaterialApp` with `TencentCloudChatMaterialApp`. This enables automatic management of global configuration, including localization, theme, and theme mode.

However, if you want to retain your project's `MaterialApp` due to extensive customization or the use of other packages such as `Get`, which also manage it, you can manually initialize the UIKit. This guide will walk you through that process.

In the global configuration, localization is required, while the theme and theme mode settings are optional. Let's get started.

##### Required Configuration
- **Localization**


First, import the localization tools into your app's entry file.
``` java
import 'package:tencent_cloud_chat_intl/localizations/tencent_cloud_chat_localizations.dart';
```

Next, add the localization configuration to `MaterialApp` or another entry provided by third-party packages like `GetMaterialApp`.
``` plaintext
MaterialApp(
  localizationsDelegates: const [
    /// Your configuration
    GlobalMaterialLocalizations.delegate,

    /// Add this line
    ...TencentCloudChatLocalizations.localizationsDelegates,  /// Add this line
  ],
  supportedLocales: [
    /// Your configuration
    ...S.delegate.supportedLocales,

    /// Add this line
    ...TencentCloudChatLocalizations.supportedLocales,
  ],
  /// ... Other configurations
)
```

Additionally, you can set the language region `locale` according to your business logic, such as recording the user-specified language upon app launch, instead of following the system settings. This configuration will apply to both your project and the Chat UIKit.

For more information of customizing localization, including adding or removing languages, adding the localization entry, and modifying translation words, [Please refer to the corresponding guide](https://trtc.io/document/52154).

##### Optional Configuration
- **Theme / Theme Mode**


The UIKit's theme data, defined by the `TencentCloudChatTheme` class, is globally maintained and managed through `TencentCloudChat.dataInstance.theme`. This allows you to access the theme from any location:
``` dart
TencentCloudChatTheme theme = TencentCloudChat.dataInstance.theme;
```

This theme instance includes a theme model (which includes the theme data for both light and dark modes) and brightness (light and dark mode status).

Furthermore, you can specify the `theme` and `darkTheme`from `MaterialApp` using the Material 3 style theme data that we provide for both light and dark modes. You can also set the `themeMode` status based on the `brightness` status we maintain. This ensures a consistent appearance across your application and our Chat UIKit, enhancing the user experience. (You can customize this theme style as described below.)

To achieve this, we suggest converting your entry widget (which hosts the `MaterialApp`) to a `StatefulWidget`. Add a `TencentCloudChatTheme theme` as a state, and listen to `Stream<TencentCloudChatTheme>? themeDataListener` to update its value and build the app based on dynamic, customizable theme data. Here is sample code:
``` dart
// Theme instance for the Chat UIKit
TencentCloudChatTheme theme = TencentCloudChat.dataInstance.theme;

// Listener for theme data changes
Stream<TencentCloudChatTheme>? themeDataListener = TencentCloudChat.eventBusInstance.on<TencentCloudChatTheme>();

// Callback for handling theme data changes
void _themeDataChangeCallback(TencentCloudChatTheme themeData) {
  setState(() {
    theme = themeData;
  });
}

// Adds a listener for theme data changes
void _addThemeDataChangeListener() {
  themeDataListener?.listen(
    _themeDataChangeCallback,
  );
}

@override
void initState() {
  super.initState();
  _addThemeDataChangeListener();
}

// .......

return MaterialApp(
  themeMode: theme.brightness != null ? (theme.brightness == Brightness.light ? ThemeMode.light : ThemeMode.dark) : null,
  theme: theme.getThemeData(brightness: Brightness.light),
  darkTheme: theme.getThemeData(brightness: Brightness.dark),
   /// ... Other configurations
);
```
  - To customize the theme for the Chat UIKit appearance and the global theme (if specified in `MaterialApp` as shown above), use the `TencentCloudChatCoreController.setThemeColors` method to specify the appearance colors for both light and dark modes. For specific usage instructions, see the comments in the code.

  - To switch the theme mode (brightness), use `TencentCloudChatCoreController.setBrightnessMode` or `TencentCloudChatCoreController.toggleBrightnessMode`. For specific usage instructions, see the comments in the code.


1. **Initialization and Login**:


   Call the `TencentCloudChat.controller.initUIKit` method to initialize and log in. The call instructions and reference code are as follows:
   

   > **Note：**
   > 

   > We highly recommend configuring the `callbacks` to efficiently handle SDK API errors and specific UIKit events that require user attention through `Dialog` or `Tooltip` in a customizable way.
   > 

   ``` java
   await TencentCloudChat.controller.initUIKit(
     config: TencentCloudChatConfig(), /// [Optional]: The global configurations that affecting the whole Chat UIKit, including user-related configs, theme-related configs, etc.
     options: TencentCloudChatInitOptions(
       sdkAppID: , /// [Required]: The SDKAppID of your Tencent Cloud Chat application
       userID: , /// [Required]: The userID of the logged-in user
       userSig: , /// [Required]: The userSig of the logged-in user
     ),
   
     components: TencentCloudChatInitComponentsRelated( /// [Required]: The modular UI components related settings, taking effect on a global scale.
       usedComponentsRegister: [
         /// [Required]: List of registration functions for the components used in the Chat UIKit.
         TencentCloudChatConversationManager.register,
         TencentCloudChatMessageManager.register,
         /// ...... 
         /// The above registers are examples. In this field, pass in the register of each sub modular UI package.
         /// After installing each sub modular UI package, you need to declare it here before you can use it.
       ],
       componentConfigs: TencentCloudChatComponentConfigs(
         /// [Optional]: Provide your custom configurations for each UI modular component here. These builders will be applied globally.
       ),
       componentBuilders: TencentCloudChatComponentBuilders(
         /// [Optional]: Provide your custom UI builders for each UI modular component here. These builders will be applied globally.
       ),
       componentEventHandlers: TencentCloudChatComponentEventHandlers(
         /// [Optional]: Provide your custom event handlers for UI component-related events here. These builders will be applied globally.
       ),
     ),
   
     /// **[Critical]**: It's strongly advised to incorporate the following callback listeners for effectively managing SDK events, SDK API errors and specific UIKit events that require user attention.
     /// For detailed usage, see the Introducing callbacks for UIKit section at the end of this README.
     callbacks: TencentCloudChatCallbacks(
       onTencentCloudChatSDKEvent: V2TimSDKListener(),  /// [Optional]: Handles SDK events, such as onKickedOffline and onUserSigExpired, etc.
       onTencentCloudChatSDKFailCallback: (apiName, code, desc) {}, /// [Optional]: Handles SDK API errors.
       onTencentCloudChatUIKitUserNotificationEvent: (TencentCloudChatComponentsEnum component, TencentCloudChatUserNotificationEvent event) {}, /// [Optional]: Handles specific UIKit events that require user attention on a global scale.
     ),
   
     plugins: [],  /// [Optional]: Used plugins, such as tencent_cloud_chat_robot, etc. For specific usage, see the README of each plugin.
   );
   ```

   Once you have completed the basic integration process of the UIKit, you can proceed to explore the documentations of each Modular Package to complete the integration of the individual UI components.


   This will help you understand the specific usage and customization options for each component, allowing you to create a tailored chat application that meets your requirements.
   

   > **Notice：**
   > 

   > The documentations of each Modular Package listed below in this doc.
   > 


### Common Usage for Modular UI Packages

For most use cases, only  `TencentCloudChatConversation`  and  `TencentCloudChatContact`  components, if necessary, need to be manually instantiated and added to a widget.
Other components are automatically navigated based on user actions, as long as they have been declared in the  `usedComponentsRegister`  within the  `components`  parameter during the  `initUIKit`  call.

To integrate these two basic components, simply instantiate them and return them in a  `build`  method without any additional configuration parameters.

## Advanced Usage

### Advanced Usage for Modular UI Packages

#### Component Input Parameters

Each modular UI component package provides four unified input parameters:
- **options** : Component-specific parameters that ensure proper functionality. Some generic components might not need this parameter.

- **config** : A set of component-specific configurations for fine-grained customization, such as adjusting the attachment area configuration for the Message component.

- **builders** : A collection of methods for building widgets within the component, enabling external UI customization. Each builder includes the necessary parameters and methods, making data and logic layer methods readily available.  *For details, see the following ****Customizing UI Widgets**** section.*

- **eventHandlers** : Callbacks for handling component-specific events, including  `uiEventHandlers`  (e.g., various  `onTap` -like events) and  `lifeCycleEventHandlers`  (e.g., events triggered after a message has been sent). These handlers allow for custom behavior in response to user interactions and component lifecycle changes.
   

   > **Note：**
   > 

   > The  `options`  parameters should be specified in the component constructor. Currently, only  `TencentCloudChatMessage`  components require this parameter, used for specifying a target user or group.
   > 

   > The other three parameters can be specified either in the component constructor for a specific component instance or globally in the  `components`  parameter during the  `initUIKit`  call or managed from the manager of each component, affecting all instances of the corresponding component. 
For the integration process,  **we recommend using the global configuration approach** , as described in the following sections.
   > 


#### Global: Configuring Components

Each component offers a set of component-specific configurations for fine-grained customization, such as adjusting the attachment area configuration for the Message component.

There are two methods for customizing configurations on a global scale: During  `initUIKit`  and using the manager.
- **During init** : Define configurations during the  `initUIKit`  call using the  `components`  parameter with  `componentConfigs`  specified for each modular UI component.

- **By manager** : Utilize each component's manager to dynamically modify configurations from any location within the codebase.


   To dynamically modify the configurations for all instances of the corresponding component, follow these steps:

1. Access the global  `config`  instance from the component's manager by appending  `Manager`  to the component's name (e.g.,  `TencentCloudChatMessageManager` ).

2. Invoke the  `setConfigs`  method and pass any configurations to be modified. This will replace the previous configuration and apply changes immediately.


   For example, you can use the  `config`  from the  `TencentCloudChatConversation`  component by accessing it through the  `TencentCloudChatConversationManager`  object (e.g.,  `TencentCloudChatConversationManager.controller` ) to modify some configurations:

   ``` java
   TencentCloudChatConversationManager.config.setConfigs(
       useDesktopMode: true,
   );
   ```

#### Global: Customizing UI Widgets

UI Builders enable external UI customization. If no builder is defined, the built-in UI widgets will be used. Each builder comes with the required parameters and methods, allowing easy access to the data and logic layer methods. This means that you can use the provided context data, such as a specific conversation, to return a builder tailored to that context.

There are two modes for defining custom builders on a global scale: During  `initUIKit`  and by using manager.
- **During init** : Defined during the  `initUIKit`  call using the  `components`  parameter with  `componentBuilders`  specified for each modular UI component.

- **By manager** : Usage instructions shows on the next section  **Dynamically Updating UI Builders** .


   We recommend using the following dynamic definition method, allows modifications from any location within the codebase.


##### Dynamically Updating UI Builders

Please note that this approach is only applicable for modifying global builders that are defined during the  `initUIKit`  call using the  `components`  parameter or the default builders when no custom builders are specified. This method cannot be used to modify builders at the component instance level, i.e., the  `builders`  parameter passed when instantiating a component.

To dynamically update the UI builders that affect all instances of a specific component, follow these steps:
1. Retrieve the global  `builder`  instance from the component's manager by appending  `Manager`  to the component's name (e.g.,  `TencentCloudChatMessageManager` ).

2. Call the  `setBuilders`  method on the retrieved instance and provide your custom builders.


   For instance, to customize the UI widgets of the  `TencentCloudChatConversation`  component, you can use the following code:

   ``` java
   TencentCloudChatConversationManager.builder.setBuilders(
     conversationItemContentBuilder: (V2TimConversation conversation) => Container(),
     conversationHeaderBuilder: () => Container(),
   );
   ```

   <u>I</u>n this example, you only need to specify the builders you want to customize, while the others remain unchanged.


   With this approach, you can dynamically update global builders anywhere in your application.


#### Global: Handling Component-Level Events

Each component is equipped with two types of events:  `uiEventHandlers`  (e.g., onTap-like events) and  `lifeCycleEventHandlers`  (business-related events).

In general, events provide a comprehensive set of information parameters to help you implement custom business logic. For events returning a boolean value (which is the majority), returning  `true`  prevents the execution of default business logic, while returning  `false`  allows it to proceed.

Custom event handling allows for seamless integration of your business logic with the default UIKit actions. For instance, you can customize component navigation, as demonstrated in the  **Case: Manual Navigation between Components**  section below.

There are two methods for attaching your event handlers globally:
1. During the  `initUIKit`  call, use the  `components`  parameter and specify  `componentEventHandlers`  for each modular UI component.

2. Employ each component's manager to dynamically attach and update event handlers from any location within the codebase.


   To dynamically attach and update event handlers that listen to events from all instances, follow these steps:

1. Access the global eventHandlers instance from the component's manager by appending Manager to the component's name (e.g., TencentCloudChatMessageManager).

2. Invoke  `setEventHandlers`  for  `uiEventHandlers`  or  `lifeCycleEventHandlers`  to update specific event handlers.
 *Note: This will cause the corresponding event's previously attached handlers to be invalidated, i.e., overridden.*


   For example usage, refer to the  **Case: Manual Navigation between Components**  section.


   Whichever method you choose, you only need to attach the event handlers you wish, while the others remain unspecified.


##### Case: Manual Navigation Between Components

As previously mentioned, our components support automatic navigation between them, provided they have been declared. However, if your business logic is incompatible with automatic navigation (e.g., you need to navigate to other components or implement additional business logic), you can manually handle events by listening to click events and blocking default navigation to meet your requirements.

For manual navigation between provided components, it's advised to attach corresponding  `onTap` -like event handlers and return  `true`  or  `false`  to decide whether to proceed with built-in auto-navigation.

For example, when clicking a contact item in the  `TencentCloudChatContact`  component, you can execute custom navigation as shown in the following sample:
``` java
TencentCloudChatContactManager.eventHandlers.uiEventHandlers.setEventHandlers(
    onTapContactItem: ({
    String? userID,
    String? groupID,
    }) async {
        // Determine whether manual navigation is needed based on the provided userID, groupID, and your business logic.
        if (needed) {
            // Execute your custom business logic
            return true;
        } else {
            // Continue with the built-in logic
            return false;
        }
    },
);
```

#### Global: Taking Control of Each Component

Each component is associated with a set of control methods. These provide enhanced functionality and control over the component's behavior.

To use these control methods, first retrieve the  `controller`  instance from the respective component's manager, which is formed by appending  `Manager`  to the component's name (e.g.,  `TencentCloudChatMessageManager` ). You can then call the methods provided by the  `controller`  instance.

For example, you can use the controller from the  `TencentCloudChatMessage`  component by accessing it through the  `TencentCloudChatMessageManager`  object(e.g.,  `TencentCloudChatMessageManager.controller` ). To send a message and add it to the message list UI, use the following code:
``` java
// Create a message using the Chat SDK.
final res = await TencentCloudChat.instance.chatSDKInstance.messageSDK.createTextMessage(text: "Sample Message", mentionedUsers: []);
if(res != null ){
  // Then send the created message using the controller obtained from TencentCloudChatMessageManager.
  TencentCloudChatMessageManager.controller.sendMessage(createdMessage: res, userID: "admin");
}
```

Each modular UI component has a controller associated with its specific functionality. The usage is consistent with the sample controller as shown above.

For detailed explanations of each controller method, please refer to the comments provided with each method.

### Additional Methods in TencentCloudChat.controller

In the Basic Usage section above, we explained how to initialize the UIKit and log in using the `TencentCloudChat.controller`.

This controller also contains several other methods that can be used to control some global aspects of the UIKit. For example:
- **toggleBrightnessMode**: This method allows you to switch between dark and light modes.

- **getThemeData**: This method returns the built-in theme configuration in the form of a material3 ThemeData class. This can be used to configure the `theme` parameter for your `MaterialApp`, ensuring that our UIKit and the other components of your project have a consistent appearance.

- **setThemeColors**: This method allows you to customize the color configurations for both dark and light modes in the UIKit. This ensures that our UIKit and the other components of your project have a consistent appearance. The configurations set by this method will take effect across all our UI components.

- **setBrightnessMode**: This method allows you to set the current Brightness Mode.


   For more methods and their descriptions, please refer to the annotations for each method. This allows you to have more control over the behavior and appearance of the UIKit, enabling you to fine-tune it to perfectly fit the needs of your project.


## Modular Package

> **Note：**
> 

> If you come across null safety errors outlined below when using our modular UI packages, kindly consult this guide for assistance.
> 

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/d920f435df7811ee9f745254008eb8a8.png)


> These issues could potentially stem from premature usage of Chat UIKit components prior to the full initialization of the project.
> 

> A possible solution is to manually run the subsequent code before these components are used.
> 
> `TencentCloudChatIntl().init(context);`

> If the aforementioned solution proves ineffective, ensure that you have either replaced the entry `MaterialApp` with the provided `TencentCloudChatMaterialApp`, or manually implemented the global configuration for UIKit at the earliest stage, as described in the Basic Usage section.
> 


### Conversation

Introducing the Conversation component of the Tencent Cloud Chat UIKit, designed to provide a versatile conversation list for your chat applications that seamlessly adapts to both desktop and mobile environments.

The Conversation component offers a conversation list that displays all participated conversations, sorted by the last active time. It also supports managing conversation information, ensuring a smooth and organized chat experience.

When used in conjunction with the [tencent_cloud_chat_message](https://pub.dev/packages/tencent_cloud_chat_message) component, the Conversation component enables automatic navigation to the corresponding message chat page upon tapping a conversation on mobile devices. On desktop environments, the Message chat page appears in the right-side area, allowing for dynamic switching between conversations.

#### Getting Started

#### Import and Declare

To begin, add the [tencent_cloud_chat_conversation](https://pub.dev/packages/tencent_cloud_chat_conversation) UI module to your project.

Once installed, you'll need to register this UI component within the `usedComponentsRegister` parameter of the `TencentCloudChat.controller.initUIKit` method's `components`. Here's an example:
``` dart
    await TencentCloudChat.controller.initUIKit(
      components: TencentCloudChatInitComponentsRelated(
        usedComponentsRegister: [
          TencentCloudChatConversationManager.register, /// Add this line
          /// ...
        ],
      /// ...
      ),
      /// ...
    );
```

#### Instantiate and Use the Component

Using the Conversation component is straightforward. Simply instantiate a `TencentCloudChatConversation` instance and render it on the desired page.

By default, the component will automatically fetch and display all conversation information without requiring any additional parameters.

You can use this instance in the `build` method of the page where you want to display the conversation list.
``` dart
  @override
  Widget build(BuildContext context) {
    return const TencentCloudChatConversation();
  }
```

With just a few lines of code, you can easily integrate the Conversation component into your chat application and display a list of conversations for users to interact with.

#### Customizing Details

##### Using config

For simple and basic configurations, you can use the `config` parameter. The `config` for the Conversation component is provided by the `TencentCloudChatConversationConfig` class.

It includes control options for various data types such as booleans, integers, and custom parameters.

For instance, the `useDesktopMode` configuration determines whether, in a desktop environment and when used in conjunction with the [tencent_cloud_chat_message](https://pub.dev/packages/tencent_cloud_chat_message) component, the component should span the full horizontal space, displaying the conversation list on the left and the `Message` component for the currently selected conversation on the right, with support for dynamic switching.

##### Using builders

For more in-depth UI customization, you can use custom builders. The builders for the Conversation component are provided by the `TencentCloudChatConversationBuilders` class.

The Conversation component provides several builders, like `ConversationItemAvatarBuilder` for displaying the avatar on conversation items, `ConversationItemContentBuilder` for displaying content in conversation items, and `ConversationItemInfoBuilder` for displaying the info within conversation items.

### Message

This component is engineered to enrich your chat applications with a comprehensive messaging experience, offering both essential and advanced chat functionalities.

The Message component is composed of several key elements, including a header for displaying conversation information, a message list view for showcasing message history, and a message input for facilitating message sending. To elevate the user experience, it comes packed with rich animations and interactive details.

At its foundation, the component provides essential chat functionalities such as sending, receiving, copying, forwarding, previewing, and deleting messages, ensuring a seamless chat experience.

To accommodate diverse user needs, it also includes advanced features. Such as message context menu, marking messages as read, displaying group read receipt details, and supporting emoji reactions, to facilitating precise navigation to specific messages, enabling message multi-selection, and offering extensive customization capabilities.

When used in conjunction with the [tencent_cloud_chat_conversation](https://pub.dev/packages/tencent_cloud_chat_conversation) and [tencent_cloud_chat_contact](https://pub.dev/packages/tencent_cloud_chat_contact) components, the Message component enables seamless navigation, eliminating the need for manual navigation implementation. Furthermore, when integrated with the [tencent_calls_uikit](https://pub.dev/packages/tencent_calls_uikit), it provides the ability to initiate voice/video calls, thus enhancing the overall communication experience.

In essence, the Message component empowers you to create engaging, feature-rich chat applications that cater to various user requirements and deliver a delightful user experience.

#### Getting Started

##### Import and Declare

To begin, add the [tencent_cloud_chat_message](https://pub.dev/packages/tencent_cloud_chat_message) UI module to your project.

Once installed, you'll need to register this UI component within the `usedComponentsRegister` parameter of the `TencentCloudChat.controller.initUIKit` method's `components`. Here's an example:
``` dart
    await TencentCloudChat.controller.initUIKit(
      components: TencentCloudChatInitComponentsRelated(
        usedComponentsRegister: [
          TencentCloudChatMessageManager.register, /// Add this line
          /// ...
        ],
      /// ...
      ),
      /// ...
    );
```

If your project incorporates modular components like [tencent_cloud_chat_conversation](https://pub.dev/packages/tencent_cloud_chat_conversation) or [tencent_cloud_chat_contact](https://pub.dev/packages/tencent_cloud_chat_contact) for displaying conversation, contact, or group lists, they will automatically navigate to the Message component from those lists.

If navigation is only required from these built-in components and not from your custom pages, the `Message` component integration is complete with this single step. The UIKit handles navigation transitions internally, eliminating the need for manual coding.

For projects that require navigation from custom pages, refer to the following steps.

#### Navigating to the Message Component

Before navigating, prepare a `TencentCloudChatMessageOptions` instance to specify the conversation for the chat:
``` dart
final messageOptions = TencentCloudChatMessageOptions(
      // Provide either userID or groupID, indicating the conversation for the chat.
      userID: "", // For one-on-one chats, provide the other user's userID
      groupID: "", // For group chats, provide the groupID
    );
```

##### Easy Navigation with One Line of Code

Simply call the `navigateToMessage` method to navigate to the Message component effortlessly:
``` dart
/// Use the messageOptions constructed above
navigateToMessage(context: context, options: messageOptions);
```

##### Manual Navigation

If you need to manually handle navigation, wrap the component within your custom page, or utilize custom features such as `TencentCloudChatMessageController`, start by instantiating a `TencentCloudChatMessage` component.

This provides you with greater control and flexibility when integrating the Message component into your application:
``` dart
// If you need to use the controller, maintain a TencentCloudChatMessageController instance.
final TencentCloudChatMessageController messageController = TencentCloudChatMessageController();

final message = TencentCloudChatMessage(
      // Be sure to provide options. Use the messageOptions constructed above.
      options: messageOptions,

      // If you need to use the controller, provide a controller instance.
      controller: messageController,

      // Other parameters, such as builders, can be specified globally or passed in statically here, depending on your requirements. For detailed usage, refer to the parameter and method comments.
    );
```

You can place this instantiated component in the `build` method of a separate page or use it directly for navigation like using `Navigator.push`.

If you use `TencentCloudChatMessageController`, it is recommended to maintain it within the `State` of a `StatefulWidget`, using a single instance to control the component. For specific usage, see the internal comments.

#### Customizing Details

You can use `builders` and `config` to customize various aspects of the Message component. Both options provide different levels of customization, allowing you to tailor the component to your specific needs.

##### Using config

For simple and basic configurations, you can use the `config` parameter. The `config` for the Message component is provided by the `TencentCloudChatMessageConfig` class.

It includes control options for various data types such as booleans, integers, and custom parameters. Each control option is a method `T Function({String? userID, String? groupID})`  that provides the current conversation's `userID` or `groupID` information. You can use these fields to return the appropriate configuration values.

This approach allows you to define a global `TencentCloudChatMessageConfig` class that will be effective during the automatic navigation process, without the need to manually instantiate a `TencentCloudChatMessage` instance and pass it in. This is because, in most cases, different types of conversations require different configuration parameters.

Here's an example:
``` dart
    final messageConfig = TencentCloudChatMessageConfig(
        // Demonstrating one configuration option.
        // Whether to show other users' avatars in the message list.
        showOthersAvatar: ({userID, groupID}){
          if(userID!=null&&userID.isNotEmpty){
            // If it's a one-on-one chat, don't show the other user's avatar since it's already in the header.
            return false;
          }
          // If it's a group chat, show other users' avatars.
          return true;
        }
    );
```

##### Using builders

For more in-depth UI customization, you can use custom builders. The builders for the Message component are provided by the `TencentCloudChatMessageBuilders` class.

The Message component provides an overall `MessageLayoutBuilder`, which is further divided into three main builders: `MessageListViewBuilder` for displaying the message list, `MessageInputBuilder` for displaying the message input area, and `MessageHeaderBuilder` for displaying the top area. They all basically expose the `String? userID` and `String? groupID` parameters, helping you determine different UI styles based on the conversation type during the automatic navigation process same as `config`.

In addition to these, there are more granular builders to help you customize finer details, such as message rendering and message layout.

Additionally, each builder comes with the required parameters and methods, making data and logic layer methods readily available for use. For example, the `messageInputBuilder` exposes various parameters such as methods for sending different types of messages, current conversation details, group member lists, and more. This allows you to focus on the input area's UI development and directly call the methods we provide for sending messages, speeding up your development process.

### Contact

Introducing the Contact component of the Tencent Cloud Chat UIKit, designed to provide a versatile contact list for your chat applications.

The Contact component offers a contact list that displays all added contacts, sorted by the initial letter of their names. It also supports displaying additional information such as joined group lists, blocked user lists, users who have requested to add you as a contact, and group message notifications.

When used in conjunction with the [tencent_cloud_chat_message](https://pub.dev/packages/tencent_cloud_chat_message) component, the Contact component enables automatic navigation to the corresponding message chat page upon tapping a contact or a group on both mobile and desktop environments. This seamless integration ensures a smooth and organized chat experience for your users.

#### Getting Started

##### Import and Declare

To begin, add the [tencent_cloud_chat_conversation](https://pub.dev/packages/tencent_cloud_chat_conversation) UI module to your project.

Once installed, you'll need to register this UI component within the `usedComponentsRegister` parameter of the `TencentCloudChat.controller.initUIKit` method's `components`. Here's an example:


``` dart
    await TencentCloudChat.controller.initUIKit(
      components: TencentCloudChatInitComponentsRelated(
        usedComponentsRegister: [
          TencentCloudChatContactManager.register, /// Add this line
          /// ...
        ],
      /// ...
      ),
      /// ...
    );
```

##### Instantiate and Use the Component

Using the Contact component is straightforward. Simply instantiate a `TencentCloudChatContact` instance and render it on the desired page.

By default, the component will automatically fetch and display all contact information without requiring any additional parameters.

You can use this instance in the `build` method of the page where you want to display the contact list, along with the entry to joined group lists, blocked user lists, users who have requested to add you as a contact, and group message notifications.
``` dart
  @override
  Widget build(BuildContext context) {
    return const TencentCloudChatContact();
  }
```

With just a few lines of code, you can easily integrate the Contact component into your chat application for users to interact with.

#### Customizing Details

##### Using config

For simple and basic configurations, you can use the `config` parameter. The `config` for the Contact component is provided by the `TencentCloudChatContactConfig` class.

It includes control options for various data types such as booleans, integers, and custom parameters.

##### Using builders

For more in-depth UI customization, you can use custom builders. The builders for the Contact component are provided by the `TencentCloudChatContactBuilders` class.

## Conclusion

We hope that this documentation will help you understand the power and flexibility of our new Flutter Chat UIKit. 
With its modular design and a wide range of customizable options, it provides a comprehensive solution for building chat applications. 
Its advanced features, such as Conversation management, Message handling, and built-in navigation transitions, make it a robust tool for developers.

We look forward to seeing the amazing applications you will create with our UIKit. If you have any questions or need further information, feel free to reach out.

