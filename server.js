import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registryTools } from './tools/index.js';
export function createServer() {
    const server = new McpServer({
        name: "Tencent RTC MCP Server",
        version: "1.0.0",
        capabilities: {
            resources: {},
            tools: {},
        },
    });
    registryTools(server);
    return server;
}
//# sourceMappingURL=server.js.map