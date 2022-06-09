// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { useDefaultLogWriter } from "@dnvue/composition-api";
import { defineStore } from "pinia";

const logger = useDefaultLogWriter();

/**
 * 定义了组件状态类型。
 */
type ComponentState = {
    /**
     * 设置或获取一个值，用于表示是否显示全局应用清单抽屉组件。
     *
     * @type {boolean}
     */
    showAppManifestDrawer: boolean;
    /**
     * 设置或获取一个值，用于表示是否正在处理某事务。
     *
     * @type {boolean}
     */
    transactionIsProcessing: boolean;
};

/**
 * 启用临时的组件状态。
 */
export const useTemporaryStateStore = defineStore("non-persistent-component-state", {
    state: (): ComponentState => ({
        showAppManifestDrawer: false,
        transactionIsProcessing: false
    }),
    actions: {
        /**
         * 切换应用清单抽屉组件。
         *
         * @param {boolean} [visible=true] 是否显示。
         */
        toggleAppManifestDrawerVisible(visible: boolean = true): void {
            logger.writeTrace({ message: `"component-state-store" 尝试切换状态 "showAppManifestDrawer" 到 "${visible}"。` });
            this.showAppManifestDrawer = visible;
        },
        /**
         * 切换事务处理中的状态。
         *
         * @param {boolean} [status=true] 状态值。
         */
        toggleTransactionProcessingState(status: boolean = true): void {
            logger.writeWarning({ message: `"In-Processing" 正在切换到 "${status}"。` });
            this.transactionIsProcessing = status;
        }
    }
});