// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/// <reference path="lib.enums.d.ts" />
/// <reference path="lib.typings.d.ts" />

declare namespace dnvue {
    /**
     * 定义了解释字符串的接口。
     *
     * @interface IStringResolver
     */
    interface IStringResolver {
        /**
         * 解释字符串。
         *
         * @param {string} s 原始字符串。
         * @returns {string}
         * @memberof IStringResolver
         */
        resolve(s: string): string;
    }

    /**
     * 定义了记录运行时日志的接口。
     *
     * @interface ILogWriter
     */
    interface ILogWriter {
        /**
         * 输出调试级运行时日志。
         *
         * @param {LogEntry} [debugEntry] 日志项。
         * @memberof ILogWriter
         */
        writeDebug(debugEntry?: LogEntry): void;

        /**
         * 输出追踪级运行时日志。
         *
         * @param {LogEntry} [traceEntry] 日志项。
         * @memberof ILogWriter
         */
        writeTrace(traceEntry?: LogEntry): void;

        /**
         * 输出信息级运行时日志。
         *
         * @param {LogEntry} [infoEntry] 日志项。
         * @memberof ILogWriter
         */
        writeInformation(infoEntry?: LogEntry): void;

        /**
         * 输出警告级运行时日志。
         *
         * @param {LogEntry} [warnEntry] 日志项。
         * @memberof ILogWriter
         */
        writeWarning(warnEntry?: LogEntry): void;

        /**
         * 输出错误级运行时日志。
         *
         * @param {LogEntry} [errorEntry] 日志项。
         * @memberof ILogWriter
         */
        writeError(errorEntry?: LogEntry): void;

        /**
         * 输出运行时日志。
         *
         * @param {LogEntry} [entry] 日志项。
         * @param {LogLevel} [level] 日志级别。
         * @memberof ILogWriter
         */
        writeLog(entry?: LogEntry, level?: LogLevel): void;
    }

    /**
     * 定义了创建实现了 ILogger 类型接口的对象实例的工厂接口。
     *
     * @interface ILogWriterFactory
     */
    interface ILogWriterFactory {
        /**
         * 创建实现了 ILogger 类型接口的对象实例。
         *
         * @returns {ILogWriter}
         * @memberof ILogWriterFactory
         */
        create(): ILogWriter;
    }

    /**
     * 定义了统一记录运行时日志的接口。
     *
     * @interface ILogger
     * @extends {ILogWriter}
     */
    interface ILogger extends ILogWriter {
        /**
         * 获取 ILogWriter 类型的对象实例集合，用于表示记录运行时日志的方法集合。
         *
         * @type {ILogWriter[]}
         * @memberof ILogger
         */
        readonly writers: ILogWriter[];

        /**
         * 获取 ILogWriterFactory 类型的对象实例集合，用于表示管理 ILogWriter 对象实例的方法集合。
         *
         * @type {ILogWriterFactory[]}
         * @memberof ILogger
         */
        readonly factories: ILogWriterFactory[];

        /**
         * 添加 ILogWriter。
         *
         * @param {...ILogWriter[]} writers 实现了 ILogWriter 类型接口的对象实例集合。
         * @memberof ILogger
         */
        addWriters(...writers: ILogWriter[]): void;

        /**
         * 添加 ILogWriterFactory。
         *
         * @param {...ILogWriterFactory[]} factories 实现了 ILogWriterFactory 类型接口的对象实例集合。
         * @memberof ILogger
         */
        addFactories(...factories: ILogWriterFactory[]): void;
    }
}