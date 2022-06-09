// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/// <reference path="./lib.typings.d.ts" />
/// <reference path="./lib.functions.d.ts" />

declare namespace dnvue {
    namespace ui {
        /**
         * 定义了菜单条目配置选项。
         *
         * @interface MenuItemOptions
         * @extends {UniqueId<string | number>}
         * @extends {EnabledState}
         * @extends {VisibleState}
         */
        interface MenuItemOptions extends UniqueId<string | number>, EnabledState, VisibleState {
            /**
             * 获取一个字符串，用于表示图标名称（@mdi/font）。
             *
             * @type {string}
             * @memberof MenuItemOptions
             */
            readonly iconName?: string;

            /**
             * 获取一个字符串，用于表示菜单条目文本标签对应的资源名称。
             *
             * @type {string}
             * @memberof MenuItemOptions
             */
            readonly label: string;

            /**
             * 获取 MenuItemOptions 类型的对象实例数组，用于表示子菜单。
             *
             * @type {MenuItemOptions[]}
             * @memberof MenuItemOptions
             */
            readonly children?: MenuItemOptions[];
        }
    }
}