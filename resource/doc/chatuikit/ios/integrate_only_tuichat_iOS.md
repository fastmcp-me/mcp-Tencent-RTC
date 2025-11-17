This article will introduce how to integrate the `TUIChat` chat component.

> **Note:**
> 
> - Starting from version 5.7.1435, TUIChat supports the classic version of UI components.
> - Starting from version 6.9.3557, TUIChat introduced a brand new minimalist version of UI components.


You can freely choose between the classic or minimalist version of UI components according to your needs.

## Display Effect

TUIChat offers both private chat (1V1) and group chat (Group) features, supporting multiple operations on messages, such as sending different types of messages, long pressing a message to like/reply/quote, and querying message read receipt details.

You can integrate TUIChat into your app alone. The chat interface has a wide range of usage scenarios, such as real estate agency consultation, online medical consultation, e-commerce online customer service, and remote loss assessment for insurance.
The UI effect is as shown below:



【Minimalist version】
<table>
<tr>
<td rowspan="1" colSpan="1" >Message UI \| Sending Different Types of Messages</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027983637/4d42262a671d11ee94c3525400d793d0.png)</td>
</tr>
</table>

<table>
<tr>
<td rowspan="1" colSpan="1" >Message Reaction \| Reply  </td>
</tr>

<tr>
<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027983637/4d3af3da671d11eeabd75254005810a4.png)</td>
</tr>
</table>

<table>
<tr>
<td rowspan="1" colSpan="1" >Message Read Receipt \| Read Receipt Details</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027983637/4d22e788671d11eeabd75254005810a4.png)</td>
</tr>
</table>


【RTL Language】
<table>
<tr>
<td rowspan="1" colSpan="1" >Message Interface \| Sending Multiple Types of Messages</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/3d6c2fcf050811efa63c525400d4e181.png)</td>
</tr>
</table>

<table>
<tr>
<td rowspan="1" colSpan="1" >Message Reaction \| Reply</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/3d87fa02050811efa1745254009d370c.png)</td>
</tr>
</table>

<table>
<tr>
<td rowspan="1" colSpan="1" >Message Read Receipt \| Read Receipt Details</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/3d7c7690050811ef935552540018d80a.png)</td>
</tr>
</table>


【Classic version】
<table>
<tr>
<td rowspan="1" colSpan="1" >Message UI</td>

<td rowspan="1" colSpan="1" >Sending Different Types of Messages</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/3037869c165611efb8ef5254002fd0a8.png)</td>

<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/2430e9c6050a11efa6b6525400488742.png)</td>
</tr>
</table>

<table>
<tr>
<td rowspan="1" colSpan="1" >Message Likes/Reply/Quoting</td>

<td rowspan="1" colSpan="1" >Message Reply Details</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/2431df92050a11efa6b6525400488742.png)</td>

<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/3947dc61165611ef947052540019e87e.png)</td>
</tr>
</table>

<table>
<tr>
<td rowspan="1" colSpan="1" >Message Read Receipt</td>

<td rowspan="1" colSpan="1" >Message Read Receipt Details</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/6ae50a95165611efb8ef5254002fd0a8.png)</td>

<td rowspan="1" colSpan="1" ><br>![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/2424cca6050a11efa7e752540052a3fc.png)</td>
</tr>
</table>


## Environment Requirements
- Xcode 10 or later

- iOS 9.0 or later


## CocoaPods Integration
1. Install CocoaPods
Enter the following command in a terminal (you need to install Ruby on your Mac first):

   ``` bash
   sudo gem install cocoapods
   ```
2. Create a Podfile
Go to the path where the project is located and run the following command. Then, a Podfile will appear under the project path.

   ``` bash
   pod init
   ```
3. Add the corresponding TUIKit components to your Podfile according to your needs. Components are independent of each other, and adding or removing them will not affect project compilation. You can choose different Podfile integration methods as needed:

  - Remote CocoaPods Integration

  - Local Integration of DevelopmentPods


      The pros and cons of the above two integration methods are shown in the following table:

<table>
<tr>
<td rowspan="1" colSpan="1" >Integration methods</td>

