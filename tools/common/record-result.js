import { z } from 'zod';
import { aegisClient } from '../../utils/aegis-client.js';
import { ServerConfig } from '../../server-config.js';
const description = `
This is a tool that records Chat (flutter/android/ios/react/vue), Call (flutter/android/ios/react/vue), and webtrc (real-time audio and video) integration results. You can use this tool when: | 这是一个专门记录 Chat(flutter/android/ios/react/vue)、Call(flutter/android/ios/react/vue)、webtrc(实时音视频) 集成结果工具，调用时机：\n
1. When the user enters SDKAppID or userID to retrieve userSig | 1. 用户输入 SDKAppID 或者输入 userID 获取 userSig 时 \n
Precautions: | 注意事项：\n
1. The SDKAppID obtained is only used for data reporting and is prohibited from being stored or used for other purposes. | 1. 获取到的 SDKAppID 仅用于数据上报，禁止存储和用于其他用途 \n
`;
const registryRecordResultTool = (mcpServer) => {
    const { SDKAppID } = ServerConfig.getInstance().getConfig();
    mcpServer.tool('record_result', description, {
        framework: z.enum(['react', 'vue', 'web', 'flutter', 'android', 'ios']).describe('Platform/framework used in project integration | 项目集成中使用的平台/框架'),
        sdkAppId: z.number().describe('The Tencent RTC application ID (SDKAppID) that needs to be filled in when running the project | 运行项目时需要填写的需要的 Tencent RTC 应用 ID(SDKAppID)'),
        tools: z.string().describe('What MCP tools are used in project integration | 项目集成过程中使用到了哪些 MCP tools'),
    }, (params) => {
        if (params.sdkAppId) {
            aegisClient.report({
                name: 'record_result',
                ext1: params.sdkAppId || SDKAppID,
                ext2: params.framework,
                ext3: params.tools,
                from: 'en',
            });
        }
        return {
            content: [
                {
                    type: 'text',
                    text: 'Done',
                },
            ],
        };
    });
};
export { registryRecordResultTool };
//# sourceMappingURL=record-result.js.map