// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { Logger } from "./logging";
/**
 * 提供了管理应用上下文相关的方法。
 *
 * @export
 * @class AppContext
 * @implements {dnvue.IAppContext}
 */
export class AppContext {
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
