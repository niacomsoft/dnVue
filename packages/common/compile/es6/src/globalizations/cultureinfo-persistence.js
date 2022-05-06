// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
/**
 * 提供了文化区域持久化相关的基本方法。
 *
 * @export
 * @abstract
 * @class CultureInfoPersistence
 * @implements {dnvue.ICultureInfoPersistence}
 */
export class CultureInfoPersistence {
    /**
     * 从浏览器中获取文化区域设置。
     *
     * @protected
     * @returns {dnvue.CultureInfo}
     * @memberof CultureInfoPersistence
     */
    _getCultureFromBrower() {
        if (String.isNullOrWhitespace(navigator.language))
            return { name: "zh-CN" };
        return { name: navigator.language.toLowerCase().indexOf("en") >= 0 ? "en-US" : "zh-CN" };
    }
}
