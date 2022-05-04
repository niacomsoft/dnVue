/// <reference types="@dnvue/typings" />
import "./loglevel";
/**
 * 提供了记录运行时日志相关的基本方法。
 *
 * @export
 * @abstract
 * @class LogWriter
 * @implements {dnvue.ILogWriter}
 */
export declare abstract class LogWriter implements dnvue.ILogWriter {
    abstract writeDebug(debugEntry?: dnvue.LogEntry | undefined): void;
    abstract writeTrace(traceEntry?: dnvue.LogEntry | undefined): void;
    abstract writeInformation(infoEntry?: dnvue.LogEntry | undefined): void;
    abstract writeWarning(warnEntry?: dnvue.LogEntry | undefined): void;
    abstract writeError(errorEntry?: dnvue.LogEntry | undefined): void;
    writeLog(entry?: dnvue.LogEntry | undefined, level?: dnvue.LogLevel | undefined): void;
    /**
     * 确定运行时日志级别。
     *
     * @protected
     * @param {dnvue.LogLevel} source 运行时日志源级别。
     * @param {dnvue.LogLevel} [target=dnvue.LogLevel.DEBUG] 需要对比的目标运行时日志级别。
     * @returns {boolean}
     * @memberof LogWriter
     */
    protected _ensureLevel(source: dnvue.LogLevel, target?: dnvue.LogLevel): boolean;
}
