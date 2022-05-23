/// <reference types="@dnvue/typings" />
/**
 * 提供了加密解密算法相关的基本方法。
 *
 * @export
 * @abstract
 * @class CryptoAlgorithm
 * @implements {dnvue.security.ICryptoAlgorithm}
 */
export declare abstract class CryptoAlgorithm implements dnvue.security.ICryptoAlgorithm {
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
    constructor(secureKey: string);
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
export declare class DESCryptoAlgorithm extends CryptoAlgorithm implements dnvue.security.ICryptoAlgorithm {
    encrypt(plainText: string, secureKey?: string | undefined): string;
    decrypt(secureText: string, secureKey?: string | undefined): string;
    /**
     * 用于初始化一个 DESCryptoAlgorithm 类型的对象实例。
     *
     * @param {string} secureKey 默认的解密密钥。
     * @memberof CryptoAlgorithm
     */
    constructor(secureKey: string);
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
export declare class AESCryptoAlgorithm extends CryptoAlgorithm implements dnvue.security.ICryptoAlgorithm {
    encrypt(plainText: string, secureKey?: string | undefined): string;
    decrypt(secureText: string, secureKey?: string | undefined): string;
    /**
     * 用于初始化一个 AESCryptoAlgorithm 类型的对象实例。
     *
     * @param {string} secureKey 默认的解密密钥。
     * @memberof CryptoAlgorithm
     */
    constructor(secureKey: string);
}