<td rowspan="1" colSpan="1" >Suitable Scenarios</td>

<td rowspan="1" colSpan="1" >Advantage</td>

<td rowspan="1" colSpan="1" >Disadvantage</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Remote CocoaPods Integration</td>

<td rowspan="1" colSpan="1" >Suitable for integration without source code modifications.</td>

<td rowspan="1" colSpan="1" >When there is a version update of TUIKit, you only need to `Pod update` again to complete the update.</td>

<td rowspan="1" colSpan="1" >When you have modifications to the source code, using `Pod update` to update will overwrite your modifications with the new version of TUIKit.</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Local DevelopmentPods Integration</td>

<td rowspan="1" colSpan="1" >Suitable for customers who have custom modifications to the source code</td>

<td rowspan="1" colSpan="1" >When you have your own git repository, you can track changes. After modifying the source code, using `Pod update` to update other remote Pod libraries will not overwrite your modifications.</td>

<td rowspan="1" colSpan="1" >You need to manually overwrite your local TUIKit folder with the TUIKit source code to update.</td>
</tr>
</table>


### Remote CocoaPods

You can add the TUIChat library in the Podfile:



【Minimalist version】




【Swift】
``` bash
# Uncomment the next line to define a global platform for your project.
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '13.0'
# Prevent `*.xcassets` in TUIChat components from conflicting with your project.
install! 'cocoapods', :disable_input_output_paths => true

# Replace `your_project_name` with your actual project name.
target 'your_project_name' do
  use_frameworks!
  use_modular_headers!

  # Integrate the chat feature.
  pod 'TUIChat_Swift/UI_Minimalist' 
end

#Pods config
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|                
            #Fix Xcode14 Bundle target error
            config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
            config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
            config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
            config.build_settings['ENABLE_BITCODE'] = "NO"
            config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = "13.0"
            #Fix Xcode15 other links  flag  -ld64
            xcode_version = `xcrun xcodebuild -version | grep Xcode | cut -d' ' -f2`.to_f
            if xcode_version >= 15
              xcconfig_path = config.base_configuration_reference.real_path
              xcconfig = File.read(xcconfig_path)
              if xcconfig.include?("OTHER_LDFLAGS") == false
                xcconfig = xcconfig + "\n" + 'OTHER_LDFLAGS = $(inherited) "-ld64"'
              else
                if xcconfig.include?("OTHER_LDFLAGS = $(inherited)") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS", "OTHER_LDFLAGS = $(inherited)")
                end
                if xcconfig.include?("-ld64") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS = $(inherited)", 'OTHER_LDFLAGS = $(inherited) "-ld64"')
                end
              end
              File.open(xcconfig_path, "w") { |file| file << xcconfig }
            end
        end
    end
end
```


【Objective-C】
``` bash
# Uncomment the next line to define a global platform for your project.
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '13.0'
# Prevent `*.xcassets` in TUIChat components from conflicting with your project.
install! 'cocoapods', :disable_input_output_paths => true

# Replace `your_project_name` with your actual project name.
target 'your_project_name' do
  use_frameworks!

  # Enable modular headers as needed. Only after you enable modular headers, the Pod module can be imported using @import.
  # use_modular_headers!

  # Integrate the chat feature.
  pod 'TUIChat/UI_Minimalist' 
end

#Pods config
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|                
            #Fix Xcode14 Bundle target error
            config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
            config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
            config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
            config.build_settings['ENABLE_BITCODE'] = "NO"
            config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = "13.0"
            #Fix Xcode15 other links  flag  -ld64
            xcode_version = `xcrun xcodebuild -version | grep Xcode | cut -d' ' -f2`.to_f
            if xcode_version >= 15
              xcconfig_path = config.base_configuration_reference.real_path
              xcconfig = File.read(xcconfig_path)
              if xcconfig.include?("OTHER_LDFLAGS") == false
                xcconfig = xcconfig + "\n" + 'OTHER_LDFLAGS = $(inherited) "-ld64"'
              else
                if xcconfig.include?("OTHER_LDFLAGS = $(inherited)") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS", "OTHER_LDFLAGS = $(inherited)")
                end
                if xcconfig.include?("-ld64") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS = $(inherited)", 'OTHER_LDFLAGS = $(inherited) "-ld64"')
                end
              end
              File.open(xcconfig_path, "w") { |file| file << xcconfig }
            end
        end
    end
end
```

