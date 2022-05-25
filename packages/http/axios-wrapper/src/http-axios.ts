// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { IHttpConfigurationBuilder, HttpConfigurationBuilder, HttpMethod } from "@dnvue/http-core";
import { AxiosRequestConfig, Method } from "axios";

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
            params: config.query
        };
    }
}