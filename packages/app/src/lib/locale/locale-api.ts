// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { LocaleOptions } from "./locale-options";
import { useI18n, Composer } from "vue-i18n";
import { SingletonManager } from "@dnvue/common";

/**
 * 使用字符串本地化资源。
 *
 * @export
 * @returns {Composer}
 */
export function useLocalization(): Composer {
    return SingletonManager.createOrGet<Composer>("__DNVUE_LOCALIZATION_RESOURCE__", () => {
        return useI18n(LocaleOptions);
    });
}