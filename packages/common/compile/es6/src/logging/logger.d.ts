import { ILogger } from "./logger-interface";
import { LoggerType } from "./logger-type";
/**
 * 提供了记录运行时日志相关的基本方法。
 *
 * @export
 * @abstract
 * @class Logger
 * @implements {ILogger}
 */
export declare abstract class Logger implements ILogger {
    abstract writeDebug(message?: string | undefined, contextData?: any): void;
    abstract writeTrace(message?: string | undefined, contextData?: any): void;
    abstract writeInformation(message?: string | undefined, contextData?: any): void;
    abstract writeWarning(message?: string | undefined, contextData?: any): void;
    abstract writeError(message?: string | undefined, contextData?: any): void;
    write(message?: string | undefined, type?: LoggerType | undefined, contextData?: any): void;
    /**
     * 对比运行时日志类型。
     *
     * @protected
     * @param {LoggerType} source 需要对比的源类型。
     * @param {LoggerType} target 需要对比的目标类型。
     * @returns {boolean}
     * @memberof Logger
     */
    protected _compareType(source: LoggerType, target: LoggerType): boolean;
}
