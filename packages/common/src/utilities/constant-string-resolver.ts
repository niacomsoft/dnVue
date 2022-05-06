// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { StringResolver } from "./string-resolver";
import { sealed } from "../decorators";

/**
 * 提供了解释常量字符串相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ConstantStringResolver
 * @extends {StringResolver}
 * @implements {dnvue.IStringResolver}
 * @sealed
 */
@sealed
export class ConstantStringResolver extends StringResolver implements dnvue.IStringResolver {
    resolve(s: string): string {
        return s;
    }
}