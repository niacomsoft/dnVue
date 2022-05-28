// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { SHA1AlgorithmProvider } from "@dnvue/security";
/**
 * 提供了身份认证凭据相关的基本方法。
 *
 * @export
 * @abstract
 * @class Credentials
 * @implements {ICredentials}
 */
export class Credentials {
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
export class BasicCredentials extends Credentials {
    /**
     * 用于初始化一个 BasicCredentials 类型的对象实例。
     *
     * @param {string} userName 用户名。
     * @param {string} password 登录密码。
     * @memberof BasicCredentials
     */
    constructor(userName, password) {
        super();
        this.userName = userName;
        this.password = password;
    }
    /**
     * 创建身份认证凭据。
     *
     * @static
     * @param {string} userName 用户名。
     * @param {string} password 密码。
     * @returns {IBasicCredentials}
     * @memberof BasicCredentials
     */
    static create(userName, password) {
        return new BasicCredentials(userName, password);
    }
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
export class SecureBasicCredentials extends BasicCredentials {
    /**
     * 用于初始化一个 SecureBasicCredentials 类型的对象实例。
     *
     * @param {string} userName 用户名。
     * @param {string} password 密码。
     * @param {dnvue.security.IHashAlgorithm} [hashAlg] 用于加密密码的哈希算法。
     * @memberof SecureBasicCredentials
     */
    constructor(userName, password, hashAlg) {
        super(userName, password);
        this.hashAlgorithm = Object.safeGet(hashAlg, new SHA1AlgorithmProvider());
        this.securePassword = this.hashAlgorithm.computeHash(password);
    }
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
    static create(userName, password, hashAlg) {
        return new SecureBasicCredentials(userName, password, hashAlg);
    }
}