【Classic version】




【Swift】
``` bash
# Uncomment the next line to define a global platform for your project.
source 'https://github.com/CocoaPods/Specs.git'
# Prevent `*.xcassets` in TUIChat components from conflicting with your project.
install! 'cocoapods', :disable_input_output_paths => true

# Replace your_project_name with your actual project name.
target 'your_project_name' do
  use_frameworks!
  use_modular_headers!
  
  # Integrate the chat feature.
  pod 'TUIChat_Swift/UI_Classic' 
end

#Pods config
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|                
            #Fix Xcode14 Bundle target error
            config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
            config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
            config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
            config.build_settings['ENABLE_BITCODE'] = "NO"
            config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = "13.0"
            #Fix Xcode15 other links  flag  -ld64
            xcode_version = `xcrun xcodebuild -version | grep Xcode | cut -d' ' -f2`.to_f
            if xcode_version >= 15
              xcconfig_path = config.base_configuration_reference.real_path
              xcconfig = File.read(xcconfig_path)
              if xcconfig.include?("OTHER_LDFLAGS") == false
                xcconfig = xcconfig + "\n" + 'OTHER_LDFLAGS = $(inherited) "-ld64"'
              else
                if xcconfig.include?("OTHER_LDFLAGS = $(inherited)") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS", "OTHER_LDFLAGS = $(inherited)")
                end
                if xcconfig.include?("-ld64") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS = $(inherited)", 'OTHER_LDFLAGS = $(inherited) "-ld64"')
                end
              end
              File.open(xcconfig_path, "w") { |file| file << xcconfig }
            end
        end
    end
end
```


【Objective-C】
``` bash
# Uncomment the next line to define a global platform for your project.
source 'https://github.com/CocoaPods/Specs.git'
# Prevent `*.xcassets` in TUIChat components from conflicting with your project.
install! 'cocoapods', :disable_input_output_paths => true

# Replace your_project_name with your actual project name.
target 'your_project_name' do
  use_frameworks!

  # Enable modular headers as needed. Only after you enable modular headers, the Pod module can be imported using @import.
  # use_modular_headers!
  
  # Integrate the chat feature.
  pod 'TUIChat/UI_Classic' 
end

#Pods config
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|                
            #Fix Xcode14 Bundle target error
            config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
            config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
            config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
            config.build_settings['ENABLE_BITCODE'] = "NO"
            config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = "13.0"
            #Fix Xcode15 other links  flag  -ld64
            xcode_version = `xcrun xcodebuild -version | grep Xcode | cut -d' ' -f2`.to_f
            if xcode_version >= 15
              xcconfig_path = config.base_configuration_reference.real_path
              xcconfig = File.read(xcconfig_path)
              if xcconfig.include?("OTHER_LDFLAGS") == false
                xcconfig = xcconfig + "\n" + 'OTHER_LDFLAGS = $(inherited) "-ld64"'
              else
                if xcconfig.include?("OTHER_LDFLAGS = $(inherited)") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS", "OTHER_LDFLAGS = $(inherited)")
                end
                if xcconfig.include?("-ld64") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS = $(inherited)", 'OTHER_LDFLAGS = $(inherited) "-ld64"')
                end
              end
              File.open(xcconfig_path, "w") { |file| file << xcconfig }
            end
        end
    end
end
```

> **Note:**
> 
> - If you directly use `pod 'TUIChat'` without specifying classic or minimalist, it will integrate both UI component versions by default. 
> - If you are using Swift, please enable `use_modular_headers!`, and change the header file reference to @import reference.


After modifying the Podfile, run the following command to install the TUIChat components.
``` bash
pod install
```

If you cannot install the latest version of TUIChat, run the following command to update the local CocoaPods repository list.
``` bash
pod repo update
```

Then run the following command to update the Pod version of the component library.
``` bash
pod update
```

After TUIChat components is integrated, the project structure is as follows:

