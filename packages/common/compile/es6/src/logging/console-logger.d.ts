import { ILogger } from "./logger-interface";
import { Logger } from "./logger";
/**
 * 提供了基于浏览器控制台记录运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ConsoleLogger
 * @extends {Logger}
 * @implements {ILogger}
 * @sealed
 */
export declare class ConsoleLogger extends Logger implements ILogger {
    private readonly _debugStyle;
    private readonly _traceStyle;
    private readonly _infoStyle;
    private readonly _warnStyle;
    private readonly _errorStyle;
    /**
     * 构建日志信息。
     *
     * @private
     * @param {string} message 日志信息。
     * @param {boolean} hasContextData 是否包含上下文数据。
     * @returns {string}
     * @memberof ConsoleLogger
     */
    private __buildMessage;
    writeDebug(message?: string | undefined, contextData?: any): void;
    writeTrace(message?: string | undefined, contextData?: any): void;
    writeInformation(message?: string | undefined, contextData?: any): void;
    writeWarning(message?: string | undefined, contextData?: any): void;
    writeError(message?: string | undefined, contextData?: any): void;
}
