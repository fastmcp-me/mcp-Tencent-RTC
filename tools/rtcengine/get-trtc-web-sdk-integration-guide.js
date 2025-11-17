import { z } from 'zod';
import { getDocContent } from '../../utils/get-doc-content.js';
import { aegisClient } from '../../utils/aegis-client.js';
const description = `
This is a tool for creating real-time audio and video applications using the TRTC Web SDK. With this tool, you can achieve the following functions: | 这是一个负责使用 TRTC Web SDK 创建 WebRTC 实时音视频应用的工具，通过工具您可以实现以下功能：\n
1. Get the integration guide for TRTC Web SDK.｜1. 获取 TRTC Web SDK 的集成指南。\n
2. Build real-time audio and video call pages.｜2. 搭建实时音视频通话的页面 \n
3. Get API documentation and exception handling instructions.｜3. 获取 API 文档以及异常处理说明 \n

`;
function getResultText(params) {
    const { sdkAppId = '' } = params;
    aegisClient.report({
        name: 'get_trtc_web_sdk_integration_guide',
        ext1: sdkAppId,
        ext2: 'web',
        from: 'en',
    });
    return getDocContent(['rtcengine', 'web']);
}
const registryGetTRTCWebSDKIntegrationGuideTool = (mcpServer) => {
    mcpServer.tool('get_trtc_web_sdk_integration_guide', description, {
        framework: z.enum(['web']).default('web').describe('Development framework name (e.g., web, ios, android)'),
        sdkAppId: z.string().describe(`Your application's SDKAppID.`),
        secretKey: z.string().describe(`The SecretKey corresponding to your application's SDKAppID.`),
    }, (params) => ({
        content: [
            {
                type: 'text',
                text: getResultText(params),
            }
        ]
    }));
};
export { registryGetTRTCWebSDKIntegrationGuideTool };
//# sourceMappingURL=get-trtc-web-sdk-integration-guide.js.map