![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027870539/2efee3f4133211efa2935254005ac0ca.png)


> **Note:**
> 

> If you encounter any errors in the process, you can refer to the FAQs at the end of the document.
> 


### Local DevelopmentPods
1. Download the TUIChat source code from GitHub. Drag it directly into your project directory, such as: `TestTUIKitIM/TUIKit/TUIChat`.

  1. [Swift TUIChat in Github](https://github.com/Tencent-RTC/Chat_UIKit/tree/main/Swift/TUIKit)

      ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/e63914b43b9e11f0aa9f5254001c06ec.png)

  2. [Objective-C TUIChat in Github](https://github.com/TencentCloud/TIMSDK/tree/master/iOS/TUIKit)

      ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/1a1acf5603b011ef935552540018d80a.png)

2. Modify the local path of each component in your Podfile. The path is the location of the TUIChat folder relative to your project's Podfile file. Common ones include:

  - If the TUIChat folder is in the **parent directory** of your project's Podfile: `pod 'TUIChat', :path => "../TUIKit/TUIChat"`

  - If the TUIChat folder is in the **current directory** of your project's Podfile: `pod 'TUIChat', :path => "/TUIKit/TUIChat"`

  - If the TUIChat folder is in a **subdirectory** of your project's Podfile: `pod 'TUIChat', :path => "./TUIKit/TUIChat"`


      Taking the TUIChat folder located in the parent directory of your project's Podfile as an example:


      

【Development Podfile】




【Swift】
``` bash
# Uncomment the next line to define a global platform for your project.
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '13.0'
install! 'cocoapods', :disable_input_output_paths => true

# Replace `your_project_name` with your actual project name.
target 'your_project_name' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks.
  use_frameworks!
  use_modular_headers!

  # Note: When using the local integration solution, upgrade by downloading the latest component code from https://github.com/TencentCloud/TIMSDK/tree/master/iOS/TUIKit/TUIChat
  # and placing it in the designated local directory, such as /TIMSDK/ios/TUIKit/TUIChat
  # Note: When private modifications conflict with remote changes, manual merging is required to resolve conflicts.
  
  # Integrate the basic library (required).
  pod 'TUICore', :path => "../TUIKit/TUICore"
  pod 'TIMCommon_Swift', :path => "../TUIKit/TIMCommon"
  
  # Integrate the chat feature.
  pod 'TUIChat_Swift', :path => "../TUIKit/TUIChat"

  # Other Pod
  pod 'MJRefresh'
  pod 'SnapKit'
end

#Pods config
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|                
            #Fix Xcode14 Bundle target error
            config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
            config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
            config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
            config.build_settings['ENABLE_BITCODE'] = "NO"
            config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = "13.0"
            #Fix Xcode15 other links  flag  -ld64
            xcode_version = `xcrun xcodebuild -version | grep Xcode | cut -d' ' -f2`.to_f
            if xcode_version >= 15
              xcconfig_path = config.base_configuration_reference.real_path
              xcconfig = File.read(xcconfig_path)
              if xcconfig.include?("OTHER_LDFLAGS") == false
                xcconfig = xcconfig + "\n" + 'OTHER_LDFLAGS = $(inherited) "-ld64"'
              else
                if xcconfig.include?("OTHER_LDFLAGS = $(inherited)") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS", "OTHER_LDFLAGS = $(inherited)")
                end
                if xcconfig.include?("-ld64") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS = $(inherited)", 'OTHER_LDFLAGS = $(inherited) "-ld64"')
                end
              end
              File.open(xcconfig_path, "w") { |file| file << xcconfig }
            end
        end
    end
end
```


