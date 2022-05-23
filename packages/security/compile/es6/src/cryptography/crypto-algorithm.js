// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
export class CryptoAlgorithm {
    /**
     * 用于初始化一个 CryptoAlgorithm 类型的对象实例。
     *
     * @param {string} secureKey 默认的解密密钥。
     * @memberof CryptoAlgorithm
     */
    constructor(secureKey) {
        this.defaultSecureKey = secureKey;
    }
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
let DESCryptoAlgorithm = class DESCryptoAlgorithm extends CryptoAlgorithm {
    encrypt(plainText, secureKey) {
        return CryptoJS.DES.encrypt(plainText, secureKey !== null && secureKey !== void 0 ? secureKey : this.defaultSecureKey).toString();
    }
    decrypt(secureText, secureKey) {
        return CryptoJS.DES.decrypt(secureText, secureKey !== null && secureKey !== void 0 ? secureKey : this.defaultSecureKey).toString(CryptoJS.enc.Utf8);
    }
    /**
     * 用于初始化一个 DESCryptoAlgorithm 类型的对象实例。
     *
     * @param {string} secureKey 默认的解密密钥。
     * @memberof CryptoAlgorithm
     */
    constructor(secureKey) {
        super(secureKey);
    }
};
DESCryptoAlgorithm = __decorate([
    sealed,
    __metadata("design:paramtypes", [String])
], DESCryptoAlgorithm);
export { DESCryptoAlgorithm };
/**
 * 提供了 AES 加密相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class AESCryptoAlgorithm
 * @extends {CryptoAlgorithm}
 * @implements {dnvue.security.ICryptoAlgorithm}
 * @sealed
 */
let AESCryptoAlgorithm = class AESCryptoAlgorithm extends CryptoAlgorithm {
    encrypt(plainText, secureKey) {
        return CryptoJS.AES.encrypt(plainText, secureKey !== null && secureKey !== void 0 ? secureKey : this.defaultSecureKey).toString();
    }
    decrypt(secureText, secureKey) {
        return CryptoJS.AES.decrypt(secureText, secureKey !== null && secureKey !== void 0 ? secureKey : this.defaultSecureKey).toString(CryptoJS.enc.Utf8);
    }
    /**
     * 用于初始化一个 AESCryptoAlgorithm 类型的对象实例。
     *
     * @param {string} secureKey 默认的解密密钥。
     * @memberof CryptoAlgorithm
     */
    constructor(secureKey) {
        super(secureKey);
    }
};
AESCryptoAlgorithm = __decorate([
    sealed,
    __metadata("design:paramtypes", [String])
], AESCryptoAlgorithm);
export { AESCryptoAlgorithm };
