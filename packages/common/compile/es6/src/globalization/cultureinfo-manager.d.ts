/// <reference types="@dnvue/typings" />
/**
 * 提供了管理文化区域信息相关的基本方法。
 *
 * @export
 * @abstract
 * @class CultureInfoManager
 * @implements {dnvue.ICulutureInfoManager}
 */
export declare abstract class CultureInfoManager implements dnvue.ICulutureInfoManager {
    abstract setCurrentCulture(cultureInfo: dnvue.CultureInfo): void;
    getCurrentCulture(): dnvue.CultureInfo;
    /**
     * 从浏览器语言设置中获取文化区域设置。
     *
     * @protected
     * @returns {dnvue.CultureInfo}
     * @memberof CultureInfoManager
     */
    protected _getCultureFromBrowserLanguage(): dnvue.CultureInfo;
}
