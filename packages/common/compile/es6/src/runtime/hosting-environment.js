// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
/**
 * 提供了访问主机环境信息相关的方法。
 *
 * @export
 * @class HostingEnvironment
 * @implements {dnvue.IHostingEnvironment}
 */
export class HostingEnvironment {
    /**
     * 用于初始化一个 {HostingEnvironment} 类型的对象实例。
     *
     * @param {string} [envName] 环境名称。
     * @memberof HostingEnvironment
     */
    constructor(envName) {
        var _a;
        this.environmentName = Object.safeGet(envName, (_a = process === null || process === void 0 ? void 0 : process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "production");
    }
    get isDevelopment() {
        return this.is("development");
    }
    get isProduction() {
        return this.is("production");
    }
    is(envName) {
        return this.environmentName.toLowerCase() === envName.toLowerCase();
    }
}
