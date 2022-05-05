// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { Startup } from "@dnvue/common";
/**
 * 配置 dnVue 应用。
 *
 * @export
 * @param {dnvue.ParameterizedAction<dnvue.IAppContext>} [config] 配置方法。
 */
export function configureDnvue(config) {
    Startup.configure(config);
}
