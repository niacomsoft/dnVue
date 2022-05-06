/// <reference types="@dnvue/typings" />
/**
 * 提供了文化区域持久化相关的基本方法。
 *
 * @export
 * @abstract
 * @class CultureInfoPersistence
 * @implements {dnvue.ICultureInfoPersistence}
 */
export declare abstract class CultureInfoPersistence implements dnvue.ICultureInfoPersistence {
    abstract save(culture: dnvue.CultureInfo): void;
    abstract get(): dnvue.CultureInfo;
    /**
     * 从浏览器中获取文化区域设置。
     *
     * @protected
     * @returns {dnvue.CultureInfo}
     * @memberof CultureInfoPersistence
     */
    protected _getCultureFromBrower(): dnvue.CultureInfo;
}
