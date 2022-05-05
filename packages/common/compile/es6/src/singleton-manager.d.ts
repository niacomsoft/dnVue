/// <reference types="@dnvue/typings" />
/**
 * 提供了管理单例服务相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SingletonManager
 * @sealed
 */
export declare class SingletonManager {
    /**
     * 创建或者获取 TService 类型的单例服务对象实例。
     *
     * @static
     * @template TService 服务类型。
     * @param {string} serviceName 单例服务名称。
     * @param {dnvue.Func<TService>} builder 构建服务的方法。
     * @returns {TService}
     * @memberof SingletonManager
     */
    static createOrGet<TService>(serviceName: string, builder: dnvue.Func<TService>): TService;
}
