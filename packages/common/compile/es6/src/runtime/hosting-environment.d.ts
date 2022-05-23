/// <reference types="@dnvue/typings" />
/**
 * 提供了访问主机环境信息相关的方法。
 *
 * @export
 * @class HostingEnvironment
 * @implements {dnvue.IHostingEnvironment}
 */
export declare class HostingEnvironment implements dnvue.IHostingEnvironment {
    readonly environmentName: string;
    /**
     * 用于初始化一个 {HostingEnvironment} 类型的对象实例。
     *
     * @param {string} [envName] 环境名称。
     * @memberof HostingEnvironment
     */
    constructor(envName?: string);
    is(envName: string): boolean;
    readonly isDevelopment: boolean;
    readonly isProduction: boolean;
}
