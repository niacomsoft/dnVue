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
let ConstantStringResolver = class ConstantStringResolver extends StringResolver {
    resolve(s) {
        return s;
    }
};
ConstantStringResolver = __decorate([
    sealed
], ConstantStringResolver);
export { ConstantStringResolver };
