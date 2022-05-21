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
import { sealed } from "@dnvue/common";
import CryptoJS from "crypto-js";
/**
 * 提供了哈希计算相关的基本方法。
 *
 * @export
 * @abstract
 * @class HashAlgorithm
 * @implements {IHashAlgorithm}
 */
export class HashAlgorithm {
    computeHash(s) {
        const input = this._getBytes(s);
        const hashOutput = this._internalComputeHash(input);
        return this._toHexString(hashOutput);
    }
    /**
     * 获取字符串 s 的字节数据。
     *
     * @protected
     * @param {string} s 字符串。
     * @returns {CryptoJS.lib.WordArray}
     * @memberof HashAlgorithm
     */
    _getBytes(s) {
        return CryptoJS.enc.Utf8.parse(s);
    }
    /**
     * 将字节数据转换成十六进制字符串（小写的）。
     *
     * @protected
     * @param {CryptoJS.lib.WordArray} input 字节数据。
     * @returns {string}
     * @memberof HashAlgorithm
     */
    _toHexString(input) {
        return CryptoJS.enc.Hex.stringify(input).toLowerCase();
    }
}
/**
 * 提供了 MD5 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class MD5AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {IHashAlgorithm}
 * @sealed
 */
let MD5AlgorithmProvider = class MD5AlgorithmProvider extends HashAlgorithm {
    _internalComputeHash(data, options) {
        return CryptoJS.MD5(data);
    }
};
MD5AlgorithmProvider = __decorate([
    sealed
], MD5AlgorithmProvider);
export { MD5AlgorithmProvider };
/**
 * 提供了 SHA1 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA1AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {IHashAlgorithm}
 * @sealed
 */
let SHA1AlgorithmProvider = class SHA1AlgorithmProvider extends HashAlgorithm {
    _internalComputeHash(data, options) {
        return CryptoJS.SHA1(data);
    }
};
SHA1AlgorithmProvider = __decorate([
    sealed
], SHA1AlgorithmProvider);
export { SHA1AlgorithmProvider };
/**
 * 提供了 SHA2-256 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA256AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {IHashAlgorithm}
 * @sealed
 */
let SHA256AlgorithmProvider = class SHA256AlgorithmProvider extends HashAlgorithm {
    _internalComputeHash(data, options) {
        return CryptoJS.SHA256(data);
    }
};
SHA256AlgorithmProvider = __decorate([
    sealed
], SHA256AlgorithmProvider);
export { SHA256AlgorithmProvider };
/**
 * 提供了 SHA2-512 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA512AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {IHashAlgorithm}
 * @sealed
 */
let SHA512AlgorithmProvider = class SHA512AlgorithmProvider extends HashAlgorithm {
    _internalComputeHash(data, options) {
        return CryptoJS.SHA512(data);
    }
};
SHA512AlgorithmProvider = __decorate([
    sealed
], SHA512AlgorithmProvider);
export { SHA512AlgorithmProvider };
/**
 * 提供了 SHA3 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA3AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {IHashAlgorithm}
 * @sealed
 */
let SHA3AlgorithmProvider = class SHA3AlgorithmProvider extends HashAlgorithm {
    _internalComputeHash(data, options) {
        return CryptoJS.SHA3(data, options);
    }
    /**
     * 使用 SHA3 算法进行哈希运算。
     *
     * @param {string} s 字符串。
     * @param {((512 | 384 | 256 | 224))} [length=512] SHA3 哈希值长度。
     * @returns {string}
     * @memberof SHA3AlgorithmProvider
     */
    computeSHA3(s, length = 512) {
        const input = this._getBytes(s);
        const output = this._internalComputeHash(input, { outputLength: length });
        return this._toHexString(output);
    }
};
SHA3AlgorithmProvider = __decorate([
    sealed
], SHA3AlgorithmProvider);
export { SHA3AlgorithmProvider };
/**
 * 提供了 RIPEMD160 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class RIPEMD160AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {IHashAlgorithm}
 * @sealed
 */
let RIPEMD160AlgorithmProvider = class RIPEMD160AlgorithmProvider extends HashAlgorithm {
    _internalComputeHash(data, options) {
        return CryptoJS.RIPEMD160(data);
    }
};
RIPEMD160AlgorithmProvider = __decorate([
    sealed
], RIPEMD160AlgorithmProvider);
export { RIPEMD160AlgorithmProvider };
