/// <reference types="@dnvue/typings" />
/**
 * 提供了管理应用上下文相关的方法。
 *
 * @export
 * @class AppContext
 * @implements {dnvue.IAppContext}
 */
export declare class AppContext implements dnvue.IAppContext {
    private _environment;
    /**
     * 用于初始化一个 AppContext 类型的对象实例。
     *
     * @memberof AppContext
     */
    constructor();
    setHttpBaseUrl(baseUrl?: string | undefined): dnvue.IAppContext;
    setSecureStorage(secureStorage?: boolean | undefined): dnvue.IAppContext;
    setCryptoAlgorithmSecureKey(secureKey: string): dnvue.IAppContext;
    get environment(): dnvue.IHostingEnvironment;
    setEnvironment(env: dnvue.IHostingEnvironment): dnvue.IAppContext;
    setDefaultSafeNumberMinLength(minLength?: number | undefined): dnvue.IAppContext;
    setDefaultResolver(resolver?: dnvue.IStringResolver | undefined): dnvue.IAppContext;
    setDefaultLogger(logger?: dnvue.ILogger | undefined): dnvue.IAppContext;
    setDefaultLogWriter(writer?: dnvue.ILogWriter | undefined): dnvue.IAppContext;
    addLogWriters(...writers: dnvue.ILogWriter[]): dnvue.IAppContext;
    addLogWriterFactories(...factories: dnvue.ILogWriterFactory[]): dnvue.IAppContext;
}
