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
export class AppContext implements dnvue.IAppContext {
    setDefaultLogger(logger?: dnvue.ILogger | undefined): dnvue.IAppContext {
        if (logger)
            window.DEFAULT_LOGGER = logger;

        return this;
    }
    setDefaultLogWriter(writer?: dnvue.ILogWriter | undefined): dnvue.IAppContext {
        if (writer)
            window.DEFAULT_LOGWRITER = writer;

        return this;
    }
    addLogWriters(...writers: dnvue.ILogWriter[]): dnvue.IAppContext {
        if (!window.DEFAULT_LOGGER)
            window.DEFAULT_LOGGER = new Logger();

        window.DEFAULT_LOGGER.addWriters(...writers);

        return this;
    }
    addLogWriterFactories(...factories: dnvue.ILogWriterFactory[]): dnvue.IAppContext {
        if (!window.DEFAULT_LOGGER)
            window.DEFAULT_LOGGER = new Logger();

        window.DEFAULT_LOGGER.addFactories(...factories);

        return this;
    }

}