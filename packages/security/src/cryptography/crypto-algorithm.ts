// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { sealed } from "@dnvue/common";
import CryptoJS from "crypto-js";

/**
 * 提供了加密解密算法相关的基本方法。
 *
 * @export
 * @abstract
 * @class CryptoAlgorithm
 * @implements {dnvue.security.ICryptoAlgorithm}
 */
export abstract class CryptoAlgorithm implements dnvue.security.ICryptoAlgorithm {
    /**
     * 获取一个字符串，用于表示默认的加密密钥。
     *
     * @protected
     * @type {string}
     * @memberof CryptoAlgorithm
     */
    protected readonly defaultSecureKey: string;

    /**
     * 用于初始化一个 CryptoAlgorithm 类型的对象实例。
     * 
     * @param {string} secureKey 默认的解密密钥。
     * @memberof CryptoAlgorithm
     */
    constructor(secureKey: string) {
        this.defaultSecureKey = secureKey;
    }

    abstract encrypt(plainText: string, secureKey?: string | undefined): string;

    abstract decrypt(secureText: string, secureKey?: string | undefined): string;
}

/**
 * 提供了 DES 加密相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class DESCryptoAlgorithm
 * @extends {CryptoAlgorithm}
 * @implements {dnvue.security.ICryptoAlgorithm}
 * @sealed
 */
@sealed
export class DESCryptoAlgorithm extends CryptoAlgorithm implements dnvue.security.ICryptoAlgorithm {
    encrypt(plainText: string, secureKey?: string | undefined): string {
        return CryptoJS.DES.encrypt(plainText, secureKey ?? this.defaultSecureKey).toString();
    }
    decrypt(secureText: string, secureKey?: string | undefined): string {
        return CryptoJS.DES.decrypt(secureText, secureKey ?? this.defaultSecureKey).toString(CryptoJS.enc.Utf8);
    }

    /**
     * 用于初始化一个 DESCryptoAlgorithm 类型的对象实例。
     * 
     * @param {string} secureKey 默认的解密密钥。
     * @memberof CryptoAlgorithm
     */
    constructor(secureKey: string) {
        super(secureKey);
    }
}

/**
 * 提供了 AES 加密相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class AESCryptoAlgorithm
 * @extends {CryptoAlgorithm}
 * @implements {dnvue.security.ICryptoAlgorithm}
 * @sealed
 */
 @sealed
 export class AESCryptoAlgorithm extends CryptoAlgorithm implements dnvue.security.ICryptoAlgorithm {
     encrypt(plainText: string, secureKey?: string | undefined): string {
         return CryptoJS.AES.encrypt(plainText, secureKey ?? this.defaultSecureKey).toString();
     }
     decrypt(secureText: string, secureKey?: string | undefined): string {
         return CryptoJS.AES.decrypt(secureText, secureKey ?? this.defaultSecureKey).toString(CryptoJS.enc.Utf8);
     }
 
     /**
      * 用于初始化一个 AESCryptoAlgorithm 类型的对象实例。
      * 
      * @param {string} secureKey 默认的解密密钥。
      * @memberof CryptoAlgorithm
      */
     constructor(secureKey: string) {
         super(secureKey);
     }
 }