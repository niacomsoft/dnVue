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
            redirect: { path: "/home" }
        },
        {
            path: "/home",
            component: () => import("../views/home/index.vue"),
            meta: {
                title: "CONTROL_PANEL"
            },
            children: [{
                path: "dashboard",
                component: () => import("../views/home/dashboard/dashboard.vue")
            }]
        },
        {
            path: "/authentication",
            component: () => import("../views/authentication/index.vue"),
            children: [{
                path: "sign-in",
                component: () => import("../views/authentication/sign-in/sign-in.vue"),
                meta: {
                    allowAnonymous: true,
                    title: "SIGN_IN"
                }
            }],
            meta: {
                allowAnonymous: true
            }
        }
    ];
}