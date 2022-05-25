// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { IHttpConfigurationBuilder, HttpConfigurationBuilder, HttpMethod, HttpClient, IHttpClient, HttpConfiguration, ResultResponse, VoidResponse } from "@dnvue/http-core";
import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";

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
    protected getAxiosMethod(method?: HttpMethod): Method {
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

    requestOnlyAsync(uri: string, method?: HttpMethod, spec?: HttpConfiguration | undefined): Promise<VoidResponse> {
        throw new Error("Method not implemented.");
    }
    requestWaitAsync<TResult>(uri: string, method?: HttpMethod, spec?: HttpConfiguration | undefined): Promise<ResultResponse<TResult>> {
        throw new Error("Method not implemented.");
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