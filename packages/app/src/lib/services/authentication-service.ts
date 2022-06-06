// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/// <reference path="./typings/index.d.ts" />

import {
    AnonymousIdentity,
    AnonymousPrincipal,
    AuthenticationResult,
    AuthenticationService,
    ClaimsIdentity,
    ClaimsPrincipal,
    IAuthenticationService,
    IBasicCredentials,
    ICredentials,
    IIdentity,
    IPrincipal
} from "@dnvue/http-authen";
import { useDefaultLogWriter, useCaching } from "@dnvue/composition-api";

const KEYOF_AUTHENTICATION_SESSION_STORE: string = "dnvue.authentication";

/**
 * 提供了基础身份认证服务相关的方法。
 *
 * @class BasicAuthenticationServiceProvider
 * @extends {AuthenticationService<dnvue.entity.User>}
 */
class BasicAuthenticationServiceProvider extends AuthenticationService<dnvue.entity.User> implements IAuthenticationService<dnvue.entity.User> {
    /**
     * 获取 dnvue.ILogWriter 类型的对象实例，用于表示记录运行时日志的方法。
     *
     * @protected
     * @type {dnvue.ILogWriter}
     * @memberof BasicAuthenticationServiceProvider
     */
    protected readonly _logger: dnvue.ILogWriter = useDefaultLogWriter();

    /**
     * 获取 dnvue.caching.ICache 类型的对象实例，用于表示存储用户身份信息的方法。
     *
     * @protected
     * @type {dnvue.caching.ICache}
     * @memberof BasicAuthenticationServiceProvider
     */
    protected readonly _authenStore: dnvue.caching.ICache = useCaching("session");

    signinAsync(credentials: ICredentials): Promise<AuthenticationResult<dnvue.entity.User>> {
        return new Promise<AuthenticationResult<dnvue.entity.User>>((successCallback, failureCallback) => {
            const _basicCredentials = credentials as IBasicCredentials;
            if (String.isNullOrWhitespace(_basicCredentials?.userName) || String.isNullOrWhitespace(_basicCredentials?.password))
                failureCallback(Error.create("INVALID_CREDENTIALS"));
            else {
                // TODO: 进行模拟登录。
                this._logger.writeDebug({ message: "尝试进行模拟登录。" });
                const context = this;
                const timeoutId = window.setTimeout(() => {
                    context._logger.writeWarning({ message: `模拟登录成功。您可以尝试重写此方法，集成您自己的登录方式。`, contextData: { 'simulation-timeout-id': timeoutId } });
                    window.clearTimeout(timeoutId);
                    successCallback({
                        result: {
                            userName: _basicCredentials.userName
                        }
                    });
                }, 5000);
            }
        });
    }
    authorizeAsync(result: AuthenticationResult<dnvue.entity.User>): Promise<void> {
        const identity: IIdentity = this._buildIdentity(result);
        const context = this;
        return new Promise<void>((successCallback, failureCallback) => {
            try {
                if (identity.isAuthenticated) {
                    this._authenStore.update(KEYOF_AUTHENTICATION_SESSION_STORE, identity, true);
                }
                successCallback();
            } catch (error) {
                context._logger.writeError({ message: "存储身份认证信息、授权访问失败。", contextData: error });
                failureCallback(Error.create("AUTHORIZE_FAILED"));
            }
        });
    }
    protected _buildIdentity(authenResult: AuthenticationResult<dnvue.entity.User>): IIdentity {
        // TODO: 构建模拟的身份信息。
        if (String.isNullOrWhitespace(authenResult?.result?.userName))
            return new AnonymousIdentity(); // TODO: 匿名的身份信息。
        else {
            const claimsIdentity = new ClaimsIdentity(authenResult.result?.userName ?? "", true);
            return claimsIdentity;
        }
    }
}

/**
 * 使用基础身份认证服务。
 *
 * @export
 * @returns {AuthenticationService<dnvue.entity.User>}
 */
export function useBasicAuthenticator(): AuthenticationService<dnvue.entity.User> {
    return new BasicAuthenticationServiceProvider();
}

/**
 * 使用身份摘要信息。
 *
 * @export
 * @returns {IPrincipal}
 */
export function usePrincipal(): IPrincipal {
    const _identity = useCaching("session").get<ClaimsIdentity>(KEYOF_AUTHENTICATION_SESSION_STORE);
    if (_identity?.isAuthenticated) {
        return new ClaimsPrincipal(_identity);
    }
    return new AnonymousPrincipal();
}