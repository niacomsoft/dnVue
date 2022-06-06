/**
 * 提供了 WEB 相关的工具方法。
 *
 * @export
 * @class WebUtilities
 */
export declare class WebUtilities {
    /**
     * URL 重定向。
     *
     * @static
     * @param {string} url 目标 URL 地址。
     * @memberof WebUtilities
     */
    static redirect(url: string): void;
    /**
     * 刷新当前页。
     *
     * @static
     * @memberof WebUtilities
     */
    static refresh(): void;
}
