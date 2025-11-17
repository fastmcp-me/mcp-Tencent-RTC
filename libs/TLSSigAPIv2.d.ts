/**
 * TLSSigAPIv2 TypeScript 声明文件
 * 用于腾讯云实时音视频(TRTC)和即时通信(IM)服务的签名生成
 */

/**
 * TLS签名API类
 */
export declare class Api {
    /**
     * 构造函数
     * @param sdkappid - 应用的SDKAppID
     * @param key - 应用的密钥
     */
    constructor(sdkappid: number, key: string);

    /**
     * SDKAppID
     */
    readonly sdkappid: number;

    /**
     * 应用密钥
     */
    readonly key: string;

    /**
     * 生成UserSig签名
     * 用于签发 TRTC 和 IM 服务中必须要使用的 UserSig 鉴权票据
     * 
     * @param userid - 用户id，限制长度为32字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符
     * @param expire - UserSig 票据的过期时间，单位是秒，比如 86400 代表生成的 UserSig 票据在一天后就无法再使用了
     * @returns 返回生成的UserSig字符串
     */
    genUserSig(userid: string, expire: number): string;

    /**
     * 生成PrivateMapKey权限票据（数字房间号）
     * 用于签发 TRTC 进房参数中可选的 PrivateMapKey 权限票据
     * 
     * @param userid - 用户id，限制长度为32字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符
     * @param expire - PrivateMapKey 票据的过期时间，单位是秒
     * @param roomid - 房间号，用于指定该 userid 可以进入的房间号
     * @param privilegeMap - 权限位，使用了一个字节中的 8 个比特位，分别代表八个具体的功能权限开关
     * @returns 返回生成的PrivateMapKey字符串
     */
    genPrivateMapKey(userid: string, expire: number, roomid: number, privilegeMap: number): string;

    /**
     * 生成PrivateMapKey权限票据（字符串房间号）
     * 用于签发 TRTC 进房参数中可选的 PrivateMapKey 权限票据
     * 
     * @param userid - 用户id，限制长度为32字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符
     * @param expire - PrivateMapKey 票据的过期时间，单位是秒
     * @param roomstr - 字符串房间号，用于指定该 userid 可以进入的房间号
     * @param privilegeMap - 权限位，使用了一个字节中的 8 个比特位，分别代表八个具体的功能权限开关
     * @returns 返回生成的PrivateMapKey字符串
     */
    genPrivateMapKeyWithStringRoomID(userid: string, expire: number, roomstr: string, privilegeMap: number): string;

    /**
     * 通用签名生成方法
     * @param userid - 用户ID
     * @param expire - 过期时间（秒）
     * @param userBuf - 用户缓冲区数据，可选
     * @returns 返回生成的签名字符串
     */
    genSig(userid: string, expire: number, userBuf?: Buffer | null): string;

    /**
     * 生成HMAC-SHA256签名（私有方法）
     * @private
     */
    private _hmacsha256(identifier: string, currTime: number, expire: number, base64UserBuf?: string | null): string;

    /**
     * 生成用户缓冲区数据（私有方法）
     * @private
     */
    private _genUserbuf(
      account: string,
      dwAuthID: number,
      dwExpTime: number,
      dwPrivilegeMap: number,
      dwAccountType: number,
      roomstr?: string | null
    ): Buffer;
  }

/**
 * 权限位常量定义
 * 使用了一个字节中的 8 个比特位，分别代表八个具体的功能权限开关
 */
export declare namespace PrivilegeMap {
  /** 创建房间的权限 */
  const CREATE_ROOM = 1;
  /** 加入房间的权限 */
  const JOIN_ROOM = 2;
  /** 发送语音的权限 */
  const SEND_AUDIO = 4;
  /** 接收语音的权限 */
  const RECEIVE_AUDIO = 8;
  /** 发送视频的权限 */
  const SEND_VIDEO = 16;
  /** 接收视频的权限 */
  const RECEIVE_VIDEO = 32;
  /** 发送辅路（屏幕分享）视频的权限 */
  const SEND_SUB_VIDEO = 64;
  /** 接收辅路（屏幕分享）视频的权限 */
  const RECEIVE_SUB_VIDEO = 128;
  /** 所有权限 */
  const ALL_PRIVILEGES = 255;
}

/**
 * 使用示例：
 * 
 * ```typescript
 * import { Api } from './TLSSigAPIv2';
 * // 或者使用 CommonJS 方式：
 * // const { Api } = require('./TLSSigAPIv2');
 * 
 * const api = new Api(1400000000, 'your-secret-key');
 * 
 * // 生成UserSig
 * const userSig = api.genUserSig('user123', 86400);
 * 
 * // 生成PrivateMapKey（数字房间号）
 * const privateMapKey = api.genPrivateMapKey('user123', 86400, 12345, 255);
 * 
 * // 生成PrivateMapKey（字符串房间号）
 * const privateMapKeyStr = api.genPrivateMapKeyWithStringRoomID('user123', 86400, 'room_abc', 255);
 * ```
 */