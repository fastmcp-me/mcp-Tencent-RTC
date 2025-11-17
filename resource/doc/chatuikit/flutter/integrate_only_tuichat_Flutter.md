Flutter Chat UIKit is designed to provide developers with a comprehensive set of tools to create feature-rich chat applications with ease.

It is built with a modular approach, allowing you to choose the components you need while keeping your application lightweight and efficient.

Among them, the `TencentCloudChatMessage` component offers both private messaging (1V1) and group chat features. It supports a variety of operations on messages, such as sending different types of messages, long-pressing to reply or quote messages, and querying details of read receipts.

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/88171fa9126b11efbf645254007bbd8c.png)



【Mobile】

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/2b94a14e128411efa2935254005ac0ca.png)![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/2b895003128411efaa1c525400f65c2a.png)![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/2b9be15d128411ef89cc5254002fd0a8.png)![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/2b85e7f3128411ef83b95254002977b6.png)

【Desktop & Tablet】

**Light**

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/49853d30128411efa2935254005ac0ca.png)




**Dark**

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027812451/49866443128411efbf645254007bbd8c.png)


## Features
1. **Personalized Appearance**: With built-in dark and light modes, the UIKit offers a variety of  theme and appearance customization options to meet your business needs.

2. **Multi-Platform Compatibility**: The adaptable single codebase ensures compatibility across various platforms, including **mobile** devices (iOS/Android), **tablets** (iPad and Android tablets), **web** browsers, and **desktop** environments (Windows/macOS).

3. **Localization Support**: Developed with native English and other language options, including Arabic, Japanese, Korean, Simplified Chinese, and Traditional Chinese. The internationalization features ensure a localized user interface in these languages and support customization and addition of languages, with Arabic featuring support for **RTL** UI.

4. **Enhanced Performance**: The UIKit offers improved performance for message lists, optimized memory usage, and precise message positioning capabilities, catering to scenarios with a large volume of messages and navigation to older messages.

5. **Advanced Features**: The UIKit boasts numerous advanced capabilities, including continuous voice message playback, enhanced multimedia and file message experiences, and intuitive left-right swipe gestures to preview multimedia messages.

6. **Refined User Experience**: Delicate enhancements such as rich animations, haptic feedback, and a polished interface contribute to improved user experiences. New features like grid-style avatars, redesigned forwarding panels, group member selectors, and enhanced long-press message menus further enrich the experiences.

7. **Modular Design**: Components are organized into modular packages, allowing for selective imports and reducing unnecessary bloat. Each package supports built-in navigation transitions, streamlining development and integration by automatically handling transitions, such as those between conversations and messages.

8. **Developer-Friendly Approach**: A more unified and standardized design of component parameters, clearer code naming conventions, and detailed comments, combined with the flexibility to choose between global or instance-level configuration management, make development easier and more efficient.


## Compatibility

Our UIKit supports **mobile**, **tablet**, and **desktop** UI designs, and is compatible with Android, iOS, macOS, Windows, and Web (will be supported in future versions).

It comes with built-in support for English, Simplified Chinese, Traditional Chinese, Japanese, Korean, and Arabic (with support for Arabic RTL interface), and both light and dark appearance modes.

## Requirements
- Flutter version: 3.24 or above

- Dart version: 3.0 or above


## Quick Start

### Importing Packages

#### Base Package

To start using our UIKit, first import the base package, tencent_cloud_chat_common.
``` plaintext
flutter pub add tencent_cloud_chat
```

#### Modular Component Packages

Next, import the modular UI component package for message chat, tencent_cloud_chat_message:
``` plaintext
flutter pub add tencent_cloud_chat_message

```

> **Platform Integration**
> 

