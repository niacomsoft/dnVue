/// <reference types="@dnvue/typings" />
import { StringResolver } from "./string-resolver";
/**
 * 提供了解释常量字符串相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ConstantStringResolver
 * @extends {StringResolver}
 * @implements {dnvue.IStringResolver}
 * @sealed
 */
export declare class ConstantStringResolver extends StringResolver implements dnvue.IStringResolver {
    resolve(s: string): string;
}
