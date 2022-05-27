// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { createPinia } from "pinia";
import { App } from "vue";

/**
 * 启用 pinia 作为状态管理。
 *
 * @export
 * @param {App} app Vue 应用对象实例。
 * @returns {App}
 */
export function usePinia(app: App): App {
    return app.use(createPinia());
}