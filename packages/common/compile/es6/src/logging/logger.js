// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { LoggerType } from "./logger-type";
/**
 * 提供了记录运行时日志相关的基本方法。
 *
 * @export
 * @abstract
 * @class Logger
 * @implements {ILogger}
 */
export class Logger {
    write(message, type, contextData) {
        if ((message !== null && message !== void 0 ? message : "").trim() !== "") {
            if (!type) {
                type = LoggerType.DEBUG;
            }
            if (this._compareType(type, LoggerType.DEBUG))
                this.writeDebug(message, contextData);
            if (this._compareType(type, LoggerType.TRACE))
                this.writeTrace(message, contextData);
            if (this._compareType(type, LoggerType.INFO))
                this.writeInformation(message, contextData);
            if (this._compareType(type, LoggerType.WARN))
                this.writeWarning(message, contextData);
            if (this._compareType(type, LoggerType.ERROR))
                this.writeError(message, contextData);
        }
    }
    /**
     * 对比运行时日志类型。
     *
     * @protected
     * @param {LoggerType} source 需要对比的源类型。
     * @param {LoggerType} target 需要对比的目标类型。
     * @returns {boolean}
     * @memberof Logger
     */
    _compareType(source, target) {
        return (source & target) === target;
    }
}
