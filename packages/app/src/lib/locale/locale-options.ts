// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { zhCN } from "./zh-cn";
import { enUS } from "./en-us";
import { I18nOptions } from "vue-i18n";

/**
 * 本地化配置。
 */
export const LocaleOptions: I18nOptions = {
    locale: import.meta.env.DNVUE_DEFAULT_CULTURE_NAME,
    messages: {
        "zh-CN": zhCN,
        "en-US": enUS
    }
};