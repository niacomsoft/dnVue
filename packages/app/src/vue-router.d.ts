// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import "vue-router";

declare module "vue-router" {
    /**
     * 为 RouteMeta 类型（路由元数据）提供的扩展方法。
     *
     * @interface RouteMeta
     */
    interface RouteMeta {
        /**
         * 设置或获取一个值，用于表示当前路由是否允许匿名访问。
         *
         * @type {boolean}
         * @memberof RouteMeta
         */
        allowAnonymous?: boolean;

        /**
         * 设置或获取一个字符串，用于表示当前路由标题。
         *
         * @type {string}
         * @memberof RouteMeta
         */
        title?: string;
    }
}