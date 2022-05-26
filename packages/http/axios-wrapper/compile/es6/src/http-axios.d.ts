import { IHttpConfigurationBuilder, HttpConfigurationBuilder, HttpMethod, HttpClient, IHttpClient, HttpConfiguration, ResultResponse, VoidResponse } from "@dnvue/http-core";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios";
/**
 * 提供了构建 Axios 配置相关的方法。
 *
 * @export
 * @class AxiosConfigurationBuilder
 * @extends {HttpConfigurationBuilder}
 * @implements {IHttpConfigurationBuilder}
 */
export declare class AxiosConfigurationBuilder extends HttpConfigurationBuilder implements IHttpConfigurationBuilder {
    /**
     * 构建 Axios 请求配置。
     *
     * @returns {AxiosRequestConfig}
     * @memberof AxiosConfigurationBuilder
     */
    buildAxiosConfiguration(): AxiosRequestConfig;
}
/**
 * 提供了基于 Axios 的 HTTP 请求相关的方法。
 *
 * @export
 * @class AxiosClient
 * @extends {HttpClient}
 * @implements {IHttpClient}
 */
export declare class AxiosClient extends HttpClient implements IHttpClient {
    /**
     * 获取 AxiosInstance 类型的对象实例，用于表示 Axios 服务实例。
     *
     * @protected
     * @type {AxiosInstance}
     * @memberof AxiosClient
     */
    protected readonly _axiosProvider: AxiosInstance;
    /**
     * 获取 AxiosRequestConfig 类型的对象实例，用于表示 Axios 服务默认配置。
     *
     * @protected
     * @type {AxiosRequestConfig}
     * @memberof AxiosClient
     */
    protected readonly _defaultAxiosConfiguration: AxiosRequestConfig;
    /**
     * 获取 Axios 请求方法。
     *
     * @protected
     * @param {HttpMethod} [method] dnVue 定义的 HTTP 请求方法。
     * @returns {Method}
     * @memberof AxiosClient
     */
    protected _getAxiosMethod(method?: HttpMethod): Method;
    /**
     * 创建默认的查询字符串。
     *
     * @protected
     * @returns {Record<string,string>}
     * @memberof AxiosClient
     */
    protected _createDefaultQuery(): Record<string, string>;
    /**
     * (异步的方法) 基于 Axios 的 HTTP 请求。
     *
     * @protected
     * @param {string} uri 请求的 URI。
     * @param {Method} method
     * @param {HttpConfiguration} [spec]
     * @returns {*}  {Promise<AxiosResponse>}
     * @memberof AxiosClient
     * @async
     */
    protected _internalRequestAsync(uri: string, method: Method, spec?: HttpConfiguration): Promise<AxiosResponse>;
    requestOnlyAsync(uri: string, method?: HttpMethod, spec?: HttpConfiguration | undefined): Promise<VoidResponse>;
    requestWaitAsync<TResult>(uri: string, method?: HttpMethod, spec?: HttpConfiguration | undefined): Promise<ResultResponse<TResult>>;
    /**
     * 用于初始化一个 Axios 类型的对象实例。
     *
     * @param {AxiosConfigurationBuilder} [configure] AxiosConfigurationBuilder 类型的对象实例。
     * @memberof AxiosClient
     */
    constructor(configure?: AxiosConfigurationBuilder);
}
