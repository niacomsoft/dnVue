// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/**
 * 提供了 WEB 相关的工具方法。
 *
 * @export
 * @class WebUtilities
 */
export class WebUtilities {
    /**
     * URL 重定向。
     *
     * @static
     * @param {string} url 目标 URL 地址。
     * @memberof WebUtilities
     */
    static redirect(url: string): void {
        window.location.replace(url);
    }

    /**
     * 刷新当前页。
     *
     * @static
     * @memberof WebUtilities
     */
    static refresh(): void {
        window.location.reload();
    }
}