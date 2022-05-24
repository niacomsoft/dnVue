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

    /**
     * 定义了访问主机环境信息的接口。
     *
     * @interface IHostingEnvironment
     */
    interface IHostingEnvironment {
        /**
         * 获取一个字符串，用于表示。
         *
         * @type {string}
         * @memberof IHostingEnvironment
         */
        readonly environmentName: string;

        /**
         * 用于校验当前的环境是否等于指定的环境名称。
         *
         * @param {string} envName 环境名称。
         * @returns {boolean}
         * @memberof IHostingEnvironment
         */
        is(envName: string): boolean;

        /**
         * 获取一个值，用于表示是否为开发环境。
         *
         * @type {boolean}
         * @memberof IHostingEnvironment
         */
        get isDevelopment(): boolean;

        /**
         * 获取一个值，用于表示是否为生产环境。
         *
         * @type {boolean}
         * @memberof IHostingEnvironment
         */
        get isProduction(): boolean;
    }

    /**
     * 定义了应用上下文的接口。
     *
     * @interface IAppContext
     */
    interface IAppContext {
        /**
         * 设置默认的统一记录运行时日志的方法。
         *
         * @param {ILogger} [logger] 实现了 ILogger 类型接口的对象实例。
         * @returns {IAppContext}
         * @memberof IAppContext
         */
        setDefaultLogger(logger?: ILogger): IAppContext;

        /**
         * 设置默认的记录运行时日志的方法。
         *
         * @param {ILogWriter} [writer] 实现了 ILogWriter 类型接口的对象实例。
         * @returns {IAppContext}
         * @memberof IAppContext
         */
        setDefaultLogWriter(writer?: ILogWriter): IAppContext;

        /**
         * 注册记录运行时日志的方法。
         *
         * @param {...ILogWriter[]} writers 记录运行时日志的方法集合。
         * @returns {IAppContext}
         * @memberof IAppContext
         */
        addLogWriters(...writers: ILogWriter[]): IAppContext;

        /**
         * 注册构建 ILogWriter 对象实例的工厂集合。
         *
         * @param {...ILogWriterFactory[]} factories 实现了 ILogWriterFactory 类型接口的对象实例集合。
         * @returns {IAppContext}
         * @memberof IAppContext
         */
        addLogWriterFactories(...factories: ILogWriterFactory[]): IAppContext;

        /**
         * 设置默认的字符串解释程序。
         *
         * @param {IStringResolver} [resolver] 字符串解释程序。
         * @returns {IAppContext}
         * @memberof IAppContext
         */
        setDefaultResolver(resolver?: IStringResolver): IAppContext;

        /**
         * 设置默认的安全自然数哈希字符串最小长度。
         *
         * @param {number} [minLength] 最小长度。
         * @returns {IAppContext}
         * @memberof IAppContext
         */
        setDefaultSafeNumberMinLength(minLength?: number): IAppContext;

        /**
         * 设置主机环境信息。
         *
         * @param {IHostingEnvironment} env 主机环境信息。
         * @returns {IAppContext}
         * @memberof IAppContext
         */
        setEnvironment(env: IHostingEnvironment): IAppContext;

        /**
         * 获取 IHostingEnvironment 类型的对象实例，用于表示当前的主机环境信息。
         *
         * @type {IHostingEnvironment}
         * @memberof IAppContext
         */
        get environment(): IHostingEnvironment;

        /**
         * 设置加密算法密钥。
         * 
         * @param {string} secureKey 加密密钥。
         * @returns {IAppContext}
         * @memberof IAppContext
         */
        setCryptoAlgorithmSecureKey(secureKey: string): IAppContext;

        /**
         * 设置启用加密存储。
         * 
         * @param {boolean} [secureStorage] 是否启用加密存储。
         * @returns {IAppContext}
         * @memberof IAppContent
         */
        setSecureStorage(secureStorage?: boolean): IAppContext;
    }

    namespace security {
        /**
         * 定义了哈希算法相关的接口。
         *
         * @interface IHashAlgorithm
         */
        interface IHashAlgorithm {
            /**
             * 计算字符串 s 等效的哈希值。
             *
             * @param {string} s 原始字符串。
             * @returns {string}
             * @memberof IHashAlgorithm
             */
            computeHash(s: string): string;
        }

        /**
         * 定义了加密、解密的接口。
         *
         * @interface ICryptoAlgorithm
         */
        interface ICryptoAlgorithm {
            /**
             * 加密字符串。
             *
             * @param {string} plainText 需要加密的明文。
             * @param {string} [secureKey] 密钥。
             * @returns {string}
             * @memberof ICryptoAlgorithm
             */
            encrypt(plainText: string, secureKey?: string): string;

            /**
             * 解密字符串。
             *
             * @param {string} secureText 需要解密的秘文。
             * @param {string} [secureKey] 密钥。
             * @returns {string}
             * @memberof ICryptoAlgorithm
             */
            decrypt(secureText: string, secureKey?: string): string;
        }
    }

    namespace caching {
        /**
         * 定义了缓存相关的接口。
         *
         * @interface ICache
         */
        interface ICache {
            /**
             * 添加或更新需要缓存的数据。
             *
             * @param {string} key 缓存标识。
             * @param {*} [data] 需要缓存的数据。
             * @param {boolean} [secureStorage] 是否需要加密存储。
             * @memberof ICache
             */
            update(key: string, data?: any, secureStorage?: boolean): void;

            /**
             * 获取指定标识名称的缓存项。
             *
             * @template T
             * @param {string} key 缓存标识。
             * @returns {*}  {(T | undefined | null)} 缓存数据。
             * @memberof ICache
             */
            get<T>(key: string): T | undefined | null;

            /**
             * 删除指定标识名称的缓存数据。
             *
             * @param {string} key 缓存标识。
             * @memberof ICache
             */
            remove(key: string): void;

            /**
             * 清空所有的缓存数据。
             *
             * @memberof ICache
             */
            clear(): void;
        }
    }
}