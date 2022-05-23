/// <reference types="@dnvue/typings" />
import CryptoJS from "crypto-js";
/**
 * 提供了哈希计算相关的基本方法。
 *
 * @export
 * @abstract
 * @class HashAlgorithm
 * @implements {dnvue.security.IHashAlgorithm}
 */
export declare abstract class HashAlgorithm implements dnvue.security.IHashAlgorithm {
    computeHash(s: string): string;
    /**
     * 执行哈希运算。
     *
     * @abstract
     * @param {CryptoJS.lib.WordArray} data 字节数据。
     * @param {object} [options] 特殊配置。
     * @returns {CryptoJS.lib.WordArray}
     * @memberof HashAlgorithm
     */
    abstract _internalComputeHash(data: CryptoJS.lib.WordArray, options?: object): CryptoJS.lib.WordArray;
    /**
     * 获取字符串 s 的字节数据。
     *
     * @protected
     * @param {string} s 字符串。
     * @returns {CryptoJS.lib.WordArray}
     * @memberof HashAlgorithm
     */
    protected _getBytes(s: string): CryptoJS.lib.WordArray;
    /**
     * 将字节数据转换成十六进制字符串（小写的）。
     *
     * @protected
     * @param {CryptoJS.lib.WordArray} input 字节数据。
     * @returns {string}
     * @memberof HashAlgorithm
     */
    protected _toHexString(input: CryptoJS.lib.WordArray): string;
}
/**
 * 提供了 MD5 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class MD5AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {dnvue.security.IHashAlgorithm}
 * @sealed
 */
export declare class MD5AlgorithmProvider extends HashAlgorithm implements dnvue.security.IHashAlgorithm {
    _internalComputeHash(data: CryptoJS.lib.WordArray, options?: object | undefined): CryptoJS.lib.WordArray;
}
/**
 * 提供了 SHA1 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA1AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {dnvue.security.IHashAlgorithm}
 * @sealed
 */
export declare class SHA1AlgorithmProvider extends HashAlgorithm implements dnvue.security.IHashAlgorithm {
    _internalComputeHash(data: CryptoJS.lib.WordArray, options?: object | undefined): CryptoJS.lib.WordArray;
}
/**
 * 提供了 SHA2-256 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA256AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {dnvue.security.IHashAlgorithm}
 * @sealed
 */
export declare class SHA256AlgorithmProvider extends HashAlgorithm implements dnvue.security.IHashAlgorithm {
    _internalComputeHash(data: CryptoJS.lib.WordArray, options?: object | undefined): CryptoJS.lib.WordArray;
}
/**
 * 提供了 SHA2-512 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA512AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {dnvue.security.IHashAlgorithm}
 * @sealed
 */
export declare class SHA512AlgorithmProvider extends HashAlgorithm implements dnvue.security.IHashAlgorithm {
    _internalComputeHash(data: CryptoJS.lib.WordArray, options?: object | undefined): CryptoJS.lib.WordArray;
}
/**
 * 提供了 SHA3 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SHA3AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {dnvue.security.IHashAlgorithm}
 * @sealed
 */
export declare class SHA3AlgorithmProvider extends HashAlgorithm implements dnvue.security.IHashAlgorithm {
    _internalComputeHash(data: CryptoJS.lib.WordArray, options?: object | undefined): CryptoJS.lib.WordArray;
    /**
     * 使用 SHA3 算法进行哈希运算。
     *
     * @param {string} s 字符串。
     * @param {((512 | 384 | 256 | 224))} [length=512] SHA3 哈希值长度。
     * @returns {string}
     * @memberof SHA3AlgorithmProvider
     */
    computeSHA3(s: string, length?: (512 | 384 | 256 | 224)): string;
}
/**
 * 提供了 RIPEMD160 哈希算法相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class RIPEMD160AlgorithmProvider
 * @extends {HashAlgorithm}
 * @implements {dnvue.security.IHashAlgorithm}
 * @sealed
 */
export declare class RIPEMD160AlgorithmProvider extends HashAlgorithm implements dnvue.security.IHashAlgorithm {
    _internalComputeHash(data: CryptoJS.lib.WordArray, options?: object | undefined): CryptoJS.lib.WordArray;
}
