This article introduces how to integrate `TUIKit` components. 

> **Note:**
> 
> - Starting from version 5.7.1435, TUIKit supports modular integration and the classic UI. You can integrate the necessary modules according to your needs.
> - Starting from version 6.9.3557, TUIKit introduces a brand new minimalist UI.


You can freely choose between the classic or minimalist UI components according to your needs. If you are not familiar with the effects of the interface libraries, you can refer to the document [TUIKit Overview](https://www.tencentcloud.com/document/product/1047/50062).

## Environment Requirements
- Android Studio-Giraffe 

- Gradle-7.2

- Android Gradle Plugin Version-7.0.0

- kotlin-gradle-plugin-1.5.31


## Integrate Module Source Code
1. Download the TUIKit source code from [GitHub](https://github.com/TencentCloud/chat-uikit-android). Ensure that the TUIKit folder is at the same level as your project folder, for example:


   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027983637/8ea160a453a211ee84f2525400494e51.png)

2. Add the corresponding TUIKit components to settings.gradle according to your business requirements. TUIKit components are independent of each other, and adding or removing them does not affect project compilation.

   ``` java
   // Include the upper-layer app module
   include ':app'
   
   // Include the internal communication module (required module)
   include ':tuicore'
   project(':tuicore').projectDir = new File(settingsDir, '../TUIKit/TUICore/tuicore')
   
   // Include the common module of IM component (required module)
   include ':timcommon'
   project(':timcommon').projectDir = new File(settingsDir, '../TUIKit/TIMCommon/timcommon')
   
   // Include the chat feature module (basic feature module)
   include ':tuichat'
   project(':tuichat').projectDir = new File(settingsDir, '../TUIKit/TUIChat/tuichat')
   
   // Include the relationship chain feature module (basic feature module)
   include ':tuicontact'
   project(':tuicontact').projectDir = new File(settingsDir, '../TUIKit/TUIContact/tuicontact')
   
   // Include the conversation list feature module (basic feature module)
   include ':tuiconversation'
   project(':tuiconversation').projectDir = new File(settingsDir, '../TUIKit/TUIConversation/tuiconversation')
   
   // Include the search feature module (To use this module, you need to purchase the Pro edition、Pro Plus edition or Enterprise edition)
   include ':tuisearch'
   project(':tuisearch').projectDir = new File(settingsDir, '../TUIKit/TUISearch/tuisearch')
   
   // Include the community topic feature module (To use this module, you need to purchase the Pro edition、Pro Plus edition or Enterprise edition)
   include ':tuicommunity'
   project(':tuicommunity').projectDir = new File(settingsDir, '../TUIKit/TUICommunity/tuicommunity')
   
   // Include the audio/video call feature module
   include ':tuicallkit-kt'
   project(':tuicallkit-kt').projectDir = new File(settingsDir, '../TUIKit/TUICallKit/tuicallkit-kt')
   
   // Include the video conference module
   include ':tuiroomkit'
   project(':tuiroomkit').projectDir = new File(settingsDir, '../TUIKit/TUIRoomKit/tuiroomkit')
   
   // Include speech-to-text plugin, supported from version 7.5
   include ':tuivoicetotextplugin'
   project(':tuivoicetotextplugin').projectDir = new File(settingsDir, '../TUIKit/TUIVoiceToTextPlugin/tuivoicetotextplugin')
   
   // Include chat message translation plugin, supported from version 7.2 (Value-added feature activation is required. Please contact Tencent Cloud sales)
   include ':tuitranslationplugin'
   project(':tuitranslationplugin').projectDir = new File(settingsDir, '../TUIKit/TUITranslationPlugin/tuitranslationplugin')
   
   // Include emoji reaction plugin, supported from version 7.8 (To use this module, you need to purchase the Pro Edition、Pro Plus edition or Enterprise edition)
   include ':tuiemojiplugin'
   project(':tuiemojiplugin').projectDir = new File(settingsDir, '../TUIKit/TUIEmojiPlugin/tuiemojiplugin')
   ```
3. Add the following to `build.gradle` in App:

   ``` java
   dependencies {
    api project(':tuiconversation')
    api project(':tuicontact')
    api project(':tuichat')
    api project(':tuisearch')
    api project(':tuicommunity')
    api project(':tuicallkit-kt') 
    api project(':tuiroomkit') 
    // Integrate speech-to-text plugin, supported from version 7.5
    api project(':tuivoicetotextplugin') 
    // Integrate translation plugin, supported from version 7.2 (Value-added feature activation is required. Please contact Tencent Cloud sales)
    api project(':tuitranslationplugin')
    // Integrate emoji reaction plugin, supported from version 7.8 (To use this module, you need to purchase the Premium Edition)
    api project(':tuiemojiplugin')
    // Integrate group chain plugin, supported from version 7.1
    api 'com.tencent.imsdk:tuigroupnote-plugin:8.4.6667'
    // Integrate group voting plugin, supported from version 7.1
    api 'com.tencent.imsdk:tuipoll-plugin:8.4.6667'
    // Integrate session grouping plugin, supported from version 7.3
    api 'com.tencent.imsdk:tuiconversationgroup-plugin:8.4.6667'
    // Integrate session tagging plugin, supported from version 7.3
    api 'com.tencent.imsdk:tuiconversationmark-plugin:8.4.6667'
    // Integrate message push plugin, supported from version 7.6
    api 'com.tencent.timpush:timpush:8.4.6667'
    // Integrate the corresponding manufacturer's push package as needed
    api 'com.tencent.timpush:fcm:8.4.6667'
    api 'com.tencent.timpush:xiaomi:8.4.6667'
    api 'com.tencent.timpush:meizu:8.4.6667'
    api 'com.tencent.timpush:oppo:8.4.6667'
    api 'com.tencent.timpush:vivo:8.4.6667'
    api 'com.tencent.timpush:huawei:8.4.6667'
    api 'com.tencent.timpush:honor:8.4.6667'
   }
   ```
4. Add the following to the `gradle.properties` file to automatically convert third-party libraries to use AndroidX:

   ``` java
   android.enableJetifier=true
   ```
5. 

Add the following to the `build.gradle` file (in the same level as `settings.gradle`) of the root project to add the Maven repository and


   

Kotlin support:  

   ``` java
   buildscript {
    repositories {
        mavenCentral()
        maven { url "https://mirrors.tencent.com/nexus/repository/maven-public/" }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:7.0.0'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.5.31"
    }
   }
   ```

   If you use Gradle 8.x, you need to add the following code.

   ``` java
   buildscript {
    repositories {
        mavenCentral()
        maven { url "https://mirrors.tencent.com/nexus/repository/maven-public/" }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:8.0.2'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.9.0"
    }
   }
   ```   

   > **Note:**
   > 
>   - The compatibility between Kotlin, Gradle, and AGP versions can be [viewed here](https://kotlinlang.org/docs/gradle-configure-project.html#apply-the-plugin).
>   - To respect the copyright of emoji designs, the Chat Demo/TUIKit project does not include cutouts of large emoji elements. Please replace them with your own designs or other emoji packs for which you hold the copyright before officially launching for commercial use. **The default smiley face emoji pack shown below is copyrighted by Tencent RTC** and is available for licensed use for a fee. If you need to obtain a license, please [contact us](https://trtc.io/contact).

   > ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027202808/401fe37097f711ef834b525400f69702.png)
   > 

6. Sync the project, and compile and run it. The expected project structure is shown in the following figure:


   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027983637/da00968953a211eeabd75254005810a4.png)

7. **[Optional] **Delete unnecessary UI files
The classic and minimalist UI do not affect each other, and they can run independently. Their files are in separate folders. Take TUIChat as an example:


   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027983637/edcee21253a211eeabd75254005810a4.png)


   The `classicui` folder stores the classic version UI files, while the `minimalistui` folder stores the minimalist version UI files. If you are to integrate the minimalist UI, just delete the classicui folder, Activity and Service in the AndroidManifest.xml file.
   

   > **Note：**
   > 

   > The Classic and Minimalist UI cannot be mixed. When integrating multiple components, you must choose classic UI or minimalist UI at the same time. For instance, the Classic TUIChat component must be used with the Classic versions of the TUIConversation, TUIContact, and TUIGroup. Similarly, the Minimalist version of the TUIChat component must be paired with the Minimalist versions of the TUIConversation, TUIContact, and TUIGroup.
   > 


