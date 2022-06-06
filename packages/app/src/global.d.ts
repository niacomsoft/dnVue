// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

export { };

declare global {
    interface ErrorConstructor {
        /**
         * 创建异常。
         *
         * @param {string} resourceName 资源名称。
         * @returns {Error}
         */
        create(resourceName: string): Error;
    }
}