/// <reference types="@dnvue/typings" />
import { StoreAPI } from "store2";
import { AESCryptoAlgorithm, SHA1AlgorithmProvider } from "@dnvue/security";
/**
 * 内部缓存项数据类型定义。
 */
declare type _InternalCacheItem = {
    secureStorage: boolean;
    isRemoved: boolean;
    key: string;
};
/**
 * 提供了缓存相关的方法。
 *
 * @export
 * @abstract
 * @class Cache
 * @implements {dnvue.caching.ICache}
 */
export declare abstract class Cache implements dnvue.caching.ICache {
    /**
     * 设置或获取 Record 类型的对象实例，用于表示缓存数据清单。
     *
     * @protected
     * @type {Record<string, _InternalCacheItem>}
     * @memberof Cache
     */
    protected _manifest: Record<string, _InternalCacheItem>;
    /**
     * 获取一个字符串，用于表示缓存清单内部标识。
     *
     * @protected
     * @type {string}
     * @memberof Cache
     */
    protected readonly _MANIFEST_KEY: string;
    /**
     * 获取 SHA1AlgorithmProvider 类型的对象实例，用于表示哈希算法。
     *
     * @protected
     * @type {SHA1AlgorithmProvider}
     * @memberof Cache
     */
    protected readonly _sha1: SHA1AlgorithmProvider;
    /**
     * 获取 AESCryptoAlgorithm 类型的对象实例，用于表示加密解密的算法。
     *
     * @protected
     * @type {AESCryptoAlgorithm}
     * @memberof Cache
     */
    protected readonly _crypto: AESCryptoAlgorithm;
    /**
     * 获取缓存标识。
     *
     * @protected
     * @param {string} key 原始缓存标识。
     * @param {boolean} [secureStorage] 是否加密存储。
     * @returns {string}
     * @memberof Cache
     */
    protected _getCacheKey(key: string, secureStorage?: boolean): string;
    /**
     * 使用启用加密存储。
     *
     * @protected
     * @param {(boolean|undefined)} secureStorage 是否启用加密存储。
     * @returns {boolean}
     * @memberof Cache
     */
    protected useSecureStorage(secureStorage: boolean | undefined): boolean;
    abstract update(key: string, data?: any, secureStorage?: boolean | undefined): void;
    abstract get<T>(key: string): T | null | undefined;
    abstract remove(key: string): void;
    abstract clear(): void;
}
/**
 * 提供了基于本地存储、会话存储相关的缓存基本方法。
 *
 * @export
 * @abstract
 * @class StoreCache
 * @extends {Cache}
 * @implements {dnvue.caching.ICache}
 */
export declare abstract class StoreCache extends Cache implements dnvue.caching.ICache {
    /**
     * 获取 StoreAPI 类型的对象实例，用于表示访问本地、会话存储的方法。
     *
     * @protected
     * @type {StoreAPI}
     * @memberof StoreCache
     */
    protected readonly _storeApi: StoreAPI;
    /**
     * 用于初始化一个 StoreCache 类型的对象实例。
     *
     * @param {StoreAPI} api 访问本地、会话存储的方法。
     * @memberof StoreCache
     */
    constructor(api: StoreAPI);
    update(key: string, data?: any, secureStorage?: boolean | undefined): void;
    get<T>(key: string): T | null | undefined;
    remove(key: string): void;
    clear(): void;
}
/**
 * 提供了基于会话存储相关的缓存方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class SessionStoreCache
 * @extends {StoreCache}
 * @implements {dnvue.caching.ICache}
 * @sealed
 */
export declare class SessionStoreCache extends StoreCache implements dnvue.caching.ICache {
    /**
     * 用于初始化一个 SessionStoreCache 类型的对象实例。
     *
     * @memberof SessionStoreCache
     */
    constructor();
}
/**
 * 提供了基于本地存储相关的缓存方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class LocalStoreCache
 * @extends {StoreCache}
 * @implements {dnvue.caching.ICache}
 * @sealed
 */
export declare class LocalStoreCache extends StoreCache implements dnvue.caching.ICache {
    /**
     * 用于初始化一个 LocalStoreCache 类型的对象实例。
     *
     * @memberof LocalStoreCache
     */
    constructor();
}
export {};
