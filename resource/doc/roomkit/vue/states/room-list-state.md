# Room List State Documentation


Room list State API document.


dependency installation


You can choose any following method for dependency installation:
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


### RoomStatus
Room status enumeration


```typescript
export enum RoomStatus {
  Scheduled = 1,  // Scheduled
  Running = 2,    // In progress
}
```


### RoomEndedReason
Room end reason enumeration


```typescript
export enum RoomEndedReason {
  ByOwner = 1,   // Ended by room owner
  ByServer = 2,  // Ended by server
}
```


### RoomInvitationStatus
Room invitation status enumeration


```typescript
export enum RoomInvitationStatus {
  None = 0,      // Stateless
  Pending = 1,   // Waiting
  Timeout = 2,   // Timeout
  Rejected = 3,  // Denied
}
```


### InvitationRejectedReason
Reasons for Invitation Rejection Enumeration


```typescript
export enum InvitationRejectedReason {
  Rejected = "Rejected",  // Denied
  Busy = "Busy",         // Busy
}
```


## Interfaces


### RoomUser
Room user info


```typescript
export interface RoomUser {
  userId: string;      // uid
  userName: string;    // Username
  avatarURL: string;   // Avatar URL
}
```


### RoomInfo
Room Information


```typescript
export interface RoomInfo {
  readonly roomId: string;                    // Room ID (read-only)
  roomName: string;                          // Room name
  roomOwner: RoomUser;                       // Room owner
  readonly participantCount: number;          // Participant count (read-only)
  readonly createTime: number;               // Creation time (read-only)
  readonly roomStatus: RoomStatus;           // Room status (read-only)
  scheduledStartTime?: number;               // Reservation start time (optional)
  scheduledEndTime?: number;                 // Reservation end time (optional)
  startReminderInSeconds?: number;           // Reminder time before start (seconds) (optional)
  scheduleAttendees?: RoomUser[];            // Reservation participant list (optional)
  password?: string;                         // Room password (optional)
  isAllMicrophoneDisabled: boolean;          // Whether ALL microphones are disabled
  isAllCameraDisabled: boolean;              // Whether ALL cameras are disabled
  isAllScreenShareDisabled: boolean;         // Whether ALL screen sharing is disabled
  isAllMessageDisabled: boolean;             // Whether ALL messages are disabled
}
```


### RoomInvitation
Room invitation message


```typescript
export interface RoomInvitation {
  roomInfo: RoomInfo;                        // Room Information
  inviter: RoomUser;                         // Inviter
  invitee: RoomUser;                         // Invitee
  status: RoomInvitationStatus;              // Invitation status
}
```


## Type Definitions


### ScheduleRoomOptions
Room reservation options


```typescript
export type ScheduleRoomOptions = {
  roomName?: string;                         // Room name (optional)
  password?: string;                         // Room password (optional)
  scheduleStartTime: number;                 // Reservation start time (required)
  scheduleEndTime: number;                   // Reservation end time (required)
  reminderSecondsBeforeStart?: number;       // Reminder time before start (seconds) (optional)
  scheduleAttendees?: string[];              // Reservation participant ID list (optional)
  isAllMicrophoneDisabled?: boolean;         // Whether ALL microphones are disabled (optional)
  isAllCameraDisabled?: boolean;             // Whether ALL cameras are disabled (optional)
  isAllScreenShareDisabled?: boolean;        // Whether ALL screen sharing is disabled (optional)
  isAllMessageDisabled?: boolean;            // Whether ALL messages are disabled (optional)
};
```


### ScheduleUpdateRoomOptions
Update room reservation options


```typescript
export type ScheduleUpdateRoomOptions = {
  roomName?: string;                         // Room name (optional)
  scheduledStartTime?: number;                // Reservation start time (optional)
  scheduleEndTime?: number;                  // Reservation end time (optional)
}
```


### CreateRoomOptions
Room creation options


```typescript
export type CreateRoomOptions = {
  roomName?: string;                         // Room name (optional)
  password?: string;                         // Room password (optional)
  isAllMicrophoneDisabled?: boolean;         // Whether ALL microphones are disabled (optional)
  isAllCameraDisabled?: boolean;             // Whether ALL cameras are disabled (optional)
  isAllScreenShareDisabled?: boolean;        // Whether ALL screen sharing is disabled (optional)
  isAllMessageDisabled?: boolean;            // Whether ALL messages are disabled (optional)
};
```


