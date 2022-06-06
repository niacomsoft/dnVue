// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { Router, NavigationGuardWithThis, NavigationHookAfter } from "vue-router";
import { useLocalization } from "../locale";
import { useDefaultLogWriter } from "@dnvue/composition-api";
import { usePrincipal } from "../services";

/**
 * 定义了路由拦截器类型。
 *
 * @interface RouterInterceptor
 */
interface RouterInterceptor {
    /**
     * 获取 NavigationGuardWithThis 类型的对象实例，用于表示进入路由前执行的方法。
     *
     * @type {NavigationGuardWithThis<any>}
     * @memberof RouterInterceptor
     * @readonly
     */
    readonly before?: NavigationGuardWithThis<any>;

    /**
     * 获取 NavigationHookAfter 类型的对象实例，用于表示进入路由后执行的方法。
     *
     * @type {NavigationHookAfter}
     * @memberof RouterInterceptor
     */
    readonly after?: NavigationHookAfter;
}

/**
 * 注册路由拦截器。
 *
 * @export
 * @param {Router} router 路由对象实例。
 * @param {RouterInterceptor} [customInterceptor] 自定义拦截器。
 * @returns {Router}
 */
export function registerRouterInterceptor(router: Router, customInterceptor?: RouterInterceptor): Router {
    const logWriter = useDefaultLogWriter();

    router.afterEach((to, from, failure) => {
        let title: string = useLocalization().t("APPLICATION_NAME");
        if (!String.isNullOrWhitespace(to.meta?.title)) {
            title = `${useLocalization().t(to.meta.title ?? "")} ▪ ${title}`;
        }
        document.title = title;

        if (customInterceptor?.after) {
            logWriter.writeTrace({ message: "尝试调用自定义 @after 路由拦截器。", contextData: { after: customInterceptor.after } });
            customInterceptor.after(to, from, failure);
        }
    });

    router.beforeEach((to, from, next) => {
        const principal = usePrincipal();
        if (to.meta?.allowAnonymous || principal.identity.isAuthenticated) {
            logWriter.writeTrace({ message: `路由 “${to.fullPath}” 允许匿名访问，或者已经经过身份认证，尝试放行。`, contextData: { router: to, principal } });
            if (customInterceptor?.before)
                customInterceptor.before(to, from, next);
            else next();
        }
        else {
            //next({ path: "/authentication/sign-in", query: { "redirect-router": to.fullPath } });
        }next();
    });

    return router;
}