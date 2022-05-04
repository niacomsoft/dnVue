// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

declare namespace dnvue {
    /**
     * 定义了运行时日志级别枚举类型。
     *
     * @enum {number}
     */
    enum LogLevel {
        /**
         * 调试级日志。
         */
        DEBUG = 1,
        /**
         * 追踪级日志。
         */
        TRACE = 2,
        /**
         * 信息级日志。
         */
        INFORMATION = 4,
        /**
         * 警告级日志。
         */
        WARNING = 8,
        /**
         * 错误级日志。
         */
        ERROR = 16
    }
}