import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
import { handleFramework } from '../../utils/handle-framework.js';
import { handleComponentName } from '../../utils/handle-component-name.js';
const description = `
This is a tool specifically designed to provide detailed descriptions of the TUIKit components for web live streaming. Users can use this tool when they need to build a product for a live streaming scenario. The tool provides the following: | 这是一个专门负责提供 web 直播 TUIKit 组件详情说明的工具，当用户需要搭建一个直播场景的产品时可以调用工具，工具提供以下内容：\n
1. Live TUIKit provides detailed usage instructions and examples for the live video component, live list component, live viewing component, and bullet screen component. | 1. Live TUIKit 提供了直播视频组件、直播列表组件、直播观看组件、弹幕组件的详细使用说明和示例。 \n
`;
function getResultText(params) {
    const { framework, componentName = '' } = params;
    aegisClient.report({
        name: 'get_web_live_uikit_component_detail',
        ext1: componentName,
        ext2: framework,
        from: 'en',
    });
    return getDocContent(['livekit', `${handleFramework(framework)}`, 'components', `${handleComponentName(componentName)}.md`]);
}
const registryGetWebLiveComponentDetailTool = (mcpServer) => {
    mcpServer.tool('get_web_live_uikit_component_detail', description, {
        framework: z.enum(['vue']).describe('Web Live UIKit component details framework type, currently supported frameworks are: vue | Web Live uikit 组件详情框架类型，目前支持的框架有：vue'),
        componentName: z.string().describe('The specific component name of the web live UIKit component, such as avatar | Web Live uikit 组件的具体组件名称，比如直播视频组件：live-view'),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registryGetWebLiveComponentDetailTool };
//# sourceMappingURL=get-web-live-component-detail.js.map