> Before proceeding to the Basic Usage section, make sure to complete the integration of additional platforms following the steps outlined here, especially if you are targeting these specific platforms for deployment.
> 
> - **Web / macOS: **If you plan to deploy your project on ***Web*** or ***macOS*** platforms, see [Expanding to More Platforms](https://www.tencentcloud.com/document/product/1047/45907#more).
> - **iOS:** Open `ios/Podfile`, and replace the final section with the following content.
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


### Initializing UIKit

Before you start using each modular package UI component, there are some initial setup steps you need to follow in your project.
1. Prepare the necessary Chat configuration information, such as sdkappid, test userID, and userSig. For more details, see [Prerequisites](https://www.tencentcloud.com/document/product/1047/45907#.E5.89.8D.E5.BA.8F.E5.B7.A5.E4.BD.9C).

2. **Install Packages:**


   In your Flutter project, install the main package and the optional modular packages mentioned in the Quick Start section.

3. **Global Configurations:**


   Import `TencentCloudChatMaterialApp`: Replace your project's `MaterialApp` with `TencentCloudChatMaterialApp`. This enables automatic management and configurations of the language, theme *(with material3)*, theme mode, and other settings. It ensures that the UIKit's interface parameters are consistent with your project.


   This step will take over the language, theme, and theme mode configurations of your project. If you do not want the automatic management of configurations for your project, you can manually import the features you need into your project according to the **following guide**.


   





#### Implementing Global Configurations for UIKit Manually

It is recommended to replace your project's `MaterialApp` with `TencentCloudChatMaterialApp`. This enables automatic management of global configurations, including localization, theme, and theme mode.

However, if you want to retain your project's `MaterialApp` due to extensive customization or the use of other packages such as `Get`, you can manually initialize the UIKit. This guide will help you complete the process.

In the global configurations, localization is required, while the theme and theme mode settings are optional. Let us get started.

##### Required Configurations
- *Localization*


First, import the localization tools into your app's entry file.
``` java
import 'package:tencent_cloud_chat_intl/localizations/tencent_cloud_chat_localizations.dart';
```

Next, add the localization configurations to `MaterialApp` or another entry provided by third-party packages like `GetMaterialApp`.
``` plaintext
MaterialApp(
  localizationsDelegates: const [
    /// Your configurations
    GlobalMaterialLocalizations.delegate,

    /// Add this line
    ...TencentCloudChatLocalizations.localizationsDelegates,  /// Add this line
  ],
  supportedLocales: [
    /// Your configurations
    ...S.delegate.supportedLocales,

    /// Add this line
    ...TencentCloudChatLocalizations.supportedLocales,
  ],
  /// ... Other configurations
)
```

Additionally, you can set the language region `locale` according to your business logic, such as recording the user-specified language upon app's launch, instead of following the system settings. This configuration will apply to both your project and the Chat UIKit.

For more information of customizing localization, including adding or removing languages, adding the localization entry, and modifying translation words, see [Internationalization](https://trtc.io/document/52154?platform=flutter&product=chat&menulabel=uikit).

##### Optional Configurations
- *Theme / Theme Mode*


The UIKit's theme data, defined by the `TencentCloudChatTheme` class, is globally maintained and managed through `TencentCloudChat.dataInstance.theme`.
``` dart
TencentCloudChatTheme theme = TencentCloudChat.dataInstance.theme;
```

This theme instance includes a theme model (including the theme data for both light and dark modes) and brightness (the light and dark mode status).

Furthermore, you can specify the `theme` and `darkTheme` from `MaterialApp` using the Material 3 style theme data that we provide for both light and dark modes. You can also set the `themeMode` status based on the brightness status we maintain. This ensures a consistent appearance across your application and our Chat UIKit and enhances the user experiences. (You can customize this theme style as described below.)

To achieve this, we recommend converting your entry widget (which hosts the `MaterialApp`) into a `StatefulWidget`. Add a `TencentCloudChatTheme theme` as part of its state, and listen to `Stream<TencentCloudChatTheme>? themeDataListener` to update its value and build the app based on dynamic, and customizable theme data. Here is the sample code:
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


1. **Initialization and Log-in**:


   Call the `TencentCloudChat.controller.initUIKit` method to initialize and log in. The call instructions and reference code are as follows:
   

   > **Note:**
   > 

   > We highly recommend configuring the `callbacks` to efficiently handle SDK API errors and specific UIKit events that require user attention through `Dialog` or `Tooltip` in a customizable way.
   > 

   ``` java
   await TencentCloudChat.controller.initUIKit(
     config: TencentCloudChatConfig(), /// [Optional]: The global configurations that affecting the whole chat interface, including user configurations and theme configurations.
     options: TencentCloudChatInitOptions(
       sdkAppID: , /// [Required]: The SDKAppID of your Tencent Cloud chat application.
       userID: , /// [Required]: The userID of the logged-in user.
       userSig: , /// [Required]: The userSig of the logged-in user.
     ),
   
     components: TencentCloudChatInitComponentsRelated( /// [Required]: Modular UI component settings, effective globally.
       usedComponentsRegister: [
         /// [Required]: List of registration functions for the components used in the chat interface.
         /// Simply use the `register` from TencentCloudChatMessage.
         TencentCloudChatMessageManager.register,
       ],
       componentConfigs: TencentCloudChatComponentConfigs(
         /// [Optional]: Provide custom configurations for each UI modular component here. These builders will be applied globally.
       ),
       componentBuilders: TencentCloudChatComponentBuilders(
         /// [Optional]: Provide custom UI builders for each UI modular component here. These builders will be applied globally.
       ),
       componentEventHandlers: TencentCloudChatComponentEventHandlers(
         /// [Optional]: Provide custom event handlers for UI component events here. These builders will be applied globally.
       ),
     ),
   
     /// [Critical]: It is strongly recommended to incorporate the following callback listeners for effectively managing SDK events, SDK API errors and specific UIKit events that require user attention.
     /// For detailed usage, see the Integrating UIKit Callbacks section at the end of this README document.
     callbacks: TencentCloudChatCallbacks(
       onTencentCloudChatSDKEvent: V2TimSDKListener(),  /// [Optional]: Handles SDK events, such as onKickedOffline and onUserSigExpired.
       onTencentCloudChatSDKFailCallback: (apiName, code, desc) {}, /// [Optional]: Handles SDK API errors.
       onTencentCloudChatUIKitUserNotificationEvent: (TencentCloudChatComponentsEnum component, TencentCloudChatUserNotificationEvent event) {}, /// [Optional]: Handles specific UIKit events that require user attention on a global scale.across the entire application scope.
     ),
   
     plugins: [],  /// [Optional]: Used plugins, such as tencent_cloud_chat_robot. For specific usage, see the README document of each plugin.
   );
   ```

### Initiating a Chat

Chat UIKit offers a comprehensive solution for creating a chat module for users.

By directing to the `TencentCloudChatMessage` with the specified chat user options, you can seamlessly set up a chat module for them. This caters to both one-on-one and group chats.

#### Automatically navigate to the message component.

With the built-in auto-navigation feature, initiating a chat can be easily achieved by calling the `navigateToMessage` method with `TencentCloudChatMessageOptions`, as shown below:
``` dart
final messageOptions = TencentCloudChatMessageOptions(
      // Provide either userID or groupID to indicate the conversation for the chat.
      userID: "", // For one-on-one chats, provide the other user's userID.
      groupID: "", // For group chats, provide the groupID.
    );
/// Use the messageOptions constructed above.
navigateToMessage(context: context, options: messageOptions);
```

By offering either a userID or groupID, the chat conversation can be effortlessly initiated for one-on-one or group chats.

#### Manually Navigating to the Message Component

If you need to manually handle navigation, or wrap the component within your custom pages, then you should instantiate a `TencentCloudChatMessage` component.
``` dart
final messageOptions = TencentCloudChatMessageOptions(
      // Provide either userID or groupID to indicate the conversation for the chat.
      userID: "", // For one-on-one chats, provide the other user's userID.
      groupID: "", // For group chats, provide the groupID.
    );
    
final Widget message = TencentCloudChatMessage(
      options: messageOptions,

      // ... Other parameters, such as builders, can be specified globally or passed in statically here based on your requirements. For detailed usage, see the parameter and method comments.
    );
```

You can place this instantiated component in the `build` method of a separate page or use it directly for navigation like using `Navigator.push`.

## Advanced Usage

Once you have implemented the basic usage steps, you will have a chat message module in your project with a default user interface and business logic. However, if these defaults do not fully align with your business requirements, there are several ways to customize the module:
- Controller: Use the controller to manage the message widgets. This could involve sending additional messages as needed, and scrolling the message list.

- Config: Adjust basic settings using the config.

- Builders: Further customize the UI widgets with the builder. Each builder is equipped with data (essential parameters for building a custom widget), methods (business logic methods), and widgets (the default atomized widgets for each builder).

- EventHandlers: Attach listeners to `eventHandlers` to manage component-specific events. This includes `uiEventHandlers` (such as various events like `onTap`) and `lifeCycleEventHandlers` (such as events triggered after a message has been sent).


   These advanced implementation methods are consistent across all Chat UIKit components. For a deeper understanding of these advanced features, you can see [**Advanced Usage**](https://trtc.io/document/58585?platform=flutter&product=chat&menulabel=uikit#93becf46-25ac-456b-bd4c-38db387d8149).


   The above steps provide a quick guide to integrating the message chat component individually. If you wish to understand the complete usage of Chat UIKit or have any unresolved issues, see [**UIKit Integration Documentation**](https://trtc.io/document/58585?platform=flutter&product=chat&menulabel=uikit).
