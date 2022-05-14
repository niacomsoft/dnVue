// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { createWebHashHistory, createRouter, Router, RouteRecordRaw } from "vue-router";
import { App } from "vue";
import { createRouteTable } from "./route-table";

/**
 * 配置路由。
 *
 * @export
 * @param {App} app Vue 应用程序对象实例。
 * @returns {App}
 */
export function configureRoute(app: App): App {
    const routeTable: RouteRecordRaw[] = createRouteTable();

    const router: Router = createRouter({
        history: createWebHashHistory(),
        routes: routeTable
    });

    return app.use(router);
}