// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/// <reference path="../../../components/component-types.d.ts" />

import { DnvueMenuItemOptions } from "../../../components/component-types";

/**
 * 配置全局菜单项。
 *
 * @export
 * @returns {DnvueMenuItemOptions[]}
 */
export function configureGlobalMenuItems(): DnvueMenuItemOptions[] {
    return [{
        id: 1,
        label: "HOME_PAGE",
        enabled: true,
        visible: true,
        iconName: "mdiHome",
        children: [{
            id: "1.1",
            label: "DATA_TABLE",
            visible: true,
            enabled: true,
            iconName: "mdiTableLarge",
            targetRoute: {
                path: "/home/dashboard"
            }
        }]
    }];
}