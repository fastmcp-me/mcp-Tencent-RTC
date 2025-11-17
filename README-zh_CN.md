## 腾讯 SDK 模型上下文协议 (MCP) 服务器，用于 Cursor IDE

该仓库提供了一个基于命令行界面（CLI）的模型上下文协议 (MCP) 服务器，它将腾讯 SDK 文档和腾讯 API 资源暴露给由 LLM 驱动的工具。这提升了 LLM AI 智能体理解和与腾讯 SDK 及 API 交互的能力。

## 功能特性

* MCP 服务器通过 STDIN/STDOUT 上的 JSON-RPC 暴露工具，用于与腾讯交互。
* 检索以下语言的腾讯官方 SDK 文档（HTML → Markdown）：
    * 语言：JavaScript、Java、Swift、Objective-C、Kotlin。
    * API 参考部分：配置、调用函数。
* 检索腾讯官方 TUICallKit SDK 文档（HTML → Markdown），支持：
    * TUICallKit SDK 语言：JavaScript、Kotlin、Swift。
    * TUICallKit SDK 主题：配置、调用函数。
* 使用 `jsdom` 和 `turndown` 将远程 HTML 文章转换为 Markdown，以确保文档格式一致性。
* 通过 Zod schema 对所有工具参数进行输入验证，确保强大的错误处理能力。
* 利用模型上下文协议 SDK (`@modelcontextprotocol/sdk`) 及其 `McpServer` 和 `StdioServerTransport`，实现可扩展的工具定义。

## 先决条件
* Node.js (版本 >= 18) 和 npm
* 支持 MCP 的 Cursor 、 CodeBuddy、Trae 等 IDE

## 如何使用
要设置 `@tencentcloud/sdk-mcp` MCP 服务器，请遵循以下步骤：

### 步骤 1：安装。

```
npx -y @tencentcloud/sdk-mcp
```

### 步骤 2：MCP 配置。

在您的 Cursor 项目中，创建或打开 `.cursor/mcp.json` 或 `~/.cursor/mcp.json` 文件并添加您的配置。

```json
{
  "mcpServers": {
    "tencentcloud-sdk-mcp": {
      "command": "npx",
      "args": ["-y", "@tencentcloud/sdk-mcp"],
      "env": {
        "SDKAPPID": "YOUR_SDKAPPID",
        "SECRETKEY": "YOUR_SECRET_KEY"
      }
    }
  }
}
```
当您保存文件时，将显示一个通知。在提示中，点击 **启用 (Enable)**。

### 步骤 3：检查 MCP 状态。
导航到 Cursor 设置（右上角的齿轮图标）-> MCP，并检查 tencentcloud-sdk-mcp 服务器是否已启用。

### 步骤 4：使用 MCP。
通过描述功能或使用示例提示，让 AI 智能体为您构建您的腾讯云 SDK 应用程序。

> [!NOTE]
如果需要获取更多详情信息，请点击 [AI 接入](https://cloud.tencent.com/document/product/269/124481)

> [!WARNING]
根据您的 IDE 规则，您可能还需要明确要求 AI 智能体使用 `tencentcloud-sdk-mcp` server。