// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

declare namespace dnvue {
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
     * 定义了启用状态类型。
     *
     * @interface EnabledState
     */
    interface EnabledState {
        /**
         * 设置或获取一个值，用于表示是否启用。
         *
         * @type {boolean}
         * @memberof EnabledState
         */
        enabled: boolean;
    }

    /**
     * 定义了可见状态类型。
     *
     * @interface VisibleState
     */
    interface VisibleState {
        /**
         * 设置或获取一个值，用于表示是否可见。
         *
         * @type {boolean}
         * @memberof VisibleState
         */
        visible: boolean;
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

    namespace caching {
        /**
         * 定义了缓存项数据结构。
         *
         * @interface CacheItem
         */
        interface CacheItem {
            /**
             * 获取一个字符串，用于表示缓存标识名称。
             *
             * @type {string}
             * @memberof CacheItem
             */
            readonly key: string;

            /**
             * 获取 any 类型的对象实例或值，用于表示需要缓存的数据。
             *
             * @type {*}
             * @memberof CacheItem
             */
            data?: any;
        }
    }
}