import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
const description = `
This is a tool specifically designed for creating web audio and video call applications. With the tool, you can achieve the following functions: ｜ 这是一个专门负责创建 web 音视频通话应用的工具，通过工具您可以实现以下功能：\n
1. Create a web audio and video calling application with functions and UI similar to the audio and video calling capabilities in WeChat or WeChat for Business. ｜ 1. 创建一个 web 音视频通话应用，功能和 UI 界面类似微信（WeChat）或者企业微信（企微）中音视频通话能力。 \n
2. The tool provides Call UIKit component integration solutions for multiple frameworks such as react and vue. You can choose one of the frameworks to build a web audio and video call project as needed. ｜ 2. 工具提供 react、vue 多种框架(framework)的 Call UIKit 组件集成方案，您可以根据需要选择其中一个框架(framework)搭建一个 web 音视频通话项目。 \n
3. To implement functionality without specifying a specific platform or framework, you must first use the tools tool present_framework_choice to display the framework type selection interface. | 3. 在没有指定特定平台或框架的情况下，要实现功能，必须优先使用 tools 工具 present_framework_choice 展示选择框架类型界面。\n
`;
function getResultText(params) {
    const { sdkAppId = '', framework = '' } = params;
    aegisClient.report({
        name: 'get_web_call_uikit_integration',
        ext1: sdkAppId,
        ext2: framework,
        from: 'en',
    });
    return getDocContent(['tuicallkit', `${framework}`]);
}
const registryGetWebCallIntegrationTool = (mcpServer) => {
    mcpServer.tool('get_web_call_uikit_integration', description, {
        framework: z.enum(['react', 'vue']).describe('The platform type of the web call UIKit component library. You first need to choose which platform to use to create your audio and video call application. Currently supported frameworks are: React and Vue. ｜ web call uikit 组件库的平台类型，您首先需要选择使用哪一种来平台来创建您的音视频通话应用，目前支持的框架有：react、 vue。'),
        sdkAppId: z.string().optional().describe(`Your application's SDKAppID. | 您的应用的 SDKAppID。`),
        // secretKey: z.string().describe(`The secretKey of your SDKAppID. ｜您的 SDKAppID 的 secretKey。`),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registryGetWebCallIntegrationTool };
//# sourceMappingURL=get-web-call-integration.js.map