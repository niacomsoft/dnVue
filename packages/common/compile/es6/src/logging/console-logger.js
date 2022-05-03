// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Logger } from "./logger";
import { sealed } from "../decorators";
import dayjs from "dayjs";
/**
 * 提供了基于浏览器控制台记录运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ConsoleLogger
 * @extends {Logger}
 * @implements {ILogger}
 * @sealed
 */
let ConsoleLogger = class ConsoleLogger extends Logger {
    constructor() {
        super(...arguments);
        this._debugStyle = "color: #616161; font-style: italic; font-weight: bold";
        this._traceStyle = "color: #616161; font-weight: bold";
        this._infoStyle = "color: #0D47A1; font-weight: bold";
        this._warnStyle = "color: #FF6F00; font-weight: bold";
        this._errorStyle = "color: #B71C1C; font-weight: bold";
    }
    /**
     * 构建日志信息。
     *
     * @private
     * @param {string} message 日志信息。
     * @param {boolean} hasContextData 是否包含上下文数据。
     * @returns {string}
     * @memberof ConsoleLogger
     */
    __buildMessage(message, hasContextData) {
        message = `%c[${dayjs().format("HH:mm:ss")}] - ${message}`;
        if (hasContextData)
            message = `${message} See context data: %o`;
        return message;
    }
    writeDebug(message, contextData) {
        console.debug(this.__buildMessage(message !== null && message !== void 0 ? message : "", contextData !== null), this._debugStyle, contextData);
    }
    writeTrace(message, contextData) {
        console.trace(this.__buildMessage(message !== null && message !== void 0 ? message : "", contextData !== null), this._traceStyle, contextData);
    }
    writeInformation(message, contextData) {
        console.info(this.__buildMessage(message !== null && message !== void 0 ? message : "", contextData !== null), this._infoStyle, contextData);
    }
    writeWarning(message, contextData) {
        console.warn(this.__buildMessage(message !== null && message !== void 0 ? message : "", contextData !== null), this._warnStyle, contextData);
    }
    writeError(message, contextData) {
        console.error(this.__buildMessage(message !== null && message !== void 0 ? message : "", contextData !== null), this._errorStyle, contextData);
    }
};
ConsoleLogger = __decorate([
    sealed
], ConsoleLogger);
export { ConsoleLogger };
