// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { Logger, ColoredConsoleLogWriter } from "@dnvue/common";

/**
 * 使用统一记录运行时日志的方法。
 *
 * @export
 * @returns {dnvue.ILogger}
 */
export function useLogger(): dnvue.ILogger {
    if (!window.DEFAULT_LOGGER)
        window.DEFAULT_LOGGER = new Logger();
    return window.DEFAULT_LOGGER;
}

/**
 * 使用默认的记录运行时日志的方法。
 *
 * @export
 * @returns {dnvue.ILogWriter}
 */
export function useDefaultLogWriter(): dnvue.ILogWriter {
    if (!window.DEFAULT_LOGWRITER)
        window.DEFAULT_LOGWRITER = new ColoredConsoleLogWriter();
    return window.DEFAULT_LOGWRITER;
}