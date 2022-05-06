// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

declare namespace dnvue {
    /**
     * 定义了异常类型。
     *
     * @interface Exception
     * @extends {Error}
     */
    interface Exception extends Error {
        /**
         * 获取 Error 类型的对象实例，用于表示引发此异常的 Error 类型的对象实例。
         *
         * @type {Error}
         * @memberof Exception
         * @readonly
         */
        readonly innerException?: Error;

        /**
         * 获取 any 类型的对象实例或值，用于表示引发此异常的上下文数据。
         *
         * @type {*}
         * @memberof Exception
         * @readonly
         */
        readonly errorContextData?: any;
    }

    /**
     * 定义了唯一标识类型。
     *
     * @interface UniqueId
     * @template T 唯一标识类型。
     */
    interface UniqueId<T> {
        /**
         * 设置或获取 T 类型的对象实例或值，用于表示唯一标识。
         *
         * @type {T}
         * @memberof UniqueId
         */
        id: T;
    }

    /**
     * 定义了日志项类型。
     *
     * @interface LogEntry
     */
    interface LogEntry {
        /**
         * 设置或获取一个字符串，用于表示运行时日志信息。
         *
         * @type {string}
         * @memberof LogEntry
         */
        message: string;

        /**
         * 设置或获取 any 类型的对象实例或值，用于表示需要一起输出到日志的上下文数据。
         *
         * @type {*}
         * @memberof LogEntry
         */
        contextData?: any;

        /**
         * 设置或获取 Error 类型的对象实例，用于表示运行时异常。
         *
         * @type {Error}
         * @memberof LogEntry
         */
        error?: Error;
    }

    /**
     * 定义了有颜色的 Console 样式配置。
     *
     * @interface ColoredConsoleStyleOptions
     */
    interface ColoredConsoleStyleOptions {
        /**
         * 调试样式。
         *
         * @type {string}
         * @memberof ColoredConsoleStyleOptions
         */
        debug?: string;
        /**
         * 追踪样式。
         *
         * @type {string}
         * @memberof ColoredConsoleStyleOptions
         */
        trace?: string;
        /**
         * 信息样式。
         *
         * @type {string}
         * @memberof ColoredConsoleStyleOptions
         */
        information?: string;
        /**
         * 警告样式。
         *
         * @type {string}
         * @memberof ColoredConsoleStyleOptions
         */
        warning?: string;
        /**
         * 错误样式。
         *
         * @type {string}
         * @memberof ColoredConsoleStyleOptions
         */
        error?: string;
    }

    /**
     * 定义了文化区域信息类型。
     *
     * @interface CultureInfo
     */
    interface CultureInfo {
        /**
         * 获取一个字符串，用于表示文化区域名称。
         *
         * @type {string}
         * @memberof CultureInfo
         * @readonly
         */
        readonly name: string;
    }
}