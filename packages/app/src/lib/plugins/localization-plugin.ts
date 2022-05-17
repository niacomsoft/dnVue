// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { zhCN, enUS } from "../locale";
import { App } from "vue";
import { createI18n } from "vue-i18n";

/**
 * 启用本地化资源组件。
 *
 * @export
 * @param {App} app
 * @returns {App}
 */
export function useLocalizations(app: App): App {
    const locale = createI18n({
        locale: import.meta.env.DNVUE_DEFAULT_CULTURE_NAME,
        messages: {
            "zh-CN": zhCN,
            "en-US": enUS
        }
    });

    return app.use(locale);
}