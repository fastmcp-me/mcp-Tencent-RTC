// common
import { registryPresentFrameworkChoiceTool } from './common/present-framework-choice.js';
import { registryRecordPromptTool } from './common/record-prompt.js';
import { registryRecordResultTool } from './common/record-result.js';
import { registryGetUserSigTool } from './common/get-usersig.js';
// chat
import { registryGetWebChatIntegrationTool } from './chat/get-web-chat-integration.js';
import { registryGetWebChatWindowIntegrationTool } from './chat/get-web-chat-window-integration.js';
import { registryGetWebChatComponentDetailTool } from './chat/get-web-chat-component-detail.js';
import { registryGetWebChatInitTool } from './chat/get-web-chat-uikit-init.js';
// import { registryGetWebCreateGroupTool } from './chat/create-group.js';
import { registryGetNativeChatIntegrationTool } from './chat/get-native-chat-integration.js';
import { registryGetChatFaqTool } from './chat/get-chat-faq.js';
// call
import { registryGetWebCallIntegrationTool } from './call/get-web-call-integration.js';
import { registryGetNativeCallIntegrationTool } from './call/get-native-call-integration.js';
import { registryGetCallFaqTool } from './call/get-call-faq.js';
// rtcengine
import { registryGetTRTCWebSDKFaqTool } from './rtcengine/get-trtc-web-sdk-faq.js';
import { registryGetRTCEngineWebSDKIntegrationGuideTool } from './rtcengine/get-rtcengine-web-sdk-integration-guide.js';
import { registryGetTRTCWebSDKIntegrationGuideTool } from './rtcengine/get-trtc-web-sdk-integration-guide.js';
// live
import { registryGetWebLiveComponentDetailTool } from './live/get-web-live-component-detail.js';
import { registerGetWebLiveStateDetailTool } from './live/get-web-live-state-detail.js';
// room
import { registryGetWebRoomStateDetailTool } from './room/get-web-room-state-detail.js';
function registryTools(mcpServer) {
    // common
    registryPresentFrameworkChoiceTool(mcpServer);
    registryRecordPromptTool(mcpServer);
    registryRecordResultTool(mcpServer);
    registryGetUserSigTool(mcpServer);
    // chat
    registryGetWebChatIntegrationTool(mcpServer);
    registryGetWebChatWindowIntegrationTool(mcpServer);
    registryGetWebChatComponentDetailTool(mcpServer);
    registryGetWebChatInitTool(mcpServer);
    //registryGetWebCreateGroupTool(mcpServer);
    registryGetNativeChatIntegrationTool(mcpServer);
    registryGetChatFaqTool(mcpServer);
    // call
    registryGetWebCallIntegrationTool(mcpServer);
    registryGetNativeCallIntegrationTool(mcpServer);
    registryGetCallFaqTool(mcpServer);
    // rtcengine
    registryGetTRTCWebSDKFaqTool(mcpServer);
    registryGetRTCEngineWebSDKIntegrationGuideTool(mcpServer);
    registryGetTRTCWebSDKIntegrationGuideTool(mcpServer);
    // live
    registryGetWebLiveComponentDetailTool(mcpServer);
    registerGetWebLiveStateDetailTool(mcpServer);
    // room
    registryGetWebRoomStateDetailTool(mcpServer);
}
export { registryTools, };
//# sourceMappingURL=index.js.map