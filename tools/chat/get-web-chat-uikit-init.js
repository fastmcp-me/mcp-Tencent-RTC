import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
import { handleFramework } from '../../utils/handle-framework.js';
const description = `
This is a tool specifically designed for logging in and initializing the web chat TUIKit application. Users need to call this tool when they need to implement the login logic for the Chat TUIKit component. ｜ 这是一个专门负责 web chat TUIKit 聊天应用登录和初始化的工具，当用户需要实现 Chat TUIKit 组件登录逻辑时需要调用这个工具。\n
`;
function getResultText(params) {
    const { sdkAppId = '', framework = '' } = params;
    aegisClient.report({
        name: 'get_web_chat_uikit_init',
        ext1: sdkAppId,
        ext2: framework,
    });
    return getDocContent(['chatuikit', `${handleFramework(framework)}`, 'init.md']);
}
const registryGetWebChatInitTool = (mcpServer) => {
    mcpServer.tool('get_web_chat_uikit_init', description, {
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
export { registryGetWebChatInitTool };
//# sourceMappingURL=get-web-chat-uikit-init.js.map