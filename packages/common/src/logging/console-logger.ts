// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { ILogger } from "./logger-interface";
import { LoggerType } from "./logger-type";
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
@sealed
export class ConsoleLogger extends Logger implements ILogger {
    private readonly _debugStyle: string = "color: #616161; font-style: italic; font-weight: bold";
    private readonly _traceStyle: string = "color: #616161; font-weight: bold";
    private readonly _infoStyle: string = "color: #0D47A1; font-weight: bold";
    private readonly _warnStyle: string = "color: #FF6F00; font-weight: bold";
    private readonly _errorStyle: string = "color: #B71C1C; font-weight: bold";

    /**
     * 构建日志信息。
     *
     * @private
     * @param {string} message 日志信息。
     * @param {boolean} hasContextData 是否包含上下文数据。
     * @returns {string}
     * @memberof ConsoleLogger
     */
    private __buildMessage(message: string, hasContextData: boolean): string {
        message = `%c[${dayjs().format("HH:mm:ss")}] - ${message}`;

        if (hasContextData)
            message = `${message} See context data: %o`;

        return message;
    }

    writeDebug(message?: string | undefined, contextData?: any): void {
        console.debug(this.__buildMessage(message ?? "", contextData !== null), this._debugStyle, contextData);
    }
    writeTrace(message?: string | undefined, contextData?: any): void {
        console.trace(this.__buildMessage(message ?? "", contextData !== null), this._traceStyle, contextData);
    }
    writeInformation(message?: string | undefined, contextData?: any): void {
        console.info(this.__buildMessage(message ?? "", contextData !== null), this._infoStyle, contextData);
    }
    writeWarning(message?: string | undefined, contextData?: any): void {
        console.warn(this.__buildMessage(message ?? "", contextData !== null), this._warnStyle, contextData);
    }
    writeError(message?: string | undefined, contextData?: any): void {
        console.error(this.__buildMessage(message ?? "", contextData !== null), this._errorStyle, contextData);
    }

}