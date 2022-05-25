// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { HttpConfigurationBuilder, HttpClient } from "@dnvue/http-core";
import axios from "axios";
/**
 * 提供了构建 Axios 配置相关的方法。
 *
 * @export
 * @class AxiosConfigurationBuilder
 * @extends {HttpConfigurationBuilder}
 * @implements {IHttpConfigurationBuilder}
 */
export class AxiosConfigurationBuilder extends HttpConfigurationBuilder {
    /**
     * 构建 Axios 请求配置。
     *
     * @returns {AxiosRequestConfig}
     * @memberof AxiosConfigurationBuilder
     */
    buildAxiosConfiguration() {
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
export class AxiosClient extends HttpClient {
    /**
     * 用于初始化一个 Axios 类型的对象实例。
     *
     * @param {AxiosConfigurationBuilder} [configure] AxiosConfigurationBuilder 类型的对象实例。
     * @memberof AxiosClient
     */
    constructor(configure) {
        super(Object.safeGet(configure, new AxiosConfigurationBuilder()));
        this._defaultAxiosConfiguration = super.defaultConfiguration.buildAxiosConfiguration();
        this._axiosProvider = axios.create(this._defaultAxiosConfiguration);
    }
    /**
     * 获取 Axios 请求方法。
     *
     * @protected
     * @param {HttpMethod} [method] dnVue 定义的 HTTP 请求方法。
     * @returns {Method}
     * @memberof AxiosClient
     */
    getAxiosMethod(method) {
        let _target = "GET";
        method = Object.safeGet(method, "HTTP-GET");
        switch (method) {
            case "HTTP-DELETE":
                _target = "DELETE";
                break;
            case "HTTP-OPTIONS":
                _target = "OPTIONS";
                break;
            case "HTTP-PATCH":
                _target = "PATCH";
                break;
            case "HTTP-POST":
                _target = "POST";
                break;
            case "HTTP-PUT":
                _target = "PUT";
                break;
            default: break;
        }
        return _target;
    }
    requestOnlyAsync(uri, method, spec) {
        throw new Error("Method not implemented.");
    }
    requestWaitAsync(uri, method, spec) {
        throw new Error("Method not implemented.");
    }
}
