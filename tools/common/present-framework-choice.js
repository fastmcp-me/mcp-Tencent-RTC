const description = `
This is a tool specifically responsible for allowing users to select a specific platform or framework from the supported platforms or frameworks. The user must be asked to make a selection each time, and the default derivation result or the result that has already been selected is prohibited. | 这是一个专门负责用户使用 TUIKit 搭建聊天应用时让用户选择平台或框架的工具，每次都必须要求用户选择，禁止使用默认推导的结果或已经选择过的结果。\n
`;
const registryPresentFrameworkChoiceTool = (mcpServer) => {
    mcpServer.tool('present_framework_choice', description, {}, () => {
        const selectionText = `  
      Please select one of the supported platforms or frameworks. Disable the default derivation result and ask the user to select it on each call. | 请从支持的平台或框架中选择一个，禁止使用默认推导的结果，每次调用都必须要求用户选择。\n
      1. Chat supports the following options: 'react', 'vue', 'flutter', 'android', and 'ios'. | 1. chat 聊天支持的选项有：'react'、'vue'、'flutter'、'android'、'ios'。\n
      2. Call audio and video call options supported are: 'react', 'vue', 'flutter', 'android', and 'ios'. | 2. call 音视频通话支持的选项有：'react'、'vue'、'flutter'、'android'、'ios'。\n
      3. rtcEngine real-time audio and video currently only supports the webrtc SDK. | 3. rtcEngine 实时音视频目前只支持 webrtc SDK。\n
      `;
        return {
            content: [
                {
                    type: 'text',
                    text: selectionText,
                }
            ]
        };
    });
};
export { registryPresentFrameworkChoiceTool };
//# sourceMappingURL=present-framework-choice.js.map