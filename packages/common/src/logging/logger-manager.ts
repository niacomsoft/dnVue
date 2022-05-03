// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { ILogger } from "./logger-interface";
import { LoggerType } from "./logger-type";
import { ConsoleLogger } from "./console-logger";
import { Logger } from "./logger";
import { sealed } from "../decorators";

/**
 * 提供了管理运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class LoggerManager
 * @extends {Logger}
 * @implements {ILogger}
 * @sealed
 */
@sealed
export class LoggerManager extends Logger implements ILogger {
    /**
     * 获取 ILogger 类型的对象实例集合，用于表示输出运行时日志的方法。
     *
     * @type {ILogger[]}
     * @memberof LoggerManager
     * @readonly
     */
    readonly loggers: ILogger[] = [];

    private static _loggerMgr: LoggerManager;

    /**
     * 获取 ILogger 类型的对象实例，用于表示记录运行时日志的方法。
     *
     * @readonly
     * @static
     * @type {ILogger}
     * @memberof LoggerManager
     */
    static get currentLogger(): ILogger {
        if (!LoggerManager._loggerMgr)
            LoggerManager._loggerMgr = new LoggerManager();
        return LoggerManager._loggerMgr;
    }

    /**
     * 用于初始化一个 LoggerManager 类型的对象实例。
     * 
     * @memberof LoggerManager
     */
    constructor() {
        super();
        this.loggers.push(new ConsoleLogger());
    }

    writeDebug(message?: string | undefined, contextData?: any): void {
        this.loggers.forEach(logger => {
            logger.writeDebug(message, contextData);
        });
    }
    writeTrace(message?: string | undefined, contextData?: any): void {
        this.loggers.forEach(logger => {
            logger.writeTrace(message, contextData);
        });
    }
    writeInformation(message?: string | undefined, contextData?: any): void {
        this.loggers.forEach(logger => {
            logger.writeInformation(message, contextData);
        });
    }
    writeWarning(message?: string | undefined, contextData?: any): void {
        this.loggers.forEach(logger => {
            logger.writeWarning(message, contextData);
        });
    }
    writeError(message?: string | undefined, contextData?: any): void {
        this.loggers.forEach(logger => {
            logger.writeError(message, contextData);
        });
    }
}