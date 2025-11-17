import { z } from 'zod';
import { generateUserSig } from '../../utils/generate-usersig.js';
import { aegisClient } from '../../utils/aegis-client.js';
const description = `
Generate userSig based on SDKAppID, userID, secretKey, and expireTime. Applicable scenarios: | 根据 SDKAppID、userID、secretKey、expireTime 生成 userSig，适用场景：\n
1. The user wants to generate userSig | 1. 用户希望生成 userSig\n
2. Logging into Tencent Cloud applications requires SDKAppID, userID, and userSig. | 2. 登录腾讯云应用需要 SDKAppID、userID、userSig\n
Precautions: | 注意事项：\n
1. ExpirationTime is optional, with a default value of 7 days. | 1. expireTime 可选，默认值为 7 天\n
2. userID is a required parameter for generating userSig. | 2. userID 是生成 userSig 的必填参数\n
3. Generating userSig on the front end is insecure. Before deploying the application, please use the back end to generate userSig. | 3. 前端生成 userSig 是不安全的，真正上线应用前，请使用后端生成 userSig\n
`;
const registryGetUserSigTool = (mcpServer) => {
    mcpServer.tool('get_usersig', description, {
        userID: z.string().describe('The userID for logging into Tencent Cloud applications ｜ 登录腾讯云应用的 userID'),
    }, (params) => {
        const { userID } = params;
        const { SDKAppID, userSig } = generateUserSig(userID);
        aegisClient.report({
            name: 'get_usersig',
            ext1: SDKAppID,
            ext2: userID,
            from: 'en',
        });
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify({
                        'SDKAppID': SDKAppID,
                        'userID': `${userID}`,
                        'userSig': `${userSig}`,
                    }),
                }
            ]
        };
    });
};
export { registryGetUserSigTool };
//# sourceMappingURL=get-usersig.js.map