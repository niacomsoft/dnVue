// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import Store2, { StoreAPI } from "store2";
import { AESCryptoAlgorithm, SHA1AlgorithmProvider } from "@dnvue/security";

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
     * 获取 Record 类型的对象实例，用于表示缓存数据清单。
     *
     * @protected
     * @type {Record<string, _InternalCacheItem>}
     * @memberof Cache
     */
    protected readonly _manifest: Record<string, _InternalCacheItem> = {};

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
    }

    update(key: string, data?: any, secureStorage?: boolean | undefined): void {
        secureStorage = this.useSecureStorage(secureStorage);
        if (!secureStorage)
            this._storeApi.set(key, data, true);
        else {
            key = this._getCacheKey(key, secureStorage);
            const cachableData: dnvue.caching.CacheItem = { key, data };
        }
    }
    get<T>(key: string): T | null | undefined {
        throw new Error("Method not implemented.");
    }
    remove(key: string): void {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
}