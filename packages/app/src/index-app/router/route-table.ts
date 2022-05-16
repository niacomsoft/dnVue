// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { RouteRecordRaw } from "vue-router";

/**
 * 创建路由表。
 *
 * @export
 * @returns {RouteRecordRaw[]}
 */
export function createRouteTable(): RouteRecordRaw[] {
    return [
        {
            path: "/",
            component: () => import("../views/vw-home.vue")
        }
    ];
}