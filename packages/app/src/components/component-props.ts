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
     * @type {Boolean}
     */
    isDisabled: {
        type: Boolean,
        default: false
    }
};