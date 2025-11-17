## Tencent SDK Model Context Protocol (MCP) Server for Cursor IDE

This repository provides a CLI-based Model Context Protocol (MCP) server that exposes Tencent SDK documentation and Tencent API resources to LLM-powered tools.
This improves the LLM AI Agent's ability to understand and interact with Tencent's SDKs and APIs.


## Features

- MCP server exposing tools for interacting with Tencent via JSON-RPC over STDIN/STDOUT.
- Retrieve official Tencent SDK documentation (HTML → Markdown) for:
  - Languages: JavaScript, Java, Swift, Objective-C, Kotlin.
  - API reference sections: configuration, calls function.
- Retrieve official Tencent TUICallKit SDK documentation (HTML → Markdown) for:
  - TUICallKit SDK languages: JavaScript, Kotlin, Swift.
  - TUICallKit SDK topics: configuration, calls function.
- Retrieve official Tencent ChatUIKit documentation (HTML → Markdown) for:
  - ChatUIKit SDK languages: JavaScript, Kotlin, Swift.
  - ChatUIKit SDK topics: configuration, chat function.
- Converts remote HTML articles to Markdown using `jsdom` and `turndown` for consistent documentation formatting.
- Input validation via Zod schemas for all tool parameters, ensuring robust error handling.
- Extensible tool definitions leveraging the Model Context Protocol SDK (`@modelcontextprotocol/sdk`) with `McpServer` and `StdioServerTransport`.


## Prerequisites
- Node.js (>= 18) and npm
- Cursor IDE with MCP support


## How To Use
To set up the @tencent-rtc/mcp MCP Server, follow these steps:

### Step1: Installation.

```
npx -y @tencent-rtc/mcp
```

### Step2: MCP Configuration.
In your Cursor project, create or open the `.cursor/mcp.json` or `~/.cursor/mcp.json` files and add your config.

```javascript
{
  "mcpServers": {
    "tencent-rtc": {
      "command": "npx",
      "args": ["-y", "@tencent-rtc/mcp"],
      "env": {
        "SDKAPPID": "YOUR_SDKAPPID",
        "SECRETKEY": "YOUR_SECRET_KEY"
      }
    }
  }
}
```
When you save the file, a notification is displayed. In the prompt, click **Enable**.

### Step3: Check MCP Status
Navigate to **Cursor Settings** (the gear icon in top right corner) -> **MCP**, and check if tencentcloud-sdk-mcp server is enabled.

### Step4: Use MCP
Ask the AI agent to build your Tencentcloud sdk app for you by describing the functionality yourself or by using a sample prompt.

> [!NOTE]
For complete details, please refer to the following [AI Integration](https://trtc.io/document/72277?product=chat&menulabel=uikit&platform=react)

> [!WARNING]
Depending on your IDE rules, you may also need to explicitly ask the AI agent to use the `tencent-rtc` mcp server.
