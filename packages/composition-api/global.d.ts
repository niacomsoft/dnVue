// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

export { };

import { ILoggerManager, ILogger } from "@dnvue/common";

declare global {
    declare interface Window {
        /**
         * 全局运行时日志管理程序。
         *
         * @type {ILoggerManager}
         * @memberof Window
         */
        DNVUE_LOGGER_MANAGER: ILoggerManager;

        /**
         * 全局记录运行时日志的方法。
         *
         * @type {ILogger}
         * @memberof Window
         */
        DNVUE_LOGGER: ILogger;
    }
}