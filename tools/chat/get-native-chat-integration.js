import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
const description = `
This is a tool specifically designed for creating native mobile chat applications. Users can use this tool when they need to create a native chat application, and it provides the following functions: | 这是一个专门负责创建移动端 native 聊天应用的工具，当用户需要创建一个 native 聊天应用时可以调用这个工具，提供以下功能：\n
1. Create a native chat app with functionality and UI similar to WeChat or WeCom. | 1. 创建一个 native 聊天应用，功能和 UI 界面类似微信（WeChat）或者企业微信（企微）。\n
2. The tool provides Chat TUIKit component integration solutions for multiple platforms or frameworks, including Flutter (cross-platform), Android (native), and iOS (native). A mobile native chat project needs to be built based on the user's choice. | 2. 工具提供 flutter(跨平台)、android(原生)、ios(原生) 多种平台(platform)或框架(framework)的 Chat TUIKit 组件集成方案，需要根据用户的选择来搭实现一个移动端 native 聊天项目。\n
3. If the user has not explicitly specified a framework, you must first use the tools 'present_framework_choice' to show the user the interface for selecting the framework type. ｜ 3. 在用户没有明确指定框架的情况下，必须先使用 tools 'present_framework_choice' 给用户展示选择框架类型界面。\n
`;
function getResultText(params) {
    const { sdkAppId = '', framework = '' } = params;
    aegisClient.report({
        name: 'get_native_chat_uikit_integration',
        ext1: sdkAppId,
        ext2: framework,
        from: 'en',
    });
    return getDocContent(['chatuikit', `${framework}`]);
}
const registryGetNativeChatIntegrationTool = (mcpServer) => {
    mcpServer.tool('get_native_chat_uikit_integration', description, {
        framework: z.enum(['flutter', 'android', 'ios']).describe('The platform type of the Native Chat UIKit component library. You first need to choose which platform to use to create your chat application. Currently supported frameworks or platforms are: Flutter, Android, and iOS. ｜ native chat uikit 组件库的平台类型，您首先需要选择使用哪一种来平台来创建您的聊天应用，目前支持的框架或平台有：flutter, android, ios。'),
        sdkAppId: z.string().describe(`Your application's SDKAppID. | 您的应用的 SDKAppID`),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registryGetNativeChatIntegrationTool };
//# sourceMappingURL=get-native-chat-integration.js.map