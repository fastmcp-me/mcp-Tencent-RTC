# Room Participant State Documentation


Room list State API document


dependency installation


You can choose any of the following methods for dependency installation:
[npm]
``` bash
npm install tuikit-atomicx-vue3@latest --save
```
[pnpm]
``` bash
pnpm add tuikit-atomicx-vue3@latest
```
[yarn]
``` bash
yarn add tuikit-atomicx-vue3@latest
```


## Enums


### DeviceType
Device Type Enumeration


```typescript
export enum DeviceType {
  Microphone
  Camera = "Camera",            // Camera
  ScreenShare = "ScreenShare",  // Screen sharing
}
```


### DeviceStatus
Device Status Enumeration


```typescript
export enum DeviceStatus {
  On = "On",    // Enable
  Off = "Off",  // Disable
}
```


### NetworkQuality
Network quality enumeration


```typescript
export enum NetworkQuality {
  Unknown = 0,    // Unknown
  Excellent = 1,  // Excellent
  Good = 2,       // Good
  3       // Poor
  Bad = 4,        // Bad
  VeryBad = 5,    // Poor
  Down = 6,       // Disconnected
}
```


### ParticipantRole
Participant Role Enumeration


```typescript
export enum ParticipantRole {
  Owner = 0,        // Room owner
  Admin = 1,        // Admin
  GeneralUser = 2,  // Regular user
}
```


### KickedOutOfRoomReason
Reasons for being kicked out of the room


```typescript
export enum KickedOutOfRoomReason {
  KickedByAdmin = "KickedByAdmin",                          // Kicked out by admin
  ReplacedByAnotherDevice = "ReplacedByAnotherDevice",      // Replaced by another device
  KickedByServer = "KickedByServer",                        // Kicked out by server
  ConnectionTimeout = "ConnectionTimeout",                   // Connection timeout
  InvalidStatusOnReconnect = "InvalidStatusOnReconnect",    // Invalid status on reconnect
  RoomLimitExceeded = "RoomLimitExceeded",                  // Room occupancy limit exceeded
}
```


## Interfaces


### NetworkInfo
Network information interface


```typescript
export interface NetworkInfo {
  quality: NetworkQuality;  // Network quality
  upLoss: number;          // upstream packet loss rate
  downLoss: number;        // downstream packet loss rate
  delay: number;           // delay
}
```


### RoomParticipant
Participant Information (inherits from RoomUser)


```typescript
export interface RoomParticipant extends RoomUser {
  nameCard: string;                        // Business card/Nickname
  role: ParticipantRole;                   // Role
  microphoneStatus: DeviceStatus;          // Mic status
  cameraStatus: DeviceStatus;              // Camera status
  screenShareStatus: DeviceStatus;         // Screen sharing status
  isMessageDisabled: boolean;              // Whether to disable messages
  metaData: Record<string, string>;        // Metadata
}
```


### DeviceRequestInfo
Device request info


```typescript
export interface DeviceRequestInfo {
  timestamp: number;          // Timestamp
  senderUserId: string;       // Sender UID
  senderUserName: string;     // Sender username
  senderNameCard: string;     // Sender business card
  senderAvatarURL: string;    // Sender avatar URL
  content: string;            // Request content
  deviceType: DeviceType;     // Device type
}
```


## IRoomParticipantState Interface


Room participant status management API


### Properties


```typescript
export interface IRoomParticipantState {
  participantList: RoomParticipant[];                    // Participant list
  participantListCursor: string;                         // Participant list cursor
  participantListWithVideo: RoomParticipant[];           // List of participants with video enabled
  participantWithScreen: RoomParticipant | null;         // Participant with ongoing screen sharing
  pendingDeviceApplications: DeviceRequestInfo[];        // Pending equipment applications
  pendingDeviceInvitations: DeviceRequestInfo[];         // Pending device invitations
  speakingUsers: Map<string, number>;                    // Users currently speaking (uid -> volume)
  networkQualities: Map<string, NetworkInfo>;            // Network quality information (uid -> network info)
  
  readonly localParticipant: RoomParticipant | null;     // Local participant information (read-only)
}
```


### Methods


#### Participant Management


- **getParticipantList(options: { cursor?: string, count?: number }): Promise<RoomParticipant[]>**
  -Get the participant list


#### Role Management


- **transferOwner(options: { userId: string }): Promise<void>**
  -Transfer owner permission


- **setAdmin(options: { userId: string }): Promise<void>**
  -Set administrator


- **revokeAdmin(options: { userId: string }): Promise<void>**
  - Revoke admin permission


- **kickParticipant(options: { userId: string }): Promise<void>**
  - Kick out participant


#### Participant Information Management


- **updateParticipantNameCard(options: { userId: string, nameCard: string }): Promise<void>**
  - Update participant business card


- **updateParticipantMetaData(options: { userId: string, metaData: Record<string, string> }): Promise<void>**
  - Update participant metadata


