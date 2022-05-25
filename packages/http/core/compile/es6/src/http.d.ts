import { HttpStatusCode } from "./http-statuscode";
/**
 * 定义了 HTTP 响应基本信息。
 *
 * @export
 * @interface HttpResponseBase
 */
export interface HttpResponseBase {
    /**
     * 获取一个值，用于表示 HTTP 响应状态码。
     *
     * @type {HttpStatusCode}
     * @memberof HttpResponseBase
     */
    readonly statusCode?: HttpStatusCode;
    /**
     * 获取 Record<string, any> 类型的对象实例，用于表示元数据。
     *
     * @type {Record<string, any>}
     * @memberof HttpResponseBase
     */
    readonly metadata?: Record<string, any>;
}
/**
 * 定义了无数据的 HTTP 响应数据结构。
 *
 * @export
 * @interface VoidResponse
 * @extends {HttpResponseBase}
 */
export interface VoidResponse extends HttpResponseBase {
}
/**
 * 定义了包含 T 类型数据的 HTTP 响应数据结构。
 *
 * @export
 * @interface ResultResponse
 * @extends {HttpResponseBase}
 * @template TResult 数据结果类型。
 */
export interface ResultResponse<TResult> extends HttpResponseBase {
    /**
     * 获取 TResult 类型的对象实例或值，用于表示数据结果。
     *
     * @type {TResult}
     * @memberof ResultResponse
     */
    readonly result?: TResult;
}
/**
 * 定义了失败的 HTTP 响应数据结构。
 *
 * @export
 * @interface FailedResponse
 * @extends {HttpResponseBase}
 */
export interface FailedResponse extends HttpResponseBase {
    /**
     * 获取 Error 类型的对象实例，用于表示异常信息。
     *
     * @type {Error}
     * @memberof FailedResponse
     */
    readonly error: Error;
}
/**
 * 定义了 HTTP 请求配置数据结构。
 *
 * @export
 * @interface HttpConfiguration
 */
export interface HttpConfiguration {
    /**
     * 设置或获取一个字符串，用于表示 HTTP 请求基础 URL 地址。
     *
     * @type {string}
     * @memberof HttpConfiguration
     */
    baseUrl?: string;
    /**
     * 设置或获取 Record<string, string> 类型的对象实例，用于表示 HTTP 请求头。
     *
     * @type {Record<string, string>}
     * @memberof HttpConfiguration
     */
    headers?: Record<string, string>;
    /**
     * 设置或获取 Record<string, string> 类型的对象实例，用于表示查询字符串。
     *
     * @type {Record<string, string>}
     * @memberof HttpConfiguration
     */
    query?: Record<string, string>;
    /**
     * 设置或获取一个值，用于表示 HTTP 请求超时时间（单位毫秒）。
     *
     * @type {number}
     * @memberof HttpConfiguration
     */
    timeout?: number;
}
/**
 * 定义了构建 HTTP 请求配置的接口。
 *
 * @export
 * @interface IHttpConfigurationBuilder
 */
export interface IHttpConfigurationBuilder {
    /**
     * 设置 HTTP 请求基础 URL 地址。
     *
     * @param {string} [baseUrl] HTTP 请求基础 URL 地址。
     * @returns {IHttpConfigurationBuilder}
     * @memberof IHttpConfigurationBuilder
     */
    withBaseUrl(baseUrl?: string): IHttpConfigurationBuilder;
    /**
     * 设置 HTTP 请求头。
     *
     * @param {Record<string, string>} [header] HTTP 请求头。
     * @returns {IHttpConfigurationBuilder}
     * @memberof IHttpConfigurationBuilder
     */
    withHeaders(header?: Record<string, string>): IHttpConfigurationBuilder;
    /**
     * 设置 HTTP 请求查询字符串。
     *
     * @param {Record<string, string>} [queryStr] HTTP 请求查询字符串。
     * @returns {IHttpConfigurationBuilder}
     * @memberof IHttpConfigurationBuilder
     */
    withQuery(queryStr?: Record<string, string>): IHttpConfigurationBuilder;
    /**
     * 设置 HTTP 请求超时（单位毫秒）。
     *
     * @param {number} [value]
     * @returns {*}  {IHttpConfigurationBuilder}
     * @memberof IHttpConfigurationBuilder
     */
    withTimeout(value?: number): IHttpConfigurationBuilder;
    /**
     * 构建 HTTP 请求配置。
     *
     * @returns {HttpConfiguration}
     * @memberof IHttpConfigurationBuilder
     */
    build(): HttpConfiguration;
}
/**
 * 提供了构建 HTTP 请求配置相关的方法。
 *
 * @export
 * @class HttpConfigurationBuilder
 * @implements {IHttpConfigurationBuilder}
 */
export declare class HttpConfigurationBuilder implements IHttpConfigurationBuilder {
    /**
     * 设置或获取一个字符串，用于表示 HTTP 请求的基础 URL 地址。
     *
     * @protected
     * @type {string}
     * @memberof HttpConfigurationBuilder
     */
    protected _baseUrl: string;
    /**
     * 设置或获取 Record<string, string> 类型的对象实例，用于表示 HTTP 请求头。
     *
     * @protected
     * @type {Record<string, string>}
     * @memberof HttpConfigurationBuilder
     */
    protected _headers: Record<string, string>;
    /**
     * 设置或获取 Record<string, string> 类型的对象实例，用于表示 HTTP 请求查询字符串。
     *
     * @protected
     * @type {Record<string, string>}
     * @memberof HttpConfigurationBuilder
     */
    protected _query: Record<string, string>;
    /**
     * 设置或获取一个值，用于表示 HTTP 请求超时（单位毫秒）。
     *
     * @protected
     * @type {number}
     * @memberof HttpConfigurationBuilder
     */
    protected _timeout: number;
    withBaseUrl(baseUrl?: string | undefined): IHttpConfigurationBuilder;
    withHeaders(header?: Record<string, string> | undefined): IHttpConfigurationBuilder;
    withQuery(queryStr?: Record<string, string> | undefined): IHttpConfigurationBuilder;
    withTimeout(value?: number | undefined): IHttpConfigurationBuilder;
    build(): HttpConfiguration;
}
