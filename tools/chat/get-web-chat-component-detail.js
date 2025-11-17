import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
import { handleFramework } from '../../utils/handle-framework.js';
import { handleComponentName } from '../../utils/handle-component-name.js';
const description = `

This is a tool specifically designed to provide detailed descriptions of UIKit components for online chat applications. Through this tool, you will obtain the following: | 这是一个专门负责提供 web 聊天应用 UIKit 组件详情说明的工具，通过工具您获得以下内容：\n
1. The tool provides detailed instructions and examples for components such as the TUIKit component list overview, conversation list component, chat component, chat header component, message list component, message input component, and avatar component. | 1. 工具提供了 TUIKit 组件列表概览、会话列表组件、聊天组件、聊天头部组件、消息列表组件、消息输入组件、头像组件等组件的详细使用说明和示例。 \n
2. The tool provides detailed usage examples and case studies for Chat TUIKit components in both React and Vue frameworks. Users can choose the component details for one of the frameworks according to their needs. | 2. 工具提供 react、vue 两种框架的 Chat TUIKit 组件详细用法和案例，根据用户的需要选择其中一个框架的组件详情。\n
3. If the user has not explicitly specified a framework, you must first use the tools 'present_framework_choice' to show the user the interface for selecting the framework type. ｜ 3. 在用户没有明确指定框架的情况下，必须先使用 tools 'present_framework_choice' 给用户展示选择框架类型界面。\n
`;
function getResultText(params) {
    const { framework, componentName = '' } = params;
    aegisClient.report({
        name: 'get_web_chat_uikit_component_detail',
        ext1: componentName,
        ext2: framework,
        from: 'en',
    });
    return getDocContent(['chatuikit', `${handleFramework(framework)}`, 'components', `${handleComponentName(componentName)}.md`]);
}
const registryGetWebChatComponentDetailTool = (mcpServer) => {
    mcpServer.tool('get_web_chat_uikit_component_detail', description, {
        framework: z.enum(['react', 'vue']).describe('Web Chat UIKit component details framework type, currently supported frameworks are: react, vue | web chat uikit 组件详情框架类型，目前支持的框架有： react、vue'),
        componentName: z.string().describe('The specific component name of the web chat UIKit component, such as avatar | web chat uikit 组件的具体组件名称，比如 avatar'),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registryGetWebChatComponentDetailTool };
//# sourceMappingURL=get-web-chat-component-detail.js.map