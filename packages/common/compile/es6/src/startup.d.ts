/// <reference types="@dnvue/typings" />
/**
 * 提供了配置应用程序相关的方法。
 *
 * @export
 * @class Startup
 */
export declare class Startup {
    /**
     * 配置应用程序。
     *
     * @static
     * @param {dnvue.ParameterizedAction<dnvue.IAppContext>} config 应用程序配置方法。
     * @memberof Startup
     */
    static configure(config?: dnvue.ParameterizedAction<dnvue.IAppContext>): void;
}
