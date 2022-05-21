// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Hashids from "hashids";
import { sealed } from "@dnvue/common";
/**
 * 提供了自然数相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SafeNumber
 */
let SafeNumber = class SafeNumber {
    /**
     * 用于初始化一个 SafeNumber 类型的对象实例。
     *
     * @memberof SafeNumber
     */
    constructor() {
        this._hashSalt = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
        this._hashNumberProvider = new Hashids(this._hashSalt, Object.safeGet(window.DEFAULT_SAFE_NUMBER_MINLENGTH, 8));
    }
    /**
     * 获取自然数等效的哈希字符串。
     *
     * @param {number} value 自然数。当 value 小于 0 时，将引发异常。
     * @returns {string}
     * @memberof SafeNumber
     */
    hash(value) {
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
    fromHash(s) {
        return this._hashNumberProvider.decode(s)[0];
    }
};
SafeNumber = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], SafeNumber);
export { SafeNumber };
