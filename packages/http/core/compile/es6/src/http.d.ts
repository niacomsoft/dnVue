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
