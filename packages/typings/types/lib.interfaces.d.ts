// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

declare namespace dnvue {
    /**
     * 定义了解释字符串的接口。
     *
     * @interface IStringResolver
     */
    interface IStringResolver {
        /**
         * 解释字符串。
         *
         * @param {string} s 原始字符串。
         * @returns {string}
         * @memberof IStringResolver
         */
        resolve(s: string): string;
    }
}