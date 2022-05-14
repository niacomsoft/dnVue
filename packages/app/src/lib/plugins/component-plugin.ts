// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import ElementPlus from "element-plus";
import { App } from "vue";

/**
 * 启用 Element-Plus 组件库。
 *
 * @export
 * @param {App} app Vue 应用程序对象实例。
 * @returns {App}
 */
export function useElementPlus(app: App): App {
    import("../../assets/_element-plus.scss");

    return app.use(ElementPlus, { zIndex: 9999 });
}