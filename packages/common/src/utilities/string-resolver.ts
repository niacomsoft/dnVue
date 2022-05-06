// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/**
 * 提供了字符串解释相关的基本方法。
 *
 * @export
 * @abstract
 * @class StringResolver
 * @implements {dnvue.IStringResolver}
 */
export abstract class StringResolver implements dnvue.IStringResolver {
    abstract resolve(s: string): string;
}