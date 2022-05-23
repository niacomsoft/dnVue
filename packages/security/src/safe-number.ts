// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import Hashids from "hashids";
import { sealed } from "@dnvue/common";

/**
 * 提供了自然数相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SafeNumber
 */
@sealed
export class SafeNumber {
    private readonly _hashNumberProvider: Hashids;
    private readonly _hashSalt: string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";

    /**
     * 用于初始化一个 SafeNumber 类型的对象实例。
     * 
     * @memberof SafeNumber
     */
    constructor() {
        this._hashNumberProvider = new Hashids(this._hashSalt, Object.safeGet<number>(window.DEFAULT_SAFE_NUMBER_MINLENGTH, 8));
    }

    /**
     * 获取自然数等效的哈希字符串。
     *
     * @param {number} value 自然数。当 value 小于 0 时，将引发异常。
     * @returns {string}
     * @memberof SafeNumber
     */
    hash(value: number): string {
        if (!Number.lessThan(value)) {
            throw { message: `数值 “${value}” 不是一个有效的自然数。` };
        }
        return this._hashNumberProvider.encode([value]);
    }

    /**
     * 从哈希字符串获取自然数。
     *
     * @param {string} s 哈希字符串。
     * @returns {number}
     * @memberof SafeNumber
     */
    fromHash(s: string): number {
        return this._hashNumberProvider.decode(s)[0] as number;
    }
}