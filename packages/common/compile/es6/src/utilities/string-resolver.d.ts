/// <reference types="@dnvue/typings" />
/**
 * 提供了字符串解释相关的基本方法。
 *
 * @export
 * @abstract
 * @class StringResolver
 * @implements {dnvue.IStringResolver}
 */
export declare abstract class StringResolver implements dnvue.IStringResolver {
    abstract resolve(s: string): string;
}
