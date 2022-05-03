import { ILogger } from "./logger-interface";
import { Logger } from "./logger";
/**
 * 提供了管理运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class LoggerManager
 * @extends {Logger}
 * @implements {ILogger}
 * @sealed
 */
export declare class LoggerManager extends Logger implements ILogger {
    /**
     * 获取 ILogger 类型的对象实例集合，用于表示输出运行时日志的方法。
     *
     * @type {ILogger[]}
     * @memberof LoggerManager
     * @readonly
     */
    readonly loggers: ILogger[];
    private static _loggerMgr;
    /**
     * 获取 ILogger 类型的对象实例，用于表示记录运行时日志的方法。
     *
     * @readonly
     * @static
     * @type {ILogger}
     * @memberof LoggerManager
     */
    static get currentLogger(): ILogger;
    /**
     * 用于初始化一个 LoggerManager 类型的对象实例。
     *
     * @memberof LoggerManager
     */
    constructor();
    writeDebug(message?: string | undefined, contextData?: any): void;
    writeTrace(message?: string | undefined, contextData?: any): void;
    writeInformation(message?: string | undefined, contextData?: any): void;
    writeWarning(message?: string | undefined, contextData?: any): void;
    writeError(message?: string | undefined, contextData?: any): void;
}
