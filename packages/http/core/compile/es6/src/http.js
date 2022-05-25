// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
/**
 * 提供了构建 HTTP 请求配置相关的方法。
 *
 * @export
 * @class HttpConfigurationBuilder
 * @implements {IHttpConfigurationBuilder}
 */
export class HttpConfigurationBuilder {
    constructor() {
        /**
         * 设置或获取一个字符串，用于表示 HTTP 请求的基础 URL 地址。
         *
         * @protected
         * @type {string}
         * @memberof HttpConfigurationBuilder
         */
        this._baseUrl = Object.safeGet(window.DEFAULT_HTTP_BASE_URL, "./");
        /**
         * 设置或获取 Record<string, string> 类型的对象实例，用于表示 HTTP 请求头。
         *
         * @protected
         * @type {Record<string, string>}
         * @memberof HttpConfigurationBuilder
         */
        this._headers = {
            "Content-Type": "application/json;charset=utf-8"
        };
        /**
         * 设置或获取 Record<string, string> 类型的对象实例，用于表示 HTTP 请求查询字符串。
         *
         * @protected
         * @type {Record<string, string>}
         * @memberof HttpConfigurationBuilder
         */
        this._query = {};
        /**
         * 设置或获取一个值，用于表示 HTTP 请求超时（单位毫秒）。
         *
         * @protected
         * @type {number}
         * @memberof HttpConfigurationBuilder
         */
        this._timeout = 1000 * 10;
    }
    withBaseUrl(baseUrl) {
        this._baseUrl = Object.safeGet(baseUrl, this._baseUrl);
        return this;
    }
    withHeaders(header) {
        this._headers = Object.assign({}, this._headers, header);
        return this;
    }
    withQuery(queryStr) {
        this._query = Object.assign({}, this._query, queryStr);
        return this;
    }
    withTimeout(value) {
        this._timeout = Object.safeGet(value, 1000 * 10);
        return this;
    }
    build() {
        return {
            headers: this._headers,
            baseUrl: this._baseUrl,
            query: this._query,
            timeout: this._timeout
        };
    }
}
