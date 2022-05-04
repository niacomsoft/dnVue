"use strict";
// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var dnvue;
(function (dnvue) {
    /**
     * 定义了运行时日志级别枚举类型。
     *
     * @enum {number}
     */
    let LogLevel;
    (function (LogLevel) {
        /**
         * 调试级日志。
         */
        LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
        /**
         * 追踪级日志。
         */
        LogLevel[LogLevel["TRACE"] = 2] = "TRACE";
        /**
         * 信息级日志。
         */
        LogLevel[LogLevel["INFORMATION"] = 4] = "INFORMATION";
        /**
         * 警告级日志。
         */
        LogLevel[LogLevel["WARNING"] = 8] = "WARNING";
        /**
         * 错误级日志。
         */
        LogLevel[LogLevel["ERROR"] = 16] = "ERROR";
    })(LogLevel || (LogLevel = {}));
})(dnvue || (dnvue = {}));
