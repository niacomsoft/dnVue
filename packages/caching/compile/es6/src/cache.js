// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { AESCryptoAlgorithm, SHA1AlgorithmProvider } from "@dnvue/security";
/**
 * 提供了缓存相关的方法。
 *
 * @export
 * @abstract
 * @class Cache
 * @implements {dnvue.caching.ICache}
 */
export class Cache {
    constructor() {
        /**
         * 获取 Record 类型的对象实例，用于表示缓存数据清单。
         *
         * @protected
         * @type {Record<string, _InternalCacheItem>}
         * @memberof Cache
         */
        this._manifest = {};
        /**
         * 获取一个字符串，用于表示缓存清单内部标识。
         *
         * @protected
         * @type {string}
         * @memberof Cache
         */
        this._MANIFEST_KEY = "__DNVUE_INTERNAL_CACHE_MANIFEST__";
        /**
         * 获取 SHA1AlgorithmProvider 类型的对象实例，用于表示哈希算法。
         *
         * @protected
         * @type {SHA1AlgorithmProvider}
         * @memberof Cache
         */
        this._sha1 = new SHA1AlgorithmProvider();
        /**
         * 获取 AESCryptoAlgorithm 类型的对象实例，用于表示加密解密的算法。
         *
         * @protected
         * @type {AESCryptoAlgorithm}
         * @memberof Cache
         */
        this._crypto = new AESCryptoAlgorithm("wIeCGFm2RvfnoyLlxrz7TjMS4pqi0b8O");
    }
    /**
     * 获取缓存标识。
     *
     * @protected
     * @param {string} key 原始缓存标识。
     * @param {boolean} [secureStorage] 是否加密存储。
     * @returns {string}
     * @memberof Cache
     */
    _getCacheKey(key, secureStorage) {
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
    useSecureStorage(secureStorage) {
        var _a;
        return Object.safeGet(secureStorage, (_a = window.DEFAULT_SECURE_STORAGE) !== null && _a !== void 0 ? _a : true);
    }
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
export class StoreCache extends Cache {
    /**
     * 用于初始化一个 StoreCache 类型的对象实例。
     *
     * @param {StoreAPI} api 访问本地、会话存储的方法。
     * @memberof StoreCache
     */
    constructor(api) {
        super();
        this._storeApi = api;
    }
    update(key, data, secureStorage) {
        secureStorage = this.useSecureStorage(secureStorage);
        if (!secureStorage)
            this._storeApi.set(key, data, true);
        else {
            key = this._getCacheKey(key, secureStorage);
            const cachableData = { key, data };
        }
    }
    get(key) {
        throw new Error("Method not implemented.");
    }
    remove(key) {
        throw new Error("Method not implemented.");
    }
    clear() {
        throw new Error("Method not implemented.");
    }
}
