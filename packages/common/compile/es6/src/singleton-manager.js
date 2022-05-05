// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { sealed } from "./decorators";
/**
 * 提供了管理单例服务相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SingletonManager
 * @sealed
 */
let SingletonManager = class SingletonManager {
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
    static createOrGet(serviceName, builder) {
        if (!window.DNVUE_SINGLETON_INSTANCE_MANAGER)
            window.DNVUE_SINGLETON_INSTANCE_MANAGER = {};
        if (!window.DNVUE_SINGLETON_INSTANCE_MANAGER[serviceName])
            window.DNVUE_SINGLETON_INSTANCE_MANAGER[serviceName] = builder();
        return window.DNVUE_SINGLETON_INSTANCE_MANAGER[serviceName];
    }
};
SingletonManager = __decorate([
    sealed
], SingletonManager);
export { SingletonManager };
