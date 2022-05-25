// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { Logger } from "./logging";
import { HostingEnvironment } from "./runtime";
/**
 * 提供了管理应用上下文相关的方法。
 *
 * @export
 * @class AppContext
 * @implements {dnvue.IAppContext}
 */
export class AppContext {
    /**
     * 用于初始化一个 AppContext 类型的对象实例。
     *
     * @memberof AppContext
     */
    constructor() {
        this._environment = new HostingEnvironment();
    }
    setHttpBaseUrl(baseUrl) {
        window.DEFAULT_HTTP_BASE_URL = Object.safeGet(baseUrl, "./");
        return this;
    }
    setSecureStorage(secureStorage) {
        window.DEFAULT_SECURE_STORAGE = Object.safeGet(secureStorage, true);
        return this;
    }
    setCryptoAlgorithmSecureKey(secureKey) {
        window.DEFAULT_CRYPTO_SECURE_KEY = secureKey;
        return this;
    }
    get environment() {
        return this._environment;
    }
    setEnvironment(env) {
        this._environment = env;
        return this;
    }
    setDefaultSafeNumberMinLength(minLength) {
        window.DEFAULT_SAFE_NUMBER_MINLENGTH = minLength;
        return this;
    }
    setDefaultResolver(resolver) {
        if (resolver)
            window.DEFAULT_STRING_RESOLVER = resolver;
        return this;
    }
    setDefaultLogger(logger) {
        if (logger)
            window.DEFAULT_LOGGER = logger;
        return this;
    }
    setDefaultLogWriter(writer) {
        if (writer)
            window.DEFAULT_LOGWRITER = writer;
        return this;
    }
    addLogWriters(...writers) {
        if (!window.DEFAULT_LOGGER)
            window.DEFAULT_LOGGER = new Logger();
        window.DEFAULT_LOGGER.addWriters(...writers);
        return this;
    }
    addLogWriterFactories(...factories) {
        if (!window.DEFAULT_LOGGER)
            window.DEFAULT_LOGGER = new Logger();
        window.DEFAULT_LOGGER.addFactories(...factories);
        return this;
    }
}
