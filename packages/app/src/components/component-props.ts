// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { defineProps } from "vue";

/**
 * dnVue 组件通用属性定义。
 */
export const DnvueComponentProps = {
    /**
     * 设置或获取一个值，用于表示组件是否禁用。
     * 
     * @type {boolean}
     */
    isDisabled: {
        type: Boolean,
        default: false
    },
    /**
     * 设置或获取一个字符串，用于表示组件 Tooltip 提示。
     * 
     * @type {string}
     */
    tooltip: {
        type: String,
        default: null
    },
    /**
     * 设置或获取一个值，用于表示是否处理中。
     * 
     * @type {boolean}
     */
    inProcessing: {
        type: Boolean,
        default: false
    }
};