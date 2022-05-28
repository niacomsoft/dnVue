// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { useI18n } from "vue-i18n";

/**
 * 提供了与异常相关的辅助方法。
 *
 * @export
 * @class ErrorHelper
 */
export class ErrorHelper {
    private static readonly _resourceReader = useI18n({ useScope: "global" });

    /**
     * 创建一个异常。
     *
     * @static
     * @param {string} name 异常信息资源名称。
     * @returns {Error}
     * @memberof ErrorHelper
     */
    static createError(name: string): Error {
        return new Error(this._resourceReader.t(name));
    }
}