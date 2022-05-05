/// <reference types="@dnvue/typings" />
/**
 * 提供了管理应用上下文相关的方法。
 *
 * @export
 * @class AppContext
 * @implements {dnvue.IAppContext}
 */
export declare class AppContext implements dnvue.IAppContext {
    setDefaultLogger(logger?: dnvue.ILogger | undefined): dnvue.IAppContext;
    setDefaultLogWriter(writer?: dnvue.ILogWriter | undefined): dnvue.IAppContext;
    addLogWriters(...writers: dnvue.ILogWriter[]): dnvue.IAppContext;
    addLogWriterFactories(...factories: dnvue.ILogWriterFactory[]): dnvue.IAppContext;
}
