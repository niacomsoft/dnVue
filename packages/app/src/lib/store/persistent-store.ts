// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { useCaching, useDefaultLogWriter } from "@dnvue/composition-api";
import { defineStore } from "pinia";

/**
 * 定义了组件状态类型。
 */
type ComponentState = {
    /**
     * 设置或获取一个值，用于表示全局边栏是否处于展开状态。
     *
     * @type {boolean}
     */
    globalSidebarExpanded?: boolean;
};

const KEYOF_PERSISTENT_COMPONENT_STATE = "persistent-component-state";

/**
 * 使用持久化的组件状态。
 */
export const usePersistentStateStore = defineStore(KEYOF_PERSISTENT_COMPONENT_STATE, {
    "state": (): ComponentState => {
        const persistentState = useCaching("local").get<ComponentState>(`dnvue.${KEYOF_PERSISTENT_COMPONENT_STATE}`);
        const defaultState: ComponentState = {
            globalSidebarExpanded: true
        };
        return Object.assign({}, defaultState, persistentState);
    },
    "actions": {
        /**
         * 切换全局边栏的展开、折叠状态。
         *
         * @param {boolean} [value=true] 是否展开。
         */
        toggleGlobalSidebarExpanded(value: boolean = true): void {
            useDefaultLogWriter().writeTrace({ message: `状态 globalSidebarExpanded 将变更为 "${value}"。`, contextData: { state: this, target: value } });
            this.globalSidebarExpanded = value;
            const key = `dnvue.${KEYOF_PERSISTENT_COMPONENT_STATE}`;
            const oldState = useCaching("local").get<ComponentState>(key);
            useCaching("local").update(`dnvue.${KEYOF_PERSISTENT_COMPONENT_STATE}`, Object.assign({}, oldState, { globalSidebarExpanded: value }), false);
        }
    }
});