/// <reference types="@dnvue/typings" />
/**
 * 提供了统一的记录运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class Logger
 * @implements {dnvue.ILogger}
 * @implements {dnvue.ILogWriter}
 * @sealed
 */
export declare class Logger implements dnvue.ILogger, dnvue.ILogWriter {
    /**
     * 用于初始化一个 Logger 类型的对象实例。
     * @memberof Logger
     */
    constructor();
    writers: dnvue.ILogWriter[];
    factories: dnvue.ILogWriterFactory[];
    addWriters(...writers: dnvue.ILogWriter[]): void;
    addFactories(...factories: dnvue.ILogWriterFactory[]): void;
    writeDebug(debugEntry?: dnvue.LogEntry | undefined): void;
    writeTrace(traceEntry?: dnvue.LogEntry | undefined): void;
    writeInformation(infoEntry?: dnvue.LogEntry | undefined): void;
    writeWarning(warnEntry?: dnvue.LogEntry | undefined): void;
    writeError(errorEntry?: dnvue.LogEntry | undefined): void;
    writeLog(entry?: dnvue.LogEntry | undefined, level?: dnvue.LogLevel | undefined): void;
}
