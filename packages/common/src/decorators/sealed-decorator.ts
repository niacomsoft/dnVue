// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/**
 * 提供了用于修饰密闭类相关的方法。
 *
 * @export
 * @param {Function} constructor 用于修改的构造方法。
 */
export function sealed(constructor: Function): void {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}