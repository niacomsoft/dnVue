// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
/// <reference path="../global.d.ts" />
import { LoggerManager } from "@dnvue/common";
/**
 * 使用管理运行时日志的方法。
 *
 * @export
 * @returns {ILoggerManager}
 */
export function useLoggerManager() {
    if (!window.DNVUE_LOGGER_MANAGER)
        window.DNVUE_LOGGER_MANAGER = new LoggerManager();
    return window.DNVUE_LOGGER_MANAGER;
}
/**
 * 使用记录运行时日志的方法。
 *
 * @export
 * @returns {ILogger}
 */
export function useLogger() {
    if (!window.DNVUE_LOGGER)
        window.DNVUE_LOGGER = new LoggerManager();
    return window.DNVUE_LOGGER;
}