Device control


- **closeParticipantDevice(options: { userId: string, deviceType: DeviceType }): Promise<void>**
  -Turn off participant device


- **muteParticipantMessage(options: { userId: string, mute: boolean }): Promise<void>**
  - Mute/Unblock participant


- **disableAllDevices(options: { deviceType: DeviceType, disable: boolean }): Promise<void>**
  - Disable/Enable all devices


- **disableAllMessages(options: { disable: boolean }): Promise<void>**
  -Disable/Enable all messages


#### Device Request Management


- **requestToOpenDevice(options: { device: DeviceType; timeout?: number }): Promise<void>**
  -Request to turn on the device


- **cancelOpenDeviceRequest(options: { device: DeviceType }): Promise<void>**
  -Cancel device start request


- **approveOpenDeviceRequest(options: { device: DeviceType; userId: string }): Promise<void>**
  - Approve device start request


- **rejectOpenDeviceRequest(options: { device: DeviceType; userId: string; }): Promise<void>**
  - Deny device start request


#### Device Invitation Management


- **inviteToOpenDevice(options: { device: DeviceType; userId: string; timeout?: number }): Promise<void>**
  - Device enabling invitation


- **cancelOpenDeviceInvitation(options: { device: DeviceType; userId: string }): Promise<void>**
  - Cancel device enabling invitation


- **acceptOpenDeviceInvitation(options: {device: DeviceType; userId: string; }): Promise<void>**
  -Accept device enabling invitation


- **declineOpenDeviceInvitation(options: {device: DeviceType; userId: string; }): Promise<void>**
  - Deny device enabling invitation


### Event Handlers


#### Participant status event


- **onParticipantJoined: (options: { participant: RoomParticipant }) => void**
  - Trigger when a participant joins


- **onParticipantLeft: (options: { participant: RoomParticipant }) => void**
  - Trigger when a participant leaves


#### Role change event


- **onOwnerChanged: (options: { newOwner: RoomParticipant }) => void**
  - Trigger on host change


- **onAdminSet: (options: { userInfo: RoomParticipant }) => void**
  - Trigger when setting administrator


- **onAdminRevoked: (options: { userInfo: RoomParticipant }) => void**
  - Trigger when revoking admin


#### Room management event


- **onKickedFromRoom: (options: { reason: KickedOutOfRoomReason, message: string }) => void**
  - Trigger when being kicked out of the room


#### Device control event


- **onParticipantDeviceClosed: (options: { userId: string, device: DeviceType, operator: RoomUser }) => void**
  - Trigger when a participant's device is closed


- **onParticipantMessageMuted: (options: { userId: string, muted: boolean, operator: RoomUser }) => void**
  - Trigger when a participant is muted/unblocked


- **onAllDevicesDisabled: (options: { device: DeviceType, disable: boolean, operator: RoomUser }) => void**
  -Trigger when all devices are disabled/enabled


- **onAllMessagesDisabled: (options: { disable: boolean, operator: RoomUser }) => void**
  - Trigger when all messages are disabled/enabled


#### Device Request Event


- **onDeviceRequestReceived: (options: { request: DeviceRequestInfo }) => void**
  - Trigger when a device request is received


- **onDeviceRequestCancelled: (options: { request: DeviceRequestInfo }) => void**
  - Trigger when a device request is canceled


- **onDeviceRequestTimeout: (options: { request: DeviceRequestInfo }) => void**
  - Trigger when a device request times out


- **onDeviceRequestApproved: (options: { request: DeviceRequestInfo, operator: RoomUser }) => void**
  - Trigger when a device request is approved


- **onDeviceRequestRejected: (options: { request: DeviceRequestInfo, operator: RoomUser }) => void**
  -Trigger when a device request is rejected


- **onDeviceRequestProcessed: (options: { request: DeviceRequestInfo, operator: RoomUser }) => void**
  - Trigger when a device request is processed


#### Device Invitation Event


- **onDeviceInvitationReceived: (options: { invitation: DeviceRequestInfo }) => void**
  - Trigger when a device invitation is received


- **onDeviceInvitationCancelled: (options: { invitation: DeviceRequestInfo }) => void**
  - Trigger when a device invitation is cancelled


- **onDeviceInvitationTimeout: (options: { invitation: DeviceRequestInfo }) => void**
  - Trigger when a device invitation times out


- **onDeviceInvitationAccepted: (options: { invitation: DeviceRequestInfo, operator: RoomUser }) => void**
  - Trigger when a device invitation is accepted


- **onDeviceInvitationDeclined: (options: { invitation: DeviceRequestInfo, operator: RoomUser }) => void**
  - Trigger when a device invitation is rejected


### Example


API and event usage example
```typescript
import { useRoomParticipantState } from 'tuikit-atomicx-vue3';
const {
  getParticipantList,
    subscribeEvent,
  unsubscribeEvent
} = useRoomParticipantState();
```
