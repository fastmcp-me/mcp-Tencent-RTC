# chat-uikit-react Login

This document provides example code for chat-uikit-react login. The component login is driven by the login API provided by useLoginState.

## 1. Login

```tsx
import { ref } from 'vue';
import { useLoginState } from '@tencentcloud/chat-uikit-react';


const userID = '';        // TODO: Replace with your userID
const SDKAppID = 0;        // TODO: Replace with your SDKAppID (Notice: SDKAppID is of type number)
const userSig = '';   // TODO: Replace with your userSig


const { status } = useLoginState({
  SDKAppID,
  userID,
  userSig,
})

if (status !== LoginStatus.SUCCESS) {
  return <div>Loading...</div>
}
```
