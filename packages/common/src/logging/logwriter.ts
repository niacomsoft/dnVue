// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import "./loglevel";

/**
 * 提供了记录运行时日志相关的基本方法。
 *
 * @export
 * @abstract
 * @class LogWriter
 * @implements {dnvue.ILogWriter}
 */
export abstract class LogWriter implements dnvue.ILogWriter {
    abstract writeDebug(debugEntry?: dnvue.LogEntry | undefined): void;
    abstract writeTrace(traceEntry?: dnvue.LogEntry | undefined): void;
    abstract writeInformation(infoEntry?: dnvue.LogEntry | undefined): void;
    abstract writeWarning(warnEntry?: dnvue.LogEntry | undefined): void;
    abstract writeError(errorEntry?: dnvue.LogEntry | undefined): void;
    writeLog(entry?: dnvue.LogEntry | undefined, level?: dnvue.LogLevel | undefined): void {
        if (entry) {
            if (this._ensureLevel(level ?? dnvue.LogLevel.DEBUG)) {
                this.writeDebug(entry);
            }
            if (this._ensureLevel(level ?? dnvue.LogLevel.DEBUG, dnvue.LogLevel.TRACE)) {
                this.writeTrace(entry);
            }
            if (this._ensureLevel(level ?? dnvue.LogLevel.DEBUG, dnvue.LogLevel.INFORMATION)) {
                this.writeInformation(entry);
            }
            if (this._ensureLevel(level ?? dnvue.LogLevel.DEBUG, dnvue.LogLevel.WARNING)) {
                this.writeWarning(entry);
            }
            if (this._ensureLevel(level ?? dnvue.LogLevel.DEBUG, dnvue.LogLevel.ERROR)) {
                this.writeError(entry);
            }
        }
    }

    /**
     * 确定运行时日志级别。
     *
     * @protected
     * @param {dnvue.LogLevel} source 运行时日志源级别。
     * @param {dnvue.LogLevel} [target=dnvue.LogLevel.DEBUG] 需要对比的目标运行时日志级别。
     * @returns {boolean}
     * @memberof LogWriter
     */
    protected _ensureLevel(source: dnvue.LogLevel, target: dnvue.LogLevel = dnvue.LogLevel.DEBUG): boolean {
        return (source & target) === target;
    }
}