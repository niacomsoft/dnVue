/**
 * 提供了自然数相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SafeNumber
 */
export declare class SafeNumber {
    private readonly _hashNumberProvider;
    private readonly _hashSalt;
    /**
     * 用于初始化一个 SafeNumber 类型的对象实例。
     *
     * @memberof SafeNumber
     */
    constructor();
    /**
     * 获取自然数等效的哈希字符串。
     *
     * @param {number} value 自然数。当 value 小于 0 时，将引发异常。
     * @returns {string}
     * @memberof SafeNumber
     */
    hash(value: number): string;
    /**
     * 从哈希字符串获取自然数。
     *
     * @param {string} s 哈希字符串。
     * @returns {number}
     * @memberof SafeNumber
     */
    fromHash(s: string): number;
}
