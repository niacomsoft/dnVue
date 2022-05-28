/// <reference types="@dnvue/typings" />
/**
 * 定义了身份认证凭据的接口。
 *
 * @export
 * @interface ICredentials
 */
export interface ICredentials {
}
/**
 * 提供了身份认证凭据相关的基本方法。
 *
 * @export
 * @abstract
 * @class Credentials
 * @implements {ICredentials}
 */
export declare abstract class Credentials implements ICredentials {
}
/**
 * 定义了基于用户名、密码的基础身份认证凭据的接口。
 *
 * @export
 * @interface IBasicCredentials
 * @extends {ICredentials}
 */
export interface IBasicCredentials extends ICredentials {
    /**
     * 获取一个字符串，用于表示用户名。
     *
     * @type {string}
     * @memberof IBasicCredentials
     */
    readonly userName: string;
    /**
     * 获取一个字符串，用于表示登录密码明文。
     *
     * @type {string}
     * @memberof IBasicCredentials
     */
    readonly password: string;
}
/**
 * 提供了基于用户名、密码相关的身份认证凭据方法。
 *
 * @export
 * @class BasicCredentials
 * @extends {Credentials}
 * @implements {IBasicCredentials}
 * @implements {ICredentials}
 */
export declare class BasicCredentials extends Credentials implements IBasicCredentials, ICredentials {
    readonly userName: string;
    readonly password: string;
    /**
     * 用于初始化一个 BasicCredentials 类型的对象实例。
     *
     * @param {string} userName 用户名。
     * @param {string} password 登录密码。
     * @memberof BasicCredentials
     */
    constructor(userName: string, password: string);
    /**
     * 创建身份认证凭据。
     *
     * @static
     * @param {string} userName 用户名。
     * @param {string} password 密码。
     * @returns {IBasicCredentials}
     * @memberof BasicCredentials
     */
    static create(userName: string, password: string): IBasicCredentials;
}
/**
 * 定义了基于用户名、加密的密码身份认证凭据的接口。
 *
 * @export
 * @interface ISecureBasicCredentials
 * @extends {IBasicCredentials}
 * @extends {ICredentials}
 */
export interface ISecureBasicCredentials extends IBasicCredentials, ICredentials {
    /**
     * 获取一个字符串，用于表示加密的登录密码。
     *
     * @type {string}
     * @memberof ISecureBasicCredentials
     */
    readonly securePassword: string;
    /**
     * 获取 dnvue.security.IHashAlgorithm 类型的对象实例，用于表示加密登录密码的哈希算法。
     *
     * @type {dnvue.security.IHashAlgorithm}
     * @memberof ISecureBasicCredentials
     */
    readonly hashAlgorithm: dnvue.security.IHashAlgorithm;
}
/**
 * 提供了基于用户名、加密密码相关的身份认证凭据方法。
 *
 * @export
 * @class SecureBasicCredentials
 * @extends {BasicCredentials}
 * @implements {ISecureBasicCredentials}
 * @implements {IBasicCredentials}
 * @implements {ICredentials}
 */
export declare class SecureBasicCredentials extends BasicCredentials implements ISecureBasicCredentials, IBasicCredentials, ICredentials {
    /**
     * 用于初始化一个 SecureBasicCredentials 类型的对象实例。
     *
     * @param {string} userName 用户名。
     * @param {string} password 密码。
     * @param {dnvue.security.IHashAlgorithm} [hashAlg] 用于加密密码的哈希算法。
     * @memberof SecureBasicCredentials
     */
    constructor(userName: string, password: string, hashAlg?: dnvue.security.IHashAlgorithm);
    readonly securePassword: string;
    readonly hashAlgorithm: dnvue.security.IHashAlgorithm;
    /**
     * 创建基于用户名、加密密码的身份认证凭据。
     *
     * @static
     * @param {string} userName 用户名。
     * @param {string} password 密码。
     * @param {dnvue.security.IHashAlgorithm} [hashAlg] 加密密码的哈希算法。
     * @returns {ISecureBasicCredentials}
     * @memberof SecureBasicCredentials
     */
    static create(userName: string, password: string, hashAlg?: dnvue.security.IHashAlgorithm): ISecureBasicCredentials;
}
