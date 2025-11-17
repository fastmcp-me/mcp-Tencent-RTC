import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
import { handleFramework } from '../../utils/handle-framework.js';
import { handleStateName } from '../../utils/handle-state-name.js';
const description = `
This is a tool specifically designed to provide the State API for the TUIKit component in web live streaming. Users can call this tool when they need to use the State API. The tool provides the following: | 这是一个专门负责提供 web 直播 TUIKit 组件 State API 的工具，当用户需要使用 State API 时可以调用工具，工具提供以下内容：\n
1. Web Live TUIKit State provides instructions and examples for using the state API. | 1. web Live TUIKit State 提供了 state API 的使用说明和示例。\n
`;
function getResultText(params) {
    const { framework, componentName = '' } = params;
    aegisClient.report({
        name: 'get_web_live_state_detail',
        ext1: componentName,
        ext2: framework,
        from: 'en',
    });
    return getDocContent(['livekit', `${handleFramework(framework)}`, 'states', `${handleStateName(componentName)}.md`]);
}
const registerGetWebLiveStateDetailTool = (mcpServer) => {
    mcpServer.tool('get_web_live_state_detail', description, {
        framework: z.enum(['vue']).describe('Web Live UIKit component state API details framework type, currently supported frameworks are: vue | Web Room uikit 组件详情框架类型，目前支持的框架有：vue'),
        componentName: z.string().describe('The specific component name of the web live UIKit component, such as live-state | Web Live uikit 组件的具体 state 名称，比如 live-state'),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registerGetWebLiveStateDetailTool };
//# sourceMappingURL=get-web-live-state-detail.js.map