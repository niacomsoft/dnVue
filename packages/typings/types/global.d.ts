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

        /**
         * 默认的字符串解释程序。
         *
         * @type {dnvue.IStringResolver}
         * @memberof Window
         */
        DEFAULT_STRING_RESOLVER: dnvue.IStringResolver;

        /**
         * 默认的安全自然数哈希字符串最小长度。
         *
         * @type {number}
         * @memberof Window
         */
        DEFAULT_SAFE_NUMBER_MINLENGTH?: number;

        /**
         * 默认加密密钥。
         *
         * @type {string}
         * @memberof Window
         */
        DEFAULT_CRYPTO_SECURE_KEY?: string;

        /**
         * 默认使用加密存储。
         *
         * @type {boolean}
         * @memberof Window
         */
        DEFAULT_SECURE_STORAGE?: boolean;

        /**
         * 单例管理工具。
         *
         * @type {Record<string, any>}
         * @memberof Window
         */
        DNVUE_SINGLETON_INSTANCE_MANAGER: Record<string, any>;
    }

    interface StringConstructor {
        /**
         * 空白字符串。
         *
         * @returns {string}
         */
        empty(): string;

        /**
         * 用于校验字符串 s 是否等于 null、undefined 或者空白符。
         *
         * @param {(string | null | undefined)} [s] 需要校验的值。
         * @returns {boolean}
         * @memberof StringConstructor
         */
        isNullOrEmpty(s?: string | null | undefined): boolean;

        /**
         * 用于校验字符串 s 是否等于 null、undefined、空白符或者空格。
         *
         * @param {(string | null | undefined)} [s] 需要校验的值。
         * @returns {boolean}
         * @memberof StringConstructor
         */
        isNullOrWhitespace(s?: string | null | undefined): boolean;
    }

    interface ObjectConstructor {
        /**
         * 当 value 等于 undefined、null 时，将返回 safeValue；否则返回 value。
         *
         * @template T
         * @param {(T | null | undefined)} value 需要校验的值。
         * @param {T} safeValue 当 value 等于 undefined、null 时，将返回的安全值。
         * @returns {T}
         * @memberof ObjectConstructor
         */
        safeGet<T>(value: T | null | undefined, safeValue: T): T;
    }

    interface NumberConstructor {
        /**
         * 校验 value 是否与 comparableValue 相等。
         *
         * @param {number} value 数值。
         * @param {number} [comparableValue=0] 需要对比的值。
         * @returns {boolean}
         * @memberof NumberConstructor
         */
        equals(value: number, comparableValue?: number): boolean;

        /**
         * 校验 value 是否大于 comparableValue。
         *
         * @param {number} value 数值。
         * @param {number} [comparableValue=0] 需要对比的值。
         * @returns {boolean}
         * @memberof NumberConstructor
         */
        greatThan(value: number, comparableValue?: number): boolean;

        /**
         * 校验 value 是否大于等于 comparableValue。
         *
         * @param {number} value 数值。
         * @param {number} [comparableValue=0] 需要对比的值。
         * @returns {boolean}
         * @memberof NumberConstructor
         */
        greatOrEquals(value: number, comparableValue?: number): boolean;

        /**
         * 校验 value 是否小于 comparableValue。
         *
         * @param {number} value 数值。
         * @param {number} [comparableValue=0] 需要对比的值。
         * @returns {boolean}
         * @memberof NumberConstructor
         */
        lessThan(value: number, comparableValue?: number): boolean;

        /**
         * 校验 value 是否小于等于 comparableValue。
         *
         * @param {number} value 数值。
         * @param {number} [comparableValue=0] 需要对比的值。
         * @returns {boolean}
         * @memberof NumberConstructor
         */
        lessOrEquals(value: number, comparableValue?: number): boolean;
    }
}