### UpdateRoomOptions
Update room options


```typescript
export type UpdateRoomOptions = {
  roomName?: string;                         // Room name (optional)
  password?: string;                         // Room password (optional)
};
```


## IRoomListState Interface


Room list status management API


### Properties


```typescript
export interface IRoomListState {
  scheduledRoomList: RoomInfo[];             // Reserved room list
  scheduledRoomListCursor: string;           // Reserved room list cursor
  currentRoom: RoomInfo | null;              // Current room info
}
```


### Methods


Room list management


- **getScheduledRoomList(options: { cursor: string, count?: number }): Promise<void>**
  -Retrieve the reserved room list


- **getScheduledAttendees(options: { roomId: string, cursor: string, count?: number }): Promise<{ attendees: RoomUser[], cursor: string }>**
  - Retrieve the reserved participant list


#### Room Reservation Management


- **scheduleRoom(options: { roomId: string, options: ScheduleRoomOptions }): Promise<void>**
  -Reserve a room


- **updateScheduledRoom(options: { roomId: string, options: ScheduleUpdateRoomOptions }): Promise<void>**
  - Update room reservation


- **addScheduledAttendees(options: { roomId: string, userIdList: string[] }): Promise<void>**
  - Add a reserved participant


- **removeScheduledAttendees(options: { roomId: string, userIdList: string[] }): Promise<void>**
  - Remove a reserved participant


- **cancelScheduledRoom(options: { roomId: string }): Promise<void>**
  - Cancel room reservation


#### Room Operations


- **createAndJoinRoom(options: { roomId: string, options: CreateRoomOptions }): Promise<void>**
  -Create and join a room


- **joinRoom(options: { roomId: string, password?: string }): Promise<void>**
  -Enter a room


- **leaveRoom(): Promise<void>**
  -Exit Room


- **endRoom(): Promise<void>**
  -End Room


- **updateRoomInfo(options: { roomId: string, options: UpdateRoomOptions }): Promise<void>**
  - Update room information


Invitation Management


- **callUserToRoom(options: { roomId: string, userIdList: string[] }): Promise<RoomInvitation>**
  -Invite users to a room


- **cancelCall(options: { roomId: string, userIdList: string[] }): Promise<void>**
  - Cancel invitation


- **getPendingInvitations(options: { roomId: string, cursor: string, count?: number }): Promise<{invitations: RoomInvitation[], cursor: string }>**
  - Retrieve pending invitations


### Event Handlers


#### Room Reservation Events


- **onAddedToScheduledRoom: (options: { roomInfo: RoomInfo; }) => void**
  -Trigger when added to a reserved room


- **onRemovedFromScheduledRoom: (options: { roomInfo: RoomInfo; operateUser: RoomUser }) => void**
  - Trigger when removed from a reserved room


- **onScheduledRoomCancelled: (options: { roomInfo: RoomInfo; operateUser: RoomUser }) => void**
  - Trigger when a room reservation is canceled


- **onScheduledRoomStartingSoon: (options: { roomInfo: RoomInfo }) => void**
  - Trigger when a room reservation will start soon


#### Room status event


- **onRoomEnded: (options: { roomId: string; reason: RoomEndedReason }) => void**
  - Trigger when a room ends


#### Invitation-related events


- **onRoomCallReceived: (options: { invitation: RoomInvitation }) => void**
  - Trigger when a room invitation is received


- **onRoomCallCancelled: (options: { invitation: RoomInvitation }) => void**
  - Trigger when a room invitation is canceled


- **onRoomCallTimeout: (options: { invitation: RoomInvitation }) => void**
  - Trigger when a room invitation times out


- **onRoomCallAccepted: (options: { invitation: RoomInvitation }) => void**
  - Trigger when a room invitation is accepted


- **onRoomCallRejected: (options: { invitation: RoomInvitation, reason: InvitationRejectedReason }) => void**
  - Trigger when a room invitation is rejected


### Example


## API and Event Usage Example
```typescript
import { useRoomListState } from 'tuikit-atomicx-vue3';
const {
  joinRoom,
  leaveRoom,
  endRoom,
  subscribeEvent,
  unsubscribeEvent
} = useRoomListState();
```
