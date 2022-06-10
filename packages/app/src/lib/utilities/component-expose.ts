// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { ComponentInternalInstance } from "vue";

/**
 * 获取组件开放 API 接口。
 *
 * @export
 * @template T 开放接口类型。
 * @param {(ComponentInternalInstance | null)} component 组件实例。
 * @param {string} refName 指定组件引用名称。
 * @returns {T}
 */
export function getComponentOpenApi<T>(component: ComponentInternalInstance | null, refName: string): T {
    return (component?.proxy?.$refs[refName] as any) as T;
}