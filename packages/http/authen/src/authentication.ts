// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { sealed } from "@dnvue/common";

/**
 * 定义了访问用户身份信息的接口。
 *
 * @export
 * @interface IIdentity
 */
export interface IIdentity {
    /**
     * 获取一个字符串，用于表示用户名称。
     *
     * @type {string}
     * @memberof IIdentity
     */
    readonly name: string;

    /**
     * 设置或获取一个值，用于表示是否已经身份认证。
     *
     * @type {boolean}
     * @memberof IIdentity
     */
    readonly isAuthenticated: boolean;
}

/**
 * 提供了访问身份信息相关的基本方法。
 *
 * @export
 * @abstract
 * @class Identity
 * @implements {IIdentity}
 */
export abstract class Identity implements IIdentity {
    readonly name: string;
    readonly isAuthenticated: boolean;

    /**
     * 用于初始化一个 Identity 类型的对象实例。
     * 
     * @param {string} name 用户名称。
     * @param {boolean} [isAuthenticated=true] 是否已经身份认证。
     * @memberof Identity
     */
    constructor(name: string, isAuthenticated: boolean = true) {
        this.name = name;
        this.isAuthenticated = isAuthenticated;
    }
}

/**
 * 定义了匿名身份信息的接口。
 *
 * @export
 * @interface IAnonymousIdentity
 * @extends {IIdentity}
 */
export interface IAnonymousIdentity extends IIdentity { }

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
@sealed
export class AnonymousIdentity extends Identity implements IAnonymousIdentity, IIdentity {
    /**
     * 用于初始化一个 AnonymousIdentity 类型的对象实例。
     * 
     * @memberof AnonymousIdentity
     */
    constructor() {
        super(String.empty(), false);
    }
}

/**
 * 定义了身份信息点的类型。
 *
 * @export
 * @interface Claim
 * @extends {Record<string, string>}
 */
export interface Claim extends Record<string, string> { }

/**
 * 定义了访问基于身份信息点的身份信息接口。
 *
 * @export
 * @interface IClaimsIdentity
 * @extends {IIdentity}
 */
export interface IClaimsIdentity extends IIdentity {
    /**
     * 获取 Claim 类型的对象实例，用于表示身份信息点。
     *
     * @type {Claim}
     * @memberof IClaimsIdentity
     */
    readonly claims: Claim;

    /**
     * 添加身份信息点。
     *
     * @param {Claim} [claims] Claim 类型的对象实例。
     * @memberof IClaimsIdentity
     */
    addClaims(claims?: Claim): void;
}

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
@sealed
export class ClaimsIdentity extends Identity implements IClaimsIdentity, IIdentity {
    private _claims: Claim = {};

    readonly claims: Claim = this._claims;
    addClaims(claims?: Claim | undefined): void {
        this._claims = Object.assign({}, this._claims, claims);
    }

    /**
     * 用于初始化一个 ClaimsIdentity 类型的对象实例。
     * 
     * @param {string} name 用户名称。
     * @param {boolean} [isAuthenticated=true] 是否已经身份认证。
     * @memberof ClaimsIdentity
     */
    constructor(name: string, isAuthenticated: boolean = true) {
        super(name, isAuthenticated);
        this._claims = Object.assign({}, this._claims, { name, "is-authenticated": isAuthenticated });
    }
}