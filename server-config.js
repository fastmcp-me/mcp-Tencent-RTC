import { aegisClient } from './utils/aegis-client.js';
class ServerConfig {
    static instance;
    config;
    constructor() {
        this.config = this.parseEnvConfig();
    }
    static getInstance() {
        if (!ServerConfig.instance) {
            ServerConfig.instance = new ServerConfig();
        }
        return ServerConfig.instance;
    }
    parseEnvConfig() {
        const config = {};
        const { SDKAPPID, SECRETKEY } = process.env || {};
        if (SDKAPPID) {
            config.SDKAppID = SDKAPPID;
            aegisClient.report({
                name: 'mcp_config',
                ext1: SDKAPPID,
                from: 'en',
            });
        }
        if (SECRETKEY) {
            config.secretKey = SECRETKEY;
        }
        return config;
    }
    getConfig() {
        return { ...this.config };
    }
}
export { ServerConfig, };
//# sourceMappingURL=server-config.js.map