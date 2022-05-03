import { LoggerType } from "./logger-type";
/**
 * 定义了记录运行时日志的接口。
 *
 * @export
 * @interface ILogger
 */
export interface ILogger {
    /**
     * 输出调试日志。
     *
     * @param {string} [message] 日志信息。
     * @param {*} [contextData] 跟随日志一起输出的上下文数据。
     * @memberof ILogger
     */
    writeDebug(message?: string, contextData?: any): void;
    /**
     * 输出追踪日志。
     *
     * @param {string} [message] 日志信息。
     * @param {*} [contextData] 跟随日志一起输出的上下文数据。
     * @memberof ILogger
     */
    writeTrace(message?: string, contextData?: any): void;
    /**
     * 输出信息日志。
     *
     * @param {string} [message] 日志信息。
     * @param {*} [contextData] 跟随日志一起输出的上下文数据。
     * @memberof ILogger
     */
    writeInformation(message?: string, contextData?: any): void;
    /**
     * 输出警告日志。
     *
     * @param {string} [message] 日志信息。
     * @param {*} [contextData] 跟随日志一起输出的上下文数据。
     * @memberof ILogger
     */
    writeWarning(message?: string, contextData?: any): void;
    /**
     * 输出错误日志。
     *
     * @param {string} [message] 日志信息。
     * @param {*} [contextData] 跟随日志一起输出的上下文数据。
     * @memberof ILogger
     */
    writeError(message?: string, contextData?: any): void;
    /**
     * 输出日志。
     *
     * @param {string} [message] 日志信息。
     * @param {(LoggerType | number)} [type] 日志类型。
     * @param {*} [contextData] 跟随日志一起输出的上下文数据。
     * @memberof ILogger
     */
    write(message?: string, type?: LoggerType | number, contextData?: any): void;
}
