// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { HttpMethod } from "./http-method";
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
export interface VoidResponse extends HttpResponseBase { }

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
export class HttpConfigurationBuilder implements IHttpConfigurationBuilder {
    /**
     * 设置或获取一个字符串，用于表示 HTTP 请求的基础 URL 地址。
     *
     * @protected
     * @type {string}
     * @memberof HttpConfigurationBuilder
     */
    protected _baseUrl: string = Object.safeGet<string>(window.DEFAULT_HTTP_BASE_URL, "./");

    /**
     * 设置或获取 Record<string, string> 类型的对象实例，用于表示 HTTP 请求头。
     *
     * @protected
     * @type {Record<string, string>}
     * @memberof HttpConfigurationBuilder
     */
    protected _headers: Record<string, string> = {
        "Content-Type": "application/json;charset=utf-8"
    };

    /**
     * 设置或获取 Record<string, string> 类型的对象实例，用于表示 HTTP 请求查询字符串。
     *
     * @protected
     * @type {Record<string, string>}
     * @memberof HttpConfigurationBuilder
     */
    protected _query: Record<string, string> = {};

    /**
     * 设置或获取一个值，用于表示 HTTP 请求超时（单位毫秒）。
     *
     * @protected
     * @type {number}
     * @memberof HttpConfigurationBuilder
     */
    protected _timeout: number = 1000 * 10;

    withBaseUrl(baseUrl?: string | undefined): IHttpConfigurationBuilder {
        this._baseUrl = Object.safeGet<string>(baseUrl, this._baseUrl);
        return this;
    }
    withHeaders(header?: Record<string, string> | undefined): IHttpConfigurationBuilder {
        this._headers = Object.assign({}, this._headers, header);
        return this;
    }
    withQuery(queryStr?: Record<string, string> | undefined): IHttpConfigurationBuilder {
        this._query = Object.assign({}, this._query, queryStr);
        return this;
    }
    withTimeout(value?: number | undefined): IHttpConfigurationBuilder {
        this._timeout = Object.safeGet<number>(value, 1000 * 10);
        return this;
    }
    build(): HttpConfiguration {
        return {
            headers: this._headers,
            baseUrl: this._baseUrl,
            query: this._query,
            timeout: this._timeout
        };
    }

}

/**
 * 定义了访问 HTTP 请求的接口。
 *
 * @export
 * @interface IHttpClient
 */
export interface IHttpClient {
    /**
     * 获取 HttpConfiguration 类型的对象实例，用于表示默认的 HTTP 请求配置。
     *
     * @type {HttpConfiguration}
     * @memberof IHttpClient
     */
    readonly defaultConfiguration: HttpConfiguration;

    /**
     * 设置或获取 dnvue.ParameterizedFunc<any, Error | undefined> 类型的对象实例，用于表示拦截 HTTP 响应并校验的方法。
     *
     * @type {(dnvue.ParameterizedFunc<any, Error | undefined>)}
     * @memberof IHttpClient
     */
    readonly responseInjector?: dnvue.ParameterizedFunc<any, Error | undefined>;

    /**
     * (异步的方法) 仅执行 HTTP 请求。
     *
     * @param {string} uri HTTP 请求 URI。
     * @param {HttpMethod} method HTTP 请求方法。
     * @param {HttpConfiguration} [spec] 针对此次请求的特殊配置。
     * @returns {Promise<HttpResponseBase>}
     * @memberof IHttpClient
     * @async
     */
    requestOnlyAsync(uri: string, method?: HttpMethod, spec?: HttpConfiguration): Promise<VoidResponse>;

    /**
     * (异步的方法) 执行 HTTP 请求，并等待数据返回。
     *
     * @template TResult 数据结果类型。
     * @param {string} uri HTTP 请求 URI。
     * @param {HttpMethod} [method] HTTP 请求方法。
     * @param {HttpConfiguration} [spec] 针对此次请求的特殊配置。
     * @returns {Promise<ResultResponse<TResult>>}
     * @memberof IHttpClient
     */
    requestWaitAsync<TResult>(uri: string, method?: HttpMethod, spec?: HttpConfiguration): Promise<ResultResponse<TResult>>;
}

/**
 * 提供了 HTTP 请求相关的基本方法。
 *
 * @export
 * @abstract
 * @class HttpClient
 * @implements {IHttpClient}
 */
export abstract class HttpClient implements IHttpClient {
    /**
     * 用于初始化一个 HttpClient 类型的对象实例。
     * 
     * @param {(IHttpConfigurationBuilder | HttpConfiguration)} configure
     * @memberof HttpClient
     */
    constructor(configure: IHttpConfigurationBuilder | HttpConfiguration) {
        const proxy: any = configure;
        if (proxy.build) {
            this.defaultConfiguration = (configure as IHttpConfigurationBuilder).build();
        }
        else {
            this.defaultConfiguration = configure as HttpConfiguration;
        }
    }

    readonly defaultConfiguration: HttpConfiguration;
    responseInjector?: dnvue.ParameterizedFunc<any, Error | undefined> | undefined;
    abstract requestOnlyAsync(uri: string, method?: HttpMethod, spec?: HttpConfiguration | undefined): Promise<VoidResponse>;
    abstract requestWaitAsync<TResult>(uri: string, method?: HttpMethod, spec?: HttpConfiguration | undefined): Promise<ResultResponse<TResult>>;
}