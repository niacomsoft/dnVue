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
export class HostingEnvironment implements dnvue.IHostingEnvironment {
    readonly environmentName: string;

    /**
     * 用于初始化一个 {HostingEnvironment} 类型的对象实例。
     * 
     * @param {string} [envName] 环境名称。
     * @memberof HostingEnvironment
     */
    constructor(envName?: string) {
        this.environmentName = Object.safeGet<string>(envName, process?.env.NODE_ENV ?? "production");
    }

    is(envName: string): boolean {
        return this.environmentName.toLowerCase() === envName.toLowerCase();
    }
    readonly isDevelopment: boolean = this.is("development");
    readonly isProduction: boolean = this.is("production");

}