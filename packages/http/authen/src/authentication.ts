// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { sealed } from "@dnvue/common";
import { ICredentials } from "./credentials";

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

/**
 * 定义了用户身份摘要信息的接口。
 *
 * @export
 * @interface IPrincipal
 */
export interface IPrincipal {
    /**
     * 获取 IIdentity 类型的对象实例，用于表示用户身份信息。
     *
     * @type {IIdentity}
     * @memberof IPrincipal
     */
    readonly identity: IIdentity;
}

/**
 * 提供了访问用户身份摘要信息相关的基本方法。
 *
 * @export
 * @abstract
 * @class Principal
 * @implements {IPrincipal}
 */
export abstract class Principal implements IPrincipal {
    /**
     * 用于初始化一个 Principal 类型的对象实例。
     * 
     * @param {IIdentity} [identity]
     * @memberof Principal
     */
    constructor(identity?: IIdentity) {
        this.identity = Object.safeGet<IIdentity>(identity, new AnonymousIdentity());
    }

    readonly identity: IIdentity;
}

/**
 * 定义了访问匿名身份摘要信息的接口。
 *
 * @export
 * @interface IAnonymousPrincipal
 * @extends {IPrincipal}
 */
export interface IAnonymousPrincipal extends IPrincipal { }

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
@sealed
export class AnonymousPrincipal extends Principal implements IAnonymousPrincipal, IPrincipal {
    /**
     * 用于初始化一个 AnonymousPrincipal 类型的对象实例。
     * 
     * @memberof AnonymousPrincipal
     */
    constructor() {
        super();
    }
}

/**
 * 定义了访问用户身份信息点摘要的接口。
 *
 * @export
 * @interface IClaimsPrincipal
 * @extends {IPrincipal}
 */
export interface IClaimsPrincipal extends IPrincipal {
    /**
     * 获取 IClaimsIdentity 类型的对象实例，用于表示用户身份信息。
     *
     * @type {IClaimsIdentity}
     * @memberof IClaimsPrincipal
     */
    readonly claimsIdentity: IClaimsIdentity;
}

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
@sealed
export class ClaimsPrincipal extends Principal implements IClaimsPrincipal, IPrincipal {
    readonly claimsIdentity: IClaimsIdentity;

    /**
     * 用于初始化一个 ClaimsPrincipal 类型的对象实例。
     * 
     * @param {IClaimsIdentity} identity
     * @memberof ClaimsPrincipal
     */
    constructor(identity: IClaimsIdentity) {
        super(identity);
        this.claimsIdentity = identity;
    }
}

/**
 * 定义了身份认证结果数据类型。
 *
 * @export
 * @interface AuthenticationResult
 * @template T
 */
export interface AuthenticationResult<T> {
    /**
     * 获取 T 类型的对象实例或值，用于表示身份认证结果。
     *
     * @type {T}
     * @memberof AuthenticationResult
     */
    readonly result?: T;
}

/**
 * 定义了身份认证相关的接口。
 *
 * @export
 * @interface IAuthenticationService
 * @template T 身份认证结果类型。
 */
export interface IAuthenticationService<T> {
    /**
     * (异步的方法) 执行登录。
     *
     * @param {ICredentials} credentials 身份认证凭据。
     * @returns {Promise<AuthenticationResult<T>>}
     * @memberof IAuthenticationService<T>
     */
    signinAsync(credentials: ICredentials): Promise<AuthenticationResult<T>>;

    /**
     * (异步的方法) 为当前的应用进行授权。
     *
     * @param {AuthenticationResult<T>} result 身份认证结果。
     * @returns {Promise<void>}
     * @memberof IAuthenticationService<T>
     */
    authorizeAsync(result: AuthenticationResult<T>): Promise<void>;
}

/**
 * 提供了身份认证相关的基本方法。
 *
 * @export
 * @abstract
 * @class AuthenticationService
 * @implements {IAuthenticationService<T>}
 * @template T 身份认证结果。
 */
export abstract class AuthenticationService<T> implements IAuthenticationService<T> {
    abstract signinAsync(credentials: ICredentials): Promise<AuthenticationResult<T>>;
    abstract authorizeAsync(result: AuthenticationResult<T>): Promise<void>;

    /**
     * 构建用户身份信息。
     *
     * @protected
     * @abstract
     * @template T
     * @param {AuthenticationResult<T>} authenResult 身份认证结果。
     * @returns {IIdentity}
     * @memberof AuthenticationService<T>
     */
    protected abstract _buildIdentity(authenResult: AuthenticationResult<T>): IIdentity;
}