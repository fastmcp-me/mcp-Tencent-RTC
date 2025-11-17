# Device State Documentation


## Install dependency


You can choose any method below for dependency installation:
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


### DeviceError
Device error enumeration


```typescript
export enum DeviceError {
  NoError = 0,              // No error
  NoDeviceDetected = 1,     // No device detected
  NoSystemPermission = 2,   // No system permission
  NotSupportCapture = 3,    // Capture not supported
  OccupiedError = 4,        // Device occupied
  UnknownError = 5,         // Unknown error
}
```


### AudioRoute
Audio route enumeration


```typescript
export enum AudioRoute {
  Speakerphone = 0,  // Speaker
  Earpiece = 1,      // Earpiece
}
```


### MirrorType
Image Type Enumeration


```typescript
export enum MirrorType {
  Auto = 0,      // Automatic
  Enable = 1,    // Enable
  Disable = 2,   // Disable
}
```


### DeviceType
Device Type enumeration


```typescript
export enum DeviceType {
  Microphone = 'Microphone',    // Microphone
  Camera = 'Camera',            // Camera
  ScreenShare = 'ScreenShare',    // Screen sharing
}
```


### VideoQuality
Video quality enumeration


```typescript
export enum VideoQuality {
  Quality360P = 1,   // 360P resolution
  Quality540P = 2,   // 540P resolution
  Quality720P = 3,   // 720P resolution
  Quality1080P = 4,  // 1080P resolution
}
```


### DevicePermission
Device permission enumeration


```typescript
export enum DevicePermission {
  PublishAudio = 'PublishAudio',    // Publish audio permission
  PublishVideo = 'PublishVideo',    // Publish video permission
  ScreenShare = 'ScreenShare',      // Screen sharing permission
}
```


### MediaSettingDisplayMode
Media settings display mode enumerate


```typescript
export enum MediaSettingDisplayMode {
  Icon = 'Icon',                    // Icon mode only
  IconWithPanel = 'IconWithPanel',  // Icon with panel mode
  Panel = 'Panel',                  // Panel mode only
}
```


### DeviceStatus
Device status enumeration


```typescript
export enum DeviceStatus {
  Off = 0,  // Off
  On = 1,   // On
}
```


### NetworkQuality
Network quality enumeration


```typescript
export enum NetworkQuality {
  Unknown = 0,    // Unknown
  Excellent = 1,   // Excellent
  Good = 2,       // Good
  Poor = 3,       // Poor
  Bad = 4,        // Bad
  VeryBad = 5,    // Poor
  Down = 6,       // Disconnected
}
```


## Interfaces


### VideoSettingProps
Video settings property API


```typescript
export interface VideoSettingProps {
  displayMode: MediaSettingDisplayMode;  // Display mode (required)
  supportSwitchCamera?: boolean;         // Whether switching camera is supported (optional)
  supportSwitchResolution?: boolean;     // Whether switching resolution is supported (optional)
  supportVideoPreview?: boolean;         // Whether video preview is supported (optional)
  supportSwitchMirror?: boolean;         // Whether switching mirror is supported (optional)
}
```


Attribute description


-**displayMode**: Set the display mode to determine the UI presentation form
- **supportSwitchCamera**: Whether to allow user access to switch between front and rear cameras
- **supportSwitchResolution**: Whether to allow user access to switch video resolution
- **supportVideoPreview**: Whether to display video preview
- **supportSwitchMirror**: Whether to allow user access to toggle the video mirror effect


### AudioSettingProps
Audio settings property API


```typescript
export interface AudioSettingProps {
  displayMode: MediaSettingDisplayMode;  // Display mode (required)
  supportSwitchMicrophone?: boolean;     // Whether switching microphone is supported (optional)
  supportSwitchSpeaker?: boolean;        // Whether switching speaker is supported (optional)
  supportAudioLevel?: boolean;           // Whether audio level display is supported (optional)
}
```


Attribute description


