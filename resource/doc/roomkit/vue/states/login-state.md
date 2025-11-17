# Room LoginState Documentation


Room component login API document.

## Install dependency


you can choose any method below for dependency installation:
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


## API usage example


```typescript
import { useLoginState } from 'tuikit-atomicx-vue3';
const {
  loginUserInfo,
  login,
  logout,
  setSelfInfo,
} = useLoginState();


// Log in.
login({
  userId: 'xxx';
  userSig: 'xxx';
  sdkAppId: 0;
}).then(() => {
  // Get logged-in user info after successful login
  const { userId, userName, avatarUrl, customInfo } = loginUserInfo;
})


// Log out
logout();


// Set user information
setSelfInfo({
  userName: 'xxx',
  avatarUrl: 'xxx',
});


```
