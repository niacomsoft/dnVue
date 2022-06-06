// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

declare namespace dnvue {
    namespace ui {
        /**
         * 定义了登录事件参数的数据类型。
         *
         * @interface SignInEventArgs
         */
        interface SignInEventArgs {
            /**
             * 设置或获取一个字符串，用于表示用户名。
             *
             * @type {string}
             * @memberof SignInEventArgs
             */
            userName: string;
            /**
             * 设置或获取一个字符串，用于表示登录密码。
             *
             * @type {string}
             * @memberof SignInEventArgs
             */
            password: string;
            /**
             * 设置或获取一个值，用于表示是否记住登录凭据。
             *
             * @type {boolean}
             * @memberof SignInEventArgs
             */
            rememberCredentials: boolean;
        }
    }
}