-**displayMode**: Set the display mode to determine the UI presentation form
- **supportSwitchMicrophone**: Whether to allow user access to switch microphone device
- **supportSwitchSpeaker**: Whether to allow user access to switch speaker device
- **supportAudioLevel**: Whether to display the audio level indicator


### NetworkInfo
Network information API


```typescript
export interface NetworkInfo {
  quality: NetworkQuality;  // Network quality level
  upLoss: number;          // Upstream packet loss rate (percentage)
  downLoss: number;        // Downstream packet loss rate (percentage)
  delay: number;           // Network delay (ms)
}
```


Attribute description


-**quality**: Network quality level, for quick network condition judgment
- **upLoss**: Uplink packet loss rate, typically ranging from 0-100
- **downLoss**: Downlink packet loss rate, typically ranging from 0-100
- **delay**: Network round-trip delay time (milliseconds)


## Example


Video Settings Configuration Example


```typescript
const videoSettings: VideoSettingProps = {
  displayMode: MediaSettingDisplayMode.IconWithPanel,
  supportSwitchCamera: true,
  supportSwitchResolution: true,
  supportVideoPreview: true,
  supportSwitchMirror: false
};
```


Audio Settings Configuration Example


```typescript
const audioSettings: AudioSettingProps = {
  displayMode: MediaSettingDisplayMode.Panel,
  supportSwitchMicrophone: true,
  supportSwitchSpeaker: true,
  supportAudioLevel: true
};
```


Network information usage example


```typescript
const networkInfo: NetworkInfo = {
  quality: NetworkQuality.Good,
  upLoss: 2.5,
  downLoss: 1.8,
  delay: 45
};


// Display notification based on network quality
function getNetworkStatusText(info: NetworkInfo): string {
  switch (info.quality) {
    case NetworkQuality.Excellent:
      return "Network condition is excellent";
    case NetworkQuality.Good:
      return "Network condition is good";
    case NetworkQuality.Poor:
      return "Network condition is poor";
    default:
      return "Network condition is unknown";
  }
}
```


## Must-Knows


1. **Device permission**: Ensure you obtain appropriate system permission before using the camera and microphone.
2. **Error handling**: It is recommended to provide corresponding user notifications based on the `DeviceError` enumeration value.
3. **Network monitoring**: Perform periodic checks on `NetworkInfo` to optimize user experience.
4. **Device compatibility**: Video quality and features may vary by device.


## API and event usage example
```typescript
import { useDeviceState } from 'tuikit-atomicx-vue3';
const {
    Microphone data
    microphoneStatus,
    microphoneList,
    currentMicrophone,
    microphoneLastError,
    isMicrophoneTesting,
    currentMicVolume,
    captureVolume,
    testingMicVolume,


    camera data
    cameraStatus,
    cameraList,
    currentCamera,
    cameraLastError,
    isCameraTesting,
    isCameraTestLoading,
    isFrontCamera,
    localMirrorType,
    localVideoQuality,


    speaker data
    speakerList,
    currentSpeaker,
    outputVolume,
    currentAudioRoute,
    isSpeakerTesting,


    screen sharing data
    screenStatus,


    Local network data
    networkInfo,


    // Microphone operation
    openLocalMicrophone,
    closeLocalMicrophone,
    muteLocalAudio,
    unmuteLocalAudio,
    getMicrophoneList,
    setCurrentMicrophone,
    startMicrophoneTest,
    stopMicrophoneTest,
    setCaptureVolume,


    // Speaker operation
    getSpeakerList,
    setCurrentSpeaker,
    setAudioRoute,
    startSpeakerTest,
    stopSpeakerTest,
    setOutputVolume,


    camera operation
    openLocalCamera,
    closeLocalCamera,
    getCameraList,
    setCurrentCamera,
    switchCamera,
    switchMirror,
    updateVideoQuality,
    startCameraDeviceTest,
    stopCameraDeviceTest,


    Screen Sharing
    startScreenShare,
    stopScreenShare,
} = useDeviceState();
```
