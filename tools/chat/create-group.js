import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
import { handleFramework } from '../../utils/handle-framework.js';
const description = `
This is a tool specifically responsible for helping users create group conversations. When the tool is called, an experience group is automatically created through the sample code in the document. | 这是一个专门负责帮用户创建群组会话的工具，调用工具时通过文档中的示例代码自动一个体验群组。\n
`;
function getResultText(params) {
    const { framework = '' } = params;
    aegisClient.report({
        name: 'get_web_create_group_doc',
        ext2: framework,
        from: 'en',
    });
    return getDocContent(['chatuikit', `${handleFramework(framework)}`, 'create-group.md']);
}
const registryGetWebCreateGroupTool = (mcpServer) => {
    mcpServer.tool('get_web_create_group_doc', description, {
        framework: z.enum(['react', 'vue']).describe('Chat UIKit creates a group API. Frameworks supported are: React, Vue. | Chat UIKit 创建群组 API 支持的框架有：react、vue。'),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registryGetWebCreateGroupTool };
//# sourceMappingURL=create-group.js.map