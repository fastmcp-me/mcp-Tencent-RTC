This document outlines two authentication methods for Chat services, with a focus on UserSig, a security signature by Tencent Cloud to safeguard against unauthorized access. For basic cloud service usage, provide SDKAppID, UserID, and UserSig during SDK initialization or login.
- SDKAppID is used to identify your application.

- UserID is used to identify your user.

- UserSig is a security signature calculated based on the first two using the HMAC SHA256 encryption algorithm. As long as attackers cannot forge the UserSig, they cannot steal your cloud service traffic.


## Obtaining a Key
1. Log in to the [Chat console](https://console.trtc.io/chat).
   

   > **Note: **
   > 

   > If you do not have any app, [create an app](https://intl.cloud.tencent.com/document/product/1047/45914) and then perform [step 2](https://write.woa.com/#step2).
   > 

2. Click the target app card to go to its basic configuration page.

3. In the **Basic Information** section, click **Display key** to the right of **Key**.

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100026631907/9da6a1d5f4df11efa823525400e889b2.png)

4. Click **Copy** to copy and save the key information.
   

   > **Note: **
   > 

   >  Store the key information properly to prevent disclosure.
   > 


## Calculating UserSig on the Client

The `GenerateTestUserSig` open-source module provided in the sample code of the Chat SDK can help you quickly generate a UserSig. You only need to configure three member variables, including SDKAPPID (SDKAppID of the app), EXPIRETIME (UserSig expiration time), and SECRETKEY (key information), and then call the genTestUserSig() function to quickly obtain a UserSig.

To simplify this process, we provide the source code for computing a UserSig for the following languages and platforms. You can directly download and integrate the source code into your client.
<table>
<tr>
<td rowspan="1" colSpan="1" >Programing Language</td>

<td rowspan="1" colSpan="1" >Platform</td>

<td rowspan="1" colSpan="1" >GenerateTestUserSig Source Code</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Java</td>

<td rowspan="1" colSpan="1" >Android</td>

<td rowspan="1" colSpan="1" >[GenerateTestUserSig.java](https://github.com/tencentyun/TIMSDK/blob/master/Android/Demo/app/src/main/java/com/tencent/qcloud/tim/demo/signature/GenerateTestUserSig.java)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Objective-C</td>

<td rowspan="1" colSpan="1" >iOS</td>

<td rowspan="1" colSpan="1" >[GenerateTestUserSig.h](https://github.com/tencentyun/TIMSDK/blob/master/iOS/Demo/TUIKitDemo/Private/GenerateTestUserSig.h)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Objective-C</td>

<td rowspan="1" colSpan="1" >Mac</td>

<td rowspan="1" colSpan="1" >[GenerateTestUserSig.h](https://github.com/tencentyun/TIMSDK/blob/master/Mac/Demo/TUIKitDemo/Debug/GenerateTestUserSig.h)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >C++</td>

<td rowspan="1" colSpan="1" >Windows</td>

<td rowspan="1" colSpan="1" >[GenerateTestUserSig.h](https://github.com/tencentyun/TIMSDK/blob/master/Windows/Demo/IMApp/GenerateTestUserSig.h)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Javascript</td>

<td rowspan="1" colSpan="1" >Web</td>

<td rowspan="1" colSpan="1" >[GenerateTestUserSig.js](https://github.com/TencentCloud/chat-uikit-uniapp/blob/main/TUIKit/debug/GenerateTestUserSig.js)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Dart</td>

<td rowspan="1" colSpan="1" >Flutter</td>

<td rowspan="1" colSpan="1" >[GenerateTestUserSig.dart](https://github.com/TencentCloud/chat-demo-flutter/blob/main/lib/utils/GenerateTestUserSig.dart )</td>
</tr>
</table>


> **Note: **
> 

> In this method, the `SECRETKEY` is vulnerable to decompilation and reverse engineering. Once your `SECRETKEY` is disclosed, attackers can steal your Tencent Cloud traffic. Therefore, **this method is only suitable for locally running a demo project and feature debugging**.
The correct way to issue a UserSig is to integrate the UserSig computing code into your server and provide app-oriented APIs. When UserSig is needed, your app will send a request to the business server to obtain a dynamic UserSig. For more information, see [How to Calculate UserSig](https://write.woa.com/#GeneratingdynamicUserSig).
> 


## Calculating UserSig on the Server

Generating a UserSig on the server provides maximum protection against the disclosure of the key used for calculating the UserSig. You only need to deploy the code for calculating the UserSig on your server and provide an app-oriented API. When a UserSig is needed, your app will send a request to the business server to obtain a dynamic UserSig.
To simplify this process, we provide the source code for calculating a UserSig for the following languages and platforms. You can directly download and integrate the source code into your server.
<table>
<tr>
<td rowspan="1" colSpan="1" >Programming Language</td>

<td rowspan="1" colSpan="1" >Key Function</td>

<td rowspan="1" colSpan="1" >Download URL</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Java</td>

<td rowspan="1" colSpan="1" >HMAC-SHA256</td>

<td rowspan="1" colSpan="1" >[genSig](https://github.com/Tencent-RTC/tls-sig-api-v2-java/blob/main/src/main/java/com/tencentcloud/TLSSigAPIv2.java)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >GO</td>

<td rowspan="1" colSpan="1" >HMAC-SHA256</td>

<td rowspan="1" colSpan="1" >[GenSig](https://github.com/Tencent-RTC/tls-sig-api-v2-golang/blob/main/tencentyun/TLSSigAPI.go)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >PHP</td>

<td rowspan="1" colSpan="1" >HMAC-SHA256</td>

<td rowspan="1" colSpan="1" >[genSig](https://github.com/Tencent-RTC/tls-sig-api-v2-php/blob/main/src/TLSSigAPIv2.php)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Nodejs</td>

<td rowspan="1" colSpan="1" >HMAC-SHA256</td>

<td rowspan="1" colSpan="1" >[genSig](https://github.com/Tencent-RTC/tls-sig-api-v2-node/blob/main/TLSSigAPIv2.js)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Python</td>

<td rowspan="1" colSpan="1" >HMAC-SHA256</td>

<td rowspan="1" colSpan="1" >[gen_sig](https://github.com/Tencent-RTC/tls-sig-api-v2-python/blob/main/TLSSigAPIv2.py)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >C#</td>

<td rowspan="1" colSpan="1" >HMAC-SHA256</td>

<td rowspan="1" colSpan="1" >[GenSig](https://github.com/Tencent-RTC/tls-sig-api-v2-cs/blob/main/tls-sig-api-v2-cs/TLSSigAPIv2.cs)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >C++</td>

<td rowspan="1" colSpan="1" >HMAC-SHA256</td>

<td rowspan="1" colSpan="1" >[gen_sig](https://github.com/Tencent-RTC/tls-sig-api-v2-cpp)</td>
</tr>
</table>


Key fields in a UserSig calculation function include the SDKAppID, UserID, and UserSig validity period, as described in the following table.

> **Note: **
> 

> The following table uses the field names in the Java source code as an example. The field names may be different in other languages.
> 

<table>
<tr>
<td rowspan="1" colSpan="1" >Field Name (Example)</td>

<td rowspan="1" colSpan="1" >Description</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >sdkappid</td>

<td rowspan="1" colSpan="1" >SDKAppID of the app. You can obtain the SDKAppID on the app card in the [Chat console](https://console.trtc.io/chat).</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >userId</td>

<td rowspan="1" colSpan="1" >User ID (former name: `Identifier`).</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >expire</td>

<td rowspan="1" colSpan="1" >UserSig validity period, in seconds.</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >userbuf</td>

<td rowspan="1" colSpan="1" >This field is set to `null` by default because APIs without UserBuf are used in Chat by default.APIs with UserBuf may be required in some TRTC use cases, for example, when entering a room. For more information, see [Enabling Advanced Permission Control](https://intl.cloud.tencent.com/document/product/647/35157).</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >key</td>

<td rowspan="1" colSpan="1" >Key. You can obtain a key on the app details page in the [Chat console](https://console.trtc.io/chat). For more information, see [Obtaining a Key](https://write.woa.com/#getkey).</td>
</tr>
</table>


## Old Version of Algorithm

To simplify signature computing so that customers can conveniently and quickly use Tencent Cloud services, the signature algorithm of the Chat service has been upgraded from ECDSA-SHA256 to HMAC-SHA256 since July 19, 2019. This means that all SDKAppIDs created after July 19, 2019 will use the new HMAC-SHA256 algorithm.

If your SDKAppID was created before July 19, 2019, we recommend that you upgrade the signature algorithm to [HMAC-SHA256](https://write.woa.com/#GeneratingdynamicUserSig). The upgrade will not affect your business. Alternatively, you can still use the signature algorithm of an earlier version. The URLs for downloading the source code for the ECDSA-SHA256 algorithm are as follows:
<table>
<tr>
<td rowspan="1" colSpan="1" >Programming Language</td>

<td rowspan="1" colSpan="1" >Signature Algorithm</td>

<td rowspan="1" colSpan="1" >Download Link</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Java</td>

<td rowspan="1" colSpan="1" >ECDSA-SHA256</td>

<td rowspan="1" colSpan="1" >[GitHub](https://github.com/tencentyun/tls-sig-api-java)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >GO</td>

<td rowspan="1" colSpan="1" >ECDSA-SHA256</td>

<td rowspan="1" colSpan="1" >[GitHub](https://github.com/tencentyun/tls-sig-api-golang)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >PHP</td>

<td rowspan="1" colSpan="1" >ECDSA-SHA256</td>

<td rowspan="1" colSpan="1" >[GitHub](https://github.com/tencentyun/tls-sig-api-php)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Nodejs</td>

<td rowspan="1" colSpan="1" >ECDSA-SHA256</td>

<td rowspan="1" colSpan="1" >[GitHub](https://github.com/tencentyun/tls-sig-api-node)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >Python</td>

<td rowspan="1" colSpan="1" >ECDSA-SHA256</td>

<td rowspan="1" colSpan="1" >[GitHub](https://github.com/tencentyun/tls-sig-api-python)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >C#</td>

<td rowspan="1" colSpan="1" >ECDSA-SHA256</td>

<td rowspan="1" colSpan="1" >[GitHub](https://github.com/tencentyun/tls-sig-api-cs)</td>
</tr>

<tr>
<td rowspan="1" colSpan="1" >C++</td>

<td rowspan="1" colSpan="1" >ECDSA-SHA256</td>

<td rowspan="1" colSpan="1" >[GitHub](https://github.com/tencentyun/tls-sig-api)</td>
</tr>
</table>


## Get UserSig from the console
- Log in to Tencent-RTC Console, navigate to Development Tools > [UserSig Tools](https://console.trtc.io/usersig).

- Under the UserSig Generation Tool, select the corresponding SDKAppID and UserID.

- Click the Generate button to compute the corresponding UserSig.

   ![](https://write-document-release-1258344699.cos.ap-guangzhou.tencentcos.cn/100026631907/bf1ed039f4df11ef920e5254005ef0f7.png)


