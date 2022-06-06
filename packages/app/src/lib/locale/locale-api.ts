// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { SingletonManager } from "@dnvue/common";
import i18next, { i18n } from "i18next";
import { enUS } from "./en-us";
import { zhCN } from "./zh-cn";

/**
 * 使用字符串本地化资源。
 *
 * @export
 * @returns {Composer}
 */
export function useLocalization(): i18n {
    return SingletonManager.createOrGet<i18n>("__DNVUE_LOCALIZATION_RESOURCE__", () => {
        i18next.init({
            lng: import.meta.env.DNVUE_DEFAULT_CULTURE_NAME,
            debug: import.meta.env.DEV,
            resources: {
                "zh-CN": {
                    translation: zhCN
                },
                "en-US": {
                    translation: enUS
                }
            }
        });
        return i18next;
    });
}