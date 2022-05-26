// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HttpConfigurationBuilder, HttpClient, HttpStatusCode } from "@dnvue/http-core";
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
    _getAxiosMethod(method) {
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
    /**
     * 创建默认的查询字符串。
     *
     * @protected
     * @returns {Record<string,string>}
     * @memberof AxiosClient
     */
    _createDefaultQuery() {
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
    _internalRequestAsync(uri, method, spec) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let contextOptions = Object.assign({}, this._defaultAxiosConfiguration, { method, url: uri });
            if (spec === null || spec === void 0 ? void 0 : spec.headers) {
                contextOptions.headers = Object.assign({}, contextOptions.headers, spec.headers);
            }
            if (spec === null || spec === void 0 ? void 0 : spec.query) {
                contextOptions.params = Object.assign({}, contextOptions.params, spec.query);
            }
            contextOptions.timeout = (_a = spec === null || spec === void 0 ? void 0 : spec.timeout) !== null && _a !== void 0 ? _a : 10000;
            if (String.isNullOrWhitespace(spec === null || spec === void 0 ? void 0 : spec.baseUrl))
                contextOptions.baseURL = spec === null || spec === void 0 ? void 0 : spec.baseUrl;
            try {
                const response = yield this._axiosProvider.request(contextOptions);
                if (this.responseInjector) {
                    const injectorError = this.responseInjector(response);
                    if (injectorError)
                        throw { rawResponse: response, rawError: injectorError };
                }
                return response;
            }
            catch (error) {
                throw { rawResponse: error === null || error === void 0 ? void 0 : error.response, rawError: error };
            }
        });
    }
    requestOnlyAsync(uri, method, spec) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this._internalRequestAsync(uri, this._getAxiosMethod(method), spec);
                const voidResponse = {
                    metadata: { rawResponse: response },
                    statusCode: HttpStatusCode.OK
                };
                return voidResponse;
            }
            catch (error) {
                const failedResponse = {
                    statusCode: error.rawResponse ? error.rawResponse.status : undefined,
                    metadata: { error },
                    error: new Error("axios throw an error")
                };
                throw failedResponse;
            }
        });
    }
    requestWaitAsync(uri, method, spec) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this._internalRequestAsync(uri, this._getAxiosMethod(method), spec);
                const resultResponse = {
                    result: response.data,
                    metadata: { rawResponse: response },
                    statusCode: HttpStatusCode.OK
                };
                return resultResponse;
            }
            catch (error) {
                const failedResponse = {
                    statusCode: error.rawResponse ? error.rawResponse.status : undefined,
                    metadata: { error },
                    error: new Error("axios throw an error")
                };
                throw failedResponse;
            }
        });
    }
}
