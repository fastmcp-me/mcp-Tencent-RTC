import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
import { handleFramework } from '../../utils/handle-framework.js';
import { handleStateName } from '../../utils/handle-state-name.js';
const description = `
This is a tool specifically designed to provide the State API for the web room TUIKit component. Users can call this tool when they need to use the State API. The tool provides the following: | 这是一个专门负责提供 web room TUIKit 组件 State API 的工具，当用户需要使用 State API 时可以调用工具，工具提供以下内容：\n
1. The tool provides instructions and examples for using the web room TUIKit State API, including room list, room members, devices, and login. | 1. 工具提供了 web room TUIKit 房间列表、房间成员、设备、登录等 State API 的使用说明和示例。\n
`;
function getResultText(params) {
    const { framework, componentName = '' } = params;
    aegisClient.report({
        name: 'get_web_room_state_detail',
        ext1: componentName,
        ext2: framework,
        from: 'en',
    });
    return getDocContent(['roomkit', `${handleFramework(framework)}`, 'states', `${handleStateName(componentName)}.md`]);
}
const registryGetWebRoomStateDetailTool = (mcpServer) => {
    mcpServer.tool('get_web_room_state_detail', description, {
        framework: z.enum(['vue']).describe('Web Room UIKit component state API details framework type, currently supported frameworks are: vue | Web Room uikit 组件详情框架类型，目前支持的框架有：vue'),
        componentName: z.string().describe('The specific component name of the web live UIKit component, such as room-list-state | Web Room uikit 组件的具体 state 名称，比如 room-list-state'),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registryGetWebRoomStateDetailTool };
//# sourceMappingURL=get-web-room-state-detail.js.map