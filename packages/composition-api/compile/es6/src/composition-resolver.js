// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { ConstantStringResolver } from "@dnvue/common";
/**
 * 使用默认的字符串解释程序。
 *
 * @export
 * @returns {dnvue.IStringResolver}
 */
export function useDefaultResolver() {
    if (!window.DEFAULT_STRING_RESOLVER)
        window.DEFAULT_STRING_RESOLVER = new ConstantStringResolver();
    return window.DEFAULT_STRING_RESOLVER;
}
