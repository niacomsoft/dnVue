// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
/**
 * 提供了管理文化区域信息相关的基本方法。
 *
 * @export
 * @abstract
 * @class CultureInfoManager
 * @implements {dnvue.ICulutureInfoManager}
 */
export class CultureInfoManager {
    getCurrentCulture() {
        return this._getCultureFromBrowserLanguage();
    }
    /**
     * 从浏览器语言设置中获取文化区域设置。
     *
     * @protected
     * @returns {dnvue.CultureInfo}
     * @memberof CultureInfoManager
     */
    _getCultureFromBrowserLanguage() {
        let defaultLanguage = Object.safeGet(window.navigator.language, "zh-CN");
        if (String.isNullOrWhitespace(defaultLanguage) || defaultLanguage.toLowerCase() === "zh" || defaultLanguage.toLowerCase() === "zh-chs")
            defaultLanguage = "zh-CN";
        return { name: defaultLanguage };
    }
}
