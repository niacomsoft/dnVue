/// <reference types="@dnvue/typings" />
/**
 * 使用缓存。
 *
 * @export
 * @param {(("session" | "local"))} [providerName="session"] 缓存程序名称。
 * @returns {dnvue.caching.ICache}
 */
export declare function useCaching(providerName?: ("session" | "local")): dnvue.caching.ICache;
