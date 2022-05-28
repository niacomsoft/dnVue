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
import { sealed } from "@dnvue/common";
/**
 * 提供了访问身份信息相关的基本方法。
 *
 * @export
 * @abstract
 * @class Identity
 * @implements {IIdentity}
 */
export class Identity {
    /**
     * 用于初始化一个 Identity 类型的对象实例。
     *
     * @param {string} name 用户名称。
     * @param {boolean} [isAuthenticated=true] 是否已经身份认证。
     * @memberof Identity
     */
    constructor(name, isAuthenticated = true) {
        this.name = name;
        this.isAuthenticated = isAuthenticated;
    }
}
/**
 * 提供了访问匿名身份信息相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class AnonymousIdentity
 * @extends {Identity}
 * @implements {IAnonymousIdentity}
 * @implements {IIdentity}
 * @sealed
 */
let AnonymousIdentity = class AnonymousIdentity extends Identity {
    /**
     * 用于初始化一个 AnonymousIdentity 类型的对象实例。
     *
     * @memberof AnonymousIdentity
     */
    constructor() {
        super(String.empty(), false);
    }
};
AnonymousIdentity = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], AnonymousIdentity);
export { AnonymousIdentity };
/**
 * 提供了获取基于信息点的身份信息相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ClaimsIdentity
 * @extends {Identity}
 * @implements {IClaimsIdentity}
 * @implements {IIdentity}
 * @sealed
 */
let ClaimsIdentity = class ClaimsIdentity extends Identity {
    /**
     * 用于初始化一个 ClaimsIdentity 类型的对象实例。
     *
     * @param {string} name 用户名称。
     * @param {boolean} [isAuthenticated=true] 是否已经身份认证。
     * @memberof ClaimsIdentity
     */
    constructor(name, isAuthenticated = true) {
        super(name, isAuthenticated);
        this._claims = {};
        this.claims = this._claims;
        this._claims = Object.assign({}, this._claims, { name, "is-authenticated": isAuthenticated });
    }
    addClaims(claims) {
        this._claims = Object.assign({}, this._claims, claims);
    }
};
ClaimsIdentity = __decorate([
    sealed,
    __metadata("design:paramtypes", [String, Boolean])
], ClaimsIdentity);
export { ClaimsIdentity };
/**
 * 提供了访问用户身份摘要信息相关的基本方法。
 *
 * @export
 * @abstract
 * @class Principal
 * @implements {IPrincipal}
 */
export class Principal {
    /**
     * 用于初始化一个 Principal 类型的对象实例。
     *
     * @param {IIdentity} [identity]
     * @memberof Principal
     */
    constructor(identity) {
        this.identity = Object.safeGet(identity, new AnonymousIdentity());
    }
}
/**
 * 提供了访问匿名身份摘要信息相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class AnonymousPrincipal
 * @extends {Principal}
 * @implements {IAnonymousPrincipal}
 * @implements {IPrincipal}
 * @sealed
 */
let AnonymousPrincipal = class AnonymousPrincipal extends Principal {
    /**
     * 用于初始化一个 AnonymousPrincipal 类型的对象实例。
     *
     * @memberof AnonymousPrincipal
     */
    constructor() {
        super();
    }
};
AnonymousPrincipal = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], AnonymousPrincipal);
export { AnonymousPrincipal };
/**
 * 提供了访问用户身份摘要信息相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ClaimsPrincipal
 * @extends {Principal}
 * @implements {IClaimsPrincipal}
 * @implements {IPrincipal}
 * @sealed
 */
let ClaimsPrincipal = class ClaimsPrincipal extends Principal {
    /**
     * 用于初始化一个 ClaimsPrincipal 类型的对象实例。
     *
     * @param {IClaimsIdentity} identity
     * @memberof ClaimsPrincipal
     */
    constructor(identity) {
        super(identity);
        this.claimsIdentity = identity;
    }
};
ClaimsPrincipal = __decorate([
    sealed,
    __metadata("design:paramtypes", [Object])
], ClaimsPrincipal);
export { ClaimsPrincipal };
