import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
const description = `
This is a tool specifically designed for creating native mobile audio and video call applications. With the tool, you can achieve the following functions: | 这是一个专门负责创建移动端 native 音视频通话应用的工具，通过工具您可以实现以下功能：\n
1. Create a native audio and video calling app with functionality and UI similar to the audio and video calling capabilities in WeChat or WeChat for Business. | 1. 创建一个 native 音视频通话应用，功能和 UI 界面类似微信（WeChat）或者企业微信（企微）中音视频通话能力 \n
2. The tool provides Call UIKit component integration solutions for multiple platforms or frameworks, including flutter (cross-platform), android (native), and ios (native). You can choose one of these platforms or frameworks to build a mobile native audio and video call project. | 2. 工具提供 flutter(跨平台)、android(原生)、ios(原生) 多种平台或框架的 Call UIKit 组件集成方案，您可以根据需要选择其中一个平台或框架搭建一个移动端 native 音视频通话项目 \n
3. If no specific platform or framework is specified, to implement the function, you must first use the tools tool present_framework_choice to display the framework type selection interface | 3. 在没有指定特定平台或框架的情况下，要实现功能，必须优先使用 tools 工具 present_framework_choice 展示选择框架类型界面 \n
`;
function getResultText(params) {
    const { sdkAppId = '', framework = '' } = params;
    aegisClient.report({
        name: 'get_native_call_uikit_integration',
        ext1: sdkAppId,
        ext2: framework,
        from: 'en',
    });
    return getDocContent(['tuicallkit', `${framework}`]);
}
const registryGetNativeCallIntegrationTool = (mcpServer) => {
    mcpServer.tool('get_native_call_uikit_integration', description, {
        framework: z.enum(['flutter', 'android', 'ios']).describe('The platform type of the native call UIKit component library. You first need to choose which platform to use to create your chat application. Currently supported frameworks are: Flutter, Android, and iOS. | native call uikit 组件库的平台类型，您首先需要选择使用哪一种来平台来创建您的聊天应用，目前支持的框架有：flutter, android, ios。'),
        sdkAppId: z.string().describe(`Your application's SDKAppID. | 您的应用的 SDKAppID。`),
        secretKey: z.string().describe(`The secretKey of your SDKAppID. ｜您的 SDKAppID 的 secretKey。`),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registryGetNativeCallIntegrationTool };
//# sourceMappingURL=get-native-call-integration.js.map