## Build Basic Interfaces

After integrating TUIKit, if you want to continue building basic interfaces for chat, conversation list, etc., please refer to the document: [Build Chat](https://www.tencentcloud.com/document/product/1047/61214), [Build Conversation List.](https://www.tencentcloud.com/document/product/1047/61216)

## FAQs
- **How to handle error "Manifest merger failed : Attribute application@allowBackup value=(true) from AndroidManifest.xml"?**


   In the Chat SDK, the value of `allowBackup` is `false` by default, indicating that the backup and restore feature of the app is disabled.
You can delete the `allowBackup` property from the `AndroidManifest.xml` file to disable the backup and restore feature. You can also add `tools:replace="android:allowBackup"` to the `application` node of the `AndroidManifest.xml` file to overwrite the Chat SDK configuration with your own configuration. 


   For example:

   ``` css
   <manifest xmlns:android="http://schemas.android.com/apk/res/android"
       xmlns:tools="http://schemas.android.com/tools"
       package="com.tencent.qcloud.tuikit.myapplication">
   
       <application
           android:allowBackup="true"
           android:name=".MApplication"
           android:icon="@mipmap/ic_launcher"
           android:label="@string/app_name"
           android:roundIcon="@mipmap/ic_launcher_round"
           android:supportsRtl="true"
           android:theme="@style/Theme.MyApplication"
           tools:replace="android:allowBackup">
           <activity android:name=".MainActivity">
               <intent-filter>
                   <action android:name="android.intent.action.MAIN" />
                   <category android:name="android.intent.category.LAUNCHER" />
               </intent-filter>
           </activity>
       </application>
   
   </manifest>
   ```
- **How to handle error "NDK at /Users/***/Library/Android/sdk/ndk-bundle did not have a source.properties file"?**


   You only need to add you NDK path to the `local.properties` file. For example: `ndk.dir=/Users/***/Library/Android/sdk/ndk/16.1.4479499`

- **How to handle error "Cannot fit requested classes in a single dex file"?**


   The possible cause is that your API level is lower than expected. You need to enable `MultiDex` support in the `build.gradle` file in App and add `multiDexEnabled true` and the corresponding dependencies:

   ``` groovy
   android {
       defaultConfig {
           ...
           minSdkVersion 19
           targetSdkVersion 30
           multiDexEnabled true
       }
       ...
   }
   dependencies {
       implementation "androidx.multidex:multidex:2.0.1"
   }
   ```

   In addition, add the following code to the Application file:

   ``` java
   public class MyApplication extends SomeOtherApplication {
       @Override
       protected void attachBaseContext(Context base) {
           super.attachBaseContext(base);
           MultiDex.install(this);
       }
   }
   ```
- **How to handle error "Plugin with id 'kotlin-android' not found."?**


   Because TUIChat uses Kotlin code, you need to add the Kotlin build plug-in. For details, see [Step 5](https://write.woa.com/document/108053209726623744) above.

- **Why the App function of the Debug version is normal and the App function of the Release version is abnormal？**


   This issue is very likely caused by ProGuard. Please try to avoid ProGuarding TUIKit. You can add the following rule:                 

   ``` typescript
   # Avoid deleting code logic
   -dontshrink
   -dontoptimize
   # Avoid aliasing TUIKit
   -keep class com.tencent.qcloud.** { *; }
   ```

## Contact Us

If you have any questions about this article, feel free to join the [Telegram Technical Group](https://t.me/+EPk6TMZEZMM5OGY1), where you will receive reliable technical support.