【Objective-C】
``` bash
# Uncomment the next line to define a global platform for your project.
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '13.0'
install! 'cocoapods', :disable_input_output_paths => true

# Replace `your_project_name` with your actual project name.
target 'your_project_name' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks.
  use_frameworks!
  use_modular_headers!

  # Note: When using the local integration solution, upgrade by downloading the latest component code from https://github.com/TencentCloud/TIMSDK/tree/master/iOS/TUIKit/TUIChat
  # and placing it in the designated local directory, such as /TIMSDK/ios/TUIKit/TUIChat
  # Note: When private modifications conflict with remote changes, manual merging is required to resolve conflicts.
  
  # Integrate the basic library (required).
  pod 'TUICore', :path => "../TUIKit/TUICore"
  pod 'TIMCommon', :path => "../TUIKit/TIMCommon"
  
  # Integrate the chat feature.
  pod 'TUIChat', :path => "../TUIKit/TUIChat"

  # Other Pod
  pod 'MJRefresh'
  pod 'Masonry'
end

#Pods config
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|                
            #Fix Xcode14 Bundle target error
            config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
            config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
            config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
            config.build_settings['ENABLE_BITCODE'] = "NO"
            config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = "13.0"
            #Fix Xcode15 other links  flag  -ld64
            xcode_version = `xcrun xcodebuild -version | grep Xcode | cut -d' ' -f2`.to_f
            if xcode_version >= 15
              xcconfig_path = config.base_configuration_reference.real_path
              xcconfig = File.read(xcconfig_path)
              if xcconfig.include?("OTHER_LDFLAGS") == false
                xcconfig = xcconfig + "\n" + 'OTHER_LDFLAGS = $(inherited) "-ld64"'
              else
                if xcconfig.include?("OTHER_LDFLAGS = $(inherited)") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS", "OTHER_LDFLAGS = $(inherited)")
                end
                if xcconfig.include?("-ld64") == false
                  xcconfig = xcconfig.sub("OTHER_LDFLAGS = $(inherited)", 'OTHER_LDFLAGS = $(inherited) "-ld64"')
                end
              end
              File.open(xcconfig_path, "w") { |file| file << xcconfig }
            end
        end
    end
end
```

3. After modifying the Podfile, run the following command to install the local TUIChat component. Example:

   ``` bash
   pod install
   ```   

   > **Note:**
   > 
>   - When using the local integration scheme, you can go to Github TUIChat for upgrades if needed.
>   - Get the latest component code and overwrite the local directory, such as: TIMSDK/iOS/TUIKit/TUIChat.
>   - When private modifications conflict with the remote version, manual merging is required to resolve conflicts.
>   - The TUIChat plugin requires a specific version of TUICore. Make sure the plugin version matches the spec.version in "../TUIKit/TUICore/TUICore.spec".
>   - If you encounter any errors in the process, you can refer to the FAQs at the end of the document.


## Build Chat Interface

After integrating TUIChat, if you want to continue building the chat interface, please refer to the document: [Build Chat Interface](https://write.woa.com/document/147637893719252992).

## FAQs

### Xcode15 Issues
- **Integration error: [Xcodeproj] Unknown object version (60). (RuntimeError)**


   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4c4185e82d1f11ef97da5254007d9c55.png)


   When creating a new project in Xcode15 to integrate TUIChat and entering `pod install`, you may encounter this problem due to using an older version of CocoaPods. There are two solutions:


   Solution 1: Change the Xcode project's `Project Format` version to Xcode13.0.

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4bc0787a2d1f11efb0275254006c0558.png)


   Solution 2: Upgrade your local version of CocoaPods. The upgrade method will not be elaborated here.

- **Assertion failed: (false && "compact unwind compressed function offset doesn't fit in 24 bits"), function operator(), file Layout.cpp.**

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4bc38c682d1f11ef918f52540005b090.png)


   Or, when integrating TUIRoom with XCode15, the latest linker causes symbol conflicts in TUIRoomEngine, which is also part of this issue.

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4bd5247c2d1f11ef9bb3525400ab9413.png)


   Solution: Modify the linker configuration. In `Build Settings`, add `-ld64` to `Other Linker Flags`.


   Official Documentation: [https://developer.apple.com/forums/thread/735426](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.apple.com%2Fforums%2Fthread%2F735426)

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4cb6f3182d1f11efb0275254006c0558.png)

- **Rosetta Simulator Issue**


   When using Apple Silicon (M1, M2, etc. series chips), you'll encounter this type of popup. The reason is that some third-party libraries, including SDWebImage, do not support xcframework. However, Apple has still provided an adaptation method, which is to enable Rosetta settings on the emulator. Generally, the Rosetta option will automatically pop up during compilation.

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4c09aa342d1f11ef918f52540005b090.png)

