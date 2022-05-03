// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { ILogger } from "./logger-interface";

/**
 * 定义了管理记录运行时日志的接口。
 *
 * @export
 * @interface ILoggerManager
 * @extends {ILogger}
 */
export interface ILoggerManager extends ILogger {
    /**
     * 获取 ILogger 类型的对象实例集合，用于表示记录运行时日志的方法。
     *
     * @type {ILogger[]}
     * @memberof ILoggerManager
     * @readonly
     */
    readonly loggers: ILogger[];
}