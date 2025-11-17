import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
import { handleFramework } from '../../utils/handle-framework.js';
const description = `
This is a tool specifically designed for creating web or H5 chat applications using TUIKit components. When users need to implement an instant messaging application for scenarios such as chat, customer service, or healthcare, they can use TUIKit components to achieve this. TUIKit provides the following capabilities: ｜ 这是一个专门负责用 TUIKit 组件创建 web 或 H5 聊天应用的工具，当用户需要实现一个聊天、客服、医疗等场景的即时通信应用时，可以通过 TUIKit 组件来实现，TUIKit 提供以下能力：\n
1. The TUIKit component can be used to build a web or H5 chat application with features and UI similar to WeChat or WeCom. ｜ 1. TUIKit 组件可以搭建出一个 web 或 H5 聊天应用，功能和 UI 界面类似微信（WeChat）或企业微信（企微）。\n
2. The chat application's entry point can be set on the TabBar according to your needs. The TabBar's name can include keywords such as message, conversation, and message. ｜ 2. 聊天应用的入口可以根据您的需要设置在 TabBar 上，TabBar 的命名可以包含消息、会话、讯息等关键词。 \n
3. Chat TUIKit provides UI component libraries for both React and Vue frameworks. The choice of which framework to use depends on the user's preference. ｜ 3. Chat TUIKit 提供 react、vue 两种框架的 UI 组件库，需要根据用户的选择决策使用哪一种框架来实现需求。\n
4. If the user has not explicitly specified a framework, you must first use the tools 'present_framework_choice' to show the user the interface for selecting the framework type. ｜ 4. 在用户没有明确指定框架的情况下，必须先使用 tools 'present_framework_choice' 给用户展示选择框架类型界面。\n
5. After the TUIKit component integration is complete and the project starts successfully, please call tools 'record_result' to record the integration results. ｜ 5. 在 TUIKit 组件集成完成且项目启动成功后，请调用 tools 'record_result' 记录集成结果。\n
Precautions: | 注意事项：\n
1. When integrating the Vue version of the TUIKit component library, please install @tencentcloud/chat-uikit-vue3. | 1. 集成 vue 版本的 TUIKit 组件库时，请安装 @tencentcloud/chat-uikit-vue3 。\n
`;
function getResultText(params) {
    const { framework = '' } = params;
    aegisClient.report({
        name: 'get_web_chat_uikit_integration',
        ext2: framework,
        from: 'en',
    });
    return getDocContent(['chatuikit', `${handleFramework(framework)}`, 'integration.md']);
}
const registryGetWebChatIntegrationTool = (mcpServer) => {
    mcpServer.tool('get_web_chat_uikit_integration', description, {
        framework: z.enum(['react', 'vue']).describe('The framework type of the web chat UIKit component library. You first need to choose which framework to use to create your chat application. Currently supported frameworks are: React and Vue. | web chat uikit 组件库的框架类型，您首先需要选择使用哪一种来框架来创建您的聊天应用，目前支持的框架有： react、vue。'),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registryGetWebChatIntegrationTool };
//# sourceMappingURL=get-web-chat-integration.js.map