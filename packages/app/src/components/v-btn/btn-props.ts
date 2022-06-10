// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { PropType } from "vue";
import { DnvueComponentProps } from "../component-props";

/**
 * 提供了按钮相关的通用属性。
 */
export const BtnCommonProps = Object.assign({}, DnvueComponentProps, {
    /**
     * 设置或获取一个字符串，用于表示按钮文本资源名称。
     * 
     * @type {string}
     */
    text: {
        type: String,
        default: "BUTTON"
    },
    /**
     * 设置或获取一个字符串，用于表示 @mdi/font 图标名称。
     * 
     * @type {string}
     */
    iconName: {
        type: String,
        default: ""
    },
    /**
     * 设置或获取一个字符串，用于表示类型。
     * 
     * @type {string}
     */
    elType: {
        type: String as PropType<"primary" | "success" | "warning" | "danger" | "info">,
        default: "primary"
    },
    /**
     * 设置或获取一个值，用于表示是否为朴素按钮。
     * 
     * @type {string}
     */
    elPlain: {
        type: Boolean,
        default: false
    },
    /**
     * 设置或获取一个字符串，用于表示按钮模式。
     * 
     * @type {string}
     */
    mode: {
        type: String as PropType<"button" | "text" | "link">,
        default: "button"
    },
    /**
     * 设置或获取一个字符串，用于表示按钮边框。
     * 
     * @type {string}
     */
    border: {
        type: String as PropType<"normal" | "round" | "circle">,
        default: "normal"
    },
    /**
     * 设置或获取一个值，用于表示是否为块状元素。
     * 
     * @type {boolean}
     */
    block: {
        type: Boolean,
        default: false
    }
});