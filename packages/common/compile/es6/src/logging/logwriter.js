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
export class LogWriter {
    writeLog(entry, level) {
        if (entry) {
            if (this._ensureLevel(level !== null && level !== void 0 ? level : dnvue.LogLevel.DEBUG)) {
                this.writeDebug(entry);
            }
            if (this._ensureLevel(level !== null && level !== void 0 ? level : dnvue.LogLevel.DEBUG, dnvue.LogLevel.TRACE)) {
                this.writeTrace(entry);
            }
            if (this._ensureLevel(level !== null && level !== void 0 ? level : dnvue.LogLevel.DEBUG, dnvue.LogLevel.INFORMATION)) {
                this.writeInformation(entry);
            }
            if (this._ensureLevel(level !== null && level !== void 0 ? level : dnvue.LogLevel.DEBUG, dnvue.LogLevel.WARNING)) {
                this.writeWarning(entry);
            }
            if (this._ensureLevel(level !== null && level !== void 0 ? level : dnvue.LogLevel.DEBUG, dnvue.LogLevel.ERROR)) {
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
    _ensureLevel(source, target = dnvue.LogLevel.DEBUG) {
        return (source & target) === target;
    }
}
