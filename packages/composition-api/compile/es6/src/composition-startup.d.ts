/// <reference types="@dnvue/typings" />
/**
 * 配置 dnVue 应用。
 *
 * @export
 * @param {dnvue.ParameterizedAction<dnvue.IAppContext>} [config] 配置方法。
 */
export declare function configureDnvue(config?: dnvue.ParameterizedAction<dnvue.IAppContext>): void;
/**
 * 使用应用上下文。
 *
 * @export
 * @returns {dnvue.IAppContext}
 */
export declare function useAppContext(): dnvue.IAppContext;
