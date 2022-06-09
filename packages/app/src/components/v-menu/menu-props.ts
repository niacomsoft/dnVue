// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/// <reference path="../component-types.d.ts" />

import { PropType } from "vue";
import { DnvueComponentProps } from "../component-props";
import { DnvueMenuItemOptions } from "../component-types";

/**
 * 菜单条目公共属性。
 */
const MenuItemCommonProps = Object.assign({}, DnvueComponentProps, {
    /**
     * 获取 DnvueMenuItemOptions 类型的对象实例，用于表示菜单条目配置选项。
     * 
     * @type {DnvueMenuItemOptions}
     */
    option: {
        type: Object as PropType<DnvueMenuItemOptions>,
        required: true
    }
});

export { MenuItemCommonProps };