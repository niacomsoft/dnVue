// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { SessionStoreCache, LocalStoreCache } from "@dnvue/caching";
import { SingletonManager } from "@dnvue/common";

/**
 * 使用缓存。
 *
 * @export
 * @param {(("session" | "local"))} [providerName="session"] 缓存程序名称。
 * @returns {dnvue.caching.ICache}
 */
export function useCaching(providerName: ("session" | "local") = "session"): dnvue.caching.ICache {
    if (providerName === "session")
        return SingletonManager.createOrGet<SessionStoreCache>("__DNVUE_CACHING_SESSION_STORE__", () => new SessionStoreCache());
    else
        return SingletonManager.createOrGet<LocalStoreCache>("__DNVUE_CACHING_LOCAL_STORE__", () => new LocalStoreCache());
}