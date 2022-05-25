// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import Store2, { StoreAPI } from "store2";
import { AESCryptoAlgorithm, SHA1AlgorithmProvider } from "@dnvue/security";
import { sealed } from "@dnvue/common";

/**
 * 内部缓存项数据类型定义。
 */
type _InternalCacheItem = { secureStorage: boolean; isRemoved: boolean; key: string; };

/**
 * 提供了缓存相关的方法。
 *
 * @export
 * @abstract
 * @class Cache
 * @implements {dnvue.caching.ICache}
 */
export abstract class Cache implements dnvue.caching.ICache {
    /**
     * 设置或获取 Record 类型的对象实例，用于表示缓存数据清单。
     *
     * @protected
     * @type {Record<string, _InternalCacheItem>}
     * @memberof Cache
     */
    protected _manifest: Record<string, _InternalCacheItem> = {};

    /**
     * 获取一个字符串，用于表示缓存清单内部标识。
     *
     * @protected
     * @type {string}
     * @memberof Cache
     */
    protected readonly _MANIFEST_KEY: string = "__DNVUE_INTERNAL_CACHE_MANIFEST__";

    /**
     * 获取 SHA1AlgorithmProvider 类型的对象实例，用于表示哈希算法。
     *
     * @protected
     * @type {SHA1AlgorithmProvider}
     * @memberof Cache
     */
    protected readonly _sha1: SHA1AlgorithmProvider = new SHA1AlgorithmProvider();

    /**
     * 获取 AESCryptoAlgorithm 类型的对象实例，用于表示加密解密的算法。
     *
     * @protected
     * @type {AESCryptoAlgorithm}
     * @memberof Cache
     */
    protected readonly _crypto: AESCryptoAlgorithm = new AESCryptoAlgorithm("wIeCGFm2RvfnoyLlxrz7TjMS4pqi0b8O");

    /**
     * 获取缓存标识。
     *
     * @protected
     * @param {string} key 原始缓存标识。
     * @param {boolean} [secureStorage] 是否加密存储。
     * @returns {string}
     * @memberof Cache
     */
    protected _getCacheKey(key: string, secureStorage?: boolean): string {
        return this.useSecureStorage(secureStorage) ? this._sha1.computeHash(key) : key;
    }

    /**
     * 使用启用加密存储。
     *
     * @protected
     * @param {(boolean|undefined)} secureStorage 是否启用加密存储。
     * @returns {boolean}
     * @memberof Cache
     */
    protected useSecureStorage(secureStorage: boolean | undefined): boolean {
        return Object.safeGet<boolean>(secureStorage, window.DEFAULT_SECURE_STORAGE ?? true);
    }

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
export abstract class StoreCache extends Cache implements dnvue.caching.ICache {
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
    constructor(api: StoreAPI) {
        super();
        this._storeApi = api;
        this._manifest = Object.safeGet<Record<string, _InternalCacheItem>>(api.get(this._MANIFEST_KEY), {});
    }

    update(key: string, data?: any, secureStorage?: boolean | undefined): void {
        secureStorage = this.useSecureStorage(secureStorage);
        if (!secureStorage) {
            this._storeApi.set(key, data, true);
            key = this._getCacheKey(key, true);
            if (this._manifest[key]) {
                this._manifest[key].secureStorage = false;
                this._manifest[key].isRemoved = true;
                this._storeApi.set(this._MANIFEST_KEY, this._manifest, true);
            }
        }
        else {
            this._storeApi.remove(key);
            key = this._getCacheKey(key, true);
            const cacheableData: dnvue.caching.CacheItem = { key, data };
            const cacheableStr: string = this._crypto.encrypt(JSON.stringify(cacheableData));
            this._storeApi.set(key, cacheableStr);
            this._manifest[key] = { secureStorage: true, isRemoved: false, key };
            this._storeApi.set(this._MANIFEST_KEY, this._manifest, true);
        }
    }
    get<T>(key: string): T | null | undefined {
        if (this._storeApi.has(key)) return this._storeApi.get(key) as T;
        else {
            key = this._getCacheKey(key, true);
            if (!this._storeApi.has(key)) return undefined;
            else {
                const cacheableStr: string = this._storeApi.get(key) as string;
                if (String.isNullOrWhitespace(cacheableStr)) return undefined;
                else {
                    const plainText: string = this._crypto.decrypt(cacheableStr);
                    return (JSON.parse(plainText) as dnvue.caching.CacheItem).data as T;
                }
            }
        }
    }
    remove(key: string): void {
        if (this._storeApi.has(key)) this._storeApi.remove(key);
        key = this._getCacheKey(key, true);
        if (this._storeApi.has(key)) {
            this._storeApi.remove(key);
            if (this._manifest[key]) {
                this._manifest[key].isRemoved = true;
                this._storeApi.set(this._MANIFEST_KEY, this._manifest, true);
            }
        }
    }
    clear(): void {
        this._storeApi.clear();
    }
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
@sealed
export class SessionStoreCache extends StoreCache implements dnvue.caching.ICache {
    /**
     * 用于初始化一个 SessionStoreCache 类型的对象实例。
     * 
     * @memberof SessionStoreCache
     */
    constructor() {
        super(Store2.session);
    }
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
@sealed
export class LocalStoreCache extends StoreCache implements dnvue.caching.ICache {
    /**
     * 用于初始化一个 LocalStoreCache 类型的对象实例。
     * 
     * @memberof LocalStoreCache
     */
    constructor() {
        super(Store2.local);
    }
}