- **Xcode 15 Developer Sandbox Option Error: Sandbox: bash(xxx) deny(1) file-write-create**

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4be81a002d1f11ef9bb3525400ab9413.png)


   When you create a new project using Xcode 15, this option may cause compilation and execution failure. It is recommended that you turn off this option.

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4bdf6dab2d1f11ef9bb3525400ab9413.png)


### CocoaPods Issues
- **When using remote integration, issues with mismatched Pod dependency versions**


   If you encounter a mismatch between the Podfile.lock and the plugin dependency version of TUICore while using remote CocoaPods integration, 


   please delete the Podfile.lock file and use `pod repo update`to update your local repository, then use `pod update` to refresh the updates.

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4c0489382d1f11efb0275254006c0558.png)



- **When using local integration, issues with mismatched Pod dependency versions**


   When integrating local DevelopmentPods and the plugin dependency on TUICoreis newer, but the local Pod dependency version is 1.0.0,


   Please refer to [Podfile_local](https://github.com/TencentCloud/chat-uikit-ios/blob/main/Demo/Podfile_local) and [TUICore.spec](https://github.com/TencentCloud/chat-uikit-ios/blob/main/TUIKit/TUICore/TUICore.podspec) for modifications. The plugin needs to follow the version and match the one in TUICore.spec.


   When using local integration for the first time, we recommend you download our sample Demo project, replace the content of the Podfile with Podfile_local, and execute `Pod update` for cross-reference.

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4c62636f2d1f11efa4f552540077de32.png)


### Submission Issues
- **Packaging failure when launching on the Appstore, with an 'Unsupported Architectures' error message.**


   The issue is illustrated below, where packaging indicates the ImSDK_Plus.framework includes an x86_64 simulator version not supported by the Appstore. This is because the SDK, to facilitate developer debugging, defaults to including the simulator version upon release.

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4bf6bb032d1f11efa4f552540077de32.png)


   You can follow the steps below to remove the simulator version during packaging:

  1. Select your project's Target and click on the `Build Phases` option, then add a `Run Script` to the current panel;

      ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4be3f7092d1f11ef97da5254007d9c55.png)

  2. In the newly added Run Script, insert the following script:

      ``` bash
      #!/bin/sh
      
      # Strip invalid architectures
      strip_invalid_archs() {
          binary="$1"
          echo "current binary ${binary}"
          # Get architectures for current file
          archs="$(lipo -info "$binary" | rev | cut -d ':' -f1 | rev)"
          stripped=""
          for arch in $archs; do
              if ! [[ "${ARCHS}" == *"$arch"* ]]; then
                  if [ -f "$binary" ]; then
                      # Strip non-valid architectures in-place
                      lipo -remove "$arch" -output "$binary" "$binary" || exit 1
                      stripped="$stripped $arch"
                  fi
              fi
          done
          if [[ "$stripped" ]]; then
              echo "Stripped $binary of architectures:$stripped"
          fi
      }
      
      APP_PATH="${TARGET_BUILD_DIR}/${WRAPPER_NAME}"
      
      # This script loops through the frameworks embedded in the application and
      # removes unused architectures.
      find "$APP_PATH" -name '*.framework' -type d | while read -r FRAMEWORK
      do
          FRAMEWORK_EXECUTABLE_NAME=$(defaults read "$FRAMEWORK/Info.plist" CFBundleExecutable)
          FRAMEWORK_EXECUTABLE_PATH="$FRAMEWORK/$FRAMEWORK_EXECUTABLE_NAME"
          echo "Executable is $FRAMEWORK_EXECUTABLE_PATH"
          strip_invalid_archs "$FRAMEWORK_EXECUTABLE_PATH"
      done
      ```
      ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100027639409/4c544aae2d1f11efb0275254006c0558.png)


## Contact Us

If you have any questions about this article, feel free to join the [Telegram Technical Group](https://t.me/+EPk6TMZEZMM5OGY1), where you will receive reliable technical support.