// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/// <reference path="lib.interfaces.d.ts" />

export { };

declare global {
    /**
     * 为 Window 类型提供的扩展方法。
     *
     * @interface Window
     */
    interface Window {
        /**
         * 默认的记录运行时日志的方法。
         *
         * @type {dnvue.ILogWriter}
         * @memberof Window
         */
        DEFAULT_LOGWRITER: dnvue.ILogWriter;

        /**
         * 管理 DEFAULT_LOGWRITER 的默认工厂方法。
         *
         * @type {dnvue.ILogWriterFactory}
         * @memberof Window
         */
        DEFAULT_LOGWRITER_FACTORY: dnvue.ILogWriterFactory;

        /**
         * 统一记录运行时日志的门面方法。
         *
         * @type {dnvue.ILogger}
         * @memberof Window
         */
        DEFAULT_LOGGER: dnvue.ILogger;

        __SINGLETON_MANAGER__: {
            CONSOLE_LOGWRITER?: dnvue.ILogWriter;
            COLORED_CONSOLE_LOGWRITER?: dnvue.ILogWriter;
        };
    }
}