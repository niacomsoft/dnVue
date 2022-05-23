// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { AppContext, SingletonManager, Startup } from "@dnvue/common";
/**
 * 配置 dnVue 应用。
 *
 * @export
 * @param {dnvue.ParameterizedAction<dnvue.IAppContext>} [config] 配置方法。
 */
export function configureDnvue(config) {
    Startup.configure(config);
}
/**
 * 使用应用上下文。
 *
 * @export
 * @returns {dnvue.IAppContext}
 */
export function useAppContext() {
    return SingletonManager.createOrGet("__DNVUE_APP_CONTEXT__", () => { return new AppContext(); });
}
