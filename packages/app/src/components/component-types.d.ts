// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { RouteLocationRaw } from "vue-router";

/**
 * 定义了菜单条目配置选项类型。
 *
 * @interface DnvueMenuItemOptions
 * @extends {dnvue.ui.MenuItemOptions}
 */
declare interface DnvueMenuItemOptions extends dnvue.ui.MenuItemOptions {
    /**
     * 获取 RouteLocationRaw 类型的对象实例，用于表示目标路由。
     *
     * @type {RouteLocationRaw}
     * @memberof DnvueMenuItemOptions
     */
    readonly targetRoute?: RouteLocationRaw;

    readonly children?: DnvueMenuItemOptions[];
}