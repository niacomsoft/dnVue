// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Store2 from "store2";
import { AESCryptoAlgorithm, SHA1AlgorithmProvider } from "@dnvue/security";
import { sealed } from "@dnvue/common";
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
         * 设置或获取 Record 类型的对象实例，用于表示缓存数据清单。
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
        this._manifest = Object.safeGet(api.get(this._MANIFEST_KEY), {});
    }
    update(key, data, secureStorage) {
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
            const cacheableData = { key, data };
            const cacheableStr = this._crypto.encrypt(JSON.stringify(cacheableData));
            this._storeApi.set(key, cacheableStr);
            this._manifest[key] = { secureStorage: true, isRemoved: false, key };
            this._storeApi.set(this._MANIFEST_KEY, this._manifest, true);
        }
    }
    get(key) {
        if (this._storeApi.has(key))
            return this._storeApi.get(key);
        else {
            key = this._getCacheKey(key, true);
            if (!this._storeApi.has(key))
                return undefined;
            else {
                const cacheableStr = this._storeApi.get(key);
                if (String.isNullOrWhitespace(cacheableStr))
                    return undefined;
                else {
                    const plainText = this._crypto.decrypt(cacheableStr);
                    return JSON.parse(plainText).data;
                }
            }
        }
    }
    remove(key) {
        if (this._storeApi.has(key))
            this._storeApi.remove(key);
        key = this._getCacheKey(key, true);
        if (this._storeApi.has(key)) {
            this._storeApi.remove(key);
            if (this._manifest[key]) {
                this._manifest[key].isRemoved = true;
                this._storeApi.set(this._MANIFEST_KEY, this._manifest, true);
            }
        }
    }
    clear() {
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
let SessionStoreCache = class SessionStoreCache extends StoreCache {
    /**
     * 用于初始化一个 SessionStoreCache 类型的对象实例。
     *
     * @memberof SessionStoreCache
     */
    constructor() {
        super(Store2.session);
    }
};
SessionStoreCache = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], SessionStoreCache);
export { SessionStoreCache };
/**
 * 提供了基于本地存储相关的缓存方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class LocalStoreCache
 * @extends {StoreCache}
 * @implements {dnvue.caching.ICache}
 * @sealed
 */
let LocalStoreCache = class LocalStoreCache extends StoreCache {
    /**
     * 用于初始化一个 LocalStoreCache 类型的对象实例。
     *
     * @memberof LocalStoreCache
     */
    constructor() {
        super(Store2.local);
    }
};
LocalStoreCache = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], LocalStoreCache);
export { LocalStoreCache };
