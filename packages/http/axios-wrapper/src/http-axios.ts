// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { IHttpConfigurationBuilder, HttpConfigurationBuilder, HttpMethod, HttpClient, IHttpClient, HttpConfiguration, ResultResponse, VoidResponse, FailedResponse, HttpStatusCode } from "@dnvue/http-core";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios";

/**
 * 提供了构建 Axios 配置相关的方法。
 *
 * @export
 * @class AxiosConfigurationBuilder
 * @extends {HttpConfigurationBuilder}
 * @implements {IHttpConfigurationBuilder}
 */
export class AxiosConfigurationBuilder extends HttpConfigurationBuilder implements IHttpConfigurationBuilder {
    /**
     * 构建 Axios 请求配置。
     *
     * @returns {AxiosRequestConfig}
     * @memberof AxiosConfigurationBuilder
     */
    buildAxiosConfiguration(): AxiosRequestConfig {
        const config = this.build();

        return {
            baseURL: config.baseUrl,
            headers: config.headers,
            params: config.query,
            timeout: config.timeout
        };
    }
}

/**
 * 提供了基于 Axios 的 HTTP 请求相关的方法。
 *
 * @export
 * @class AxiosClient
 * @extends {HttpClient}
 * @implements {IHttpClient}
 */
export class AxiosClient extends HttpClient implements IHttpClient {
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
    protected _getAxiosMethod(method?: HttpMethod): Method {
        let _target: Method = "GET";
        method = Object.safeGet<HttpMethod>(method, "HTTP-GET");

        switch (method) {
            case "HTTP-DELETE": _target = "DELETE"; break;
            case "HTTP-OPTIONS": _target = "OPTIONS"; break;
            case "HTTP-PATCH": _target = "PATCH"; break;
            case "HTTP-POST": _target = "POST"; break;
            case "HTTP-PUT": _target = "PUT"; break;
            default: break;
        }

        return _target;
    }

    /**
     * 创建默认的查询字符串。
     *
     * @protected
     * @returns {Record<string,string>}
     * @memberof AxiosClient
     */
    protected _createDefaultQuery(): Record<string, string> {
        return {
            "dnvue_timestamp": new Date().getTime().toString()
        };
    }

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
    protected async _internalRequestAsync(uri: string, method: Method, spec?: HttpConfiguration): Promise<AxiosResponse> {
        let contextOptions: AxiosRequestConfig = Object.assign({}, this._defaultAxiosConfiguration, { method, url: uri });
        if (spec?.headers) {
            contextOptions.headers = Object.assign({}, contextOptions.headers, spec.headers);
        }
        if (spec?.query) {
            contextOptions.params = Object.assign({}, contextOptions.params, spec.query);
        }
        contextOptions.timeout = spec?.timeout ?? 10000;
        if (String.isNullOrWhitespace(spec?.baseUrl))
            contextOptions.baseURL = spec?.baseUrl;
        try {
            const response = await this._axiosProvider.request(contextOptions);
            if (this.responseInjector) {
                const injectorError = this.responseInjector(response);
                if (injectorError) throw { rawResponse: response, rawError: injectorError };
            }
            return response;
        } catch (error: any) {
            throw { rawResponse: error?.response, rawError: error };
        }
    }

    async requestOnlyAsync(uri: string, method?: HttpMethod, spec?: HttpConfiguration | undefined): Promise<VoidResponse> {
        try {
            const response = await this._internalRequestAsync(uri, this._getAxiosMethod(method), spec);
            const voidResponse: VoidResponse = {
                metadata: { rawResponse: response },
                statusCode: HttpStatusCode.OK
            };
            return voidResponse;
        } catch (error: any) {
            const failedResponse: FailedResponse = {
                statusCode: error.rawResponse ? (error.rawResponse as AxiosResponse).status as HttpStatusCode : undefined,
                metadata: { error },
                error: new Error("axios throw an error")
            };
            throw failedResponse;
        }
    }
    async requestWaitAsync<TResult>(uri: string, method?: HttpMethod, spec?: HttpConfiguration | undefined): Promise<ResultResponse<TResult>> {
        try {
            const response = await this._internalRequestAsync(uri, this._getAxiosMethod(method), spec);
            const resultResponse: ResultResponse<TResult> = {
                result: response.data as TResult,
                metadata: { rawResponse: response },
                statusCode: HttpStatusCode.OK
            };
            return resultResponse;
        } catch (error: any) {
            const failedResponse: FailedResponse = {
                statusCode: error.rawResponse ? (error.rawResponse as AxiosResponse).status as HttpStatusCode : undefined,
                metadata: { error },
                error: new Error("axios throw an error")
            };
            throw failedResponse;
        }
    }
    /**
     * 用于初始化一个 Axios 类型的对象实例。
     * 
     * @param {AxiosConfigurationBuilder} [configure] AxiosConfigurationBuilder 类型的对象实例。
     * @memberof AxiosClient
     */
    constructor(configure?: AxiosConfigurationBuilder) {
        super(Object.safeGet<AxiosConfigurationBuilder>(configure, new AxiosConfigurationBuilder()));
        this._defaultAxiosConfiguration = (super.defaultConfiguration as AxiosConfigurationBuilder).buildAxiosConfiguration();
        this._axiosProvider = axios.create(this._defaultAxiosConfiguration);
    }
}