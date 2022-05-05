// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { AppContext } from "./appcontext";
import { SingletonManager } from "./singleton-manager";
/**
 * 提供了配置应用程序相关的方法。
 *
 * @export
 * @class Startup
 */
export class Startup {
    /**
     * 配置应用程序。
     *
     * @static
     * @param {dnvue.ParameterizedAction<dnvue.IAppContext>} config 应用程序配置方法。
     * @memberof Startup
     */
    static configure(config) {
        const appContext = SingletonManager.createOrGet("__DNVUE_APP_CONTEXT__", () => new AppContext());
        if (config)
            config(appContext);
    }
}
