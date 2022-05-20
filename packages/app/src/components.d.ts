// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/// <reference types="@dnvue/typings" />

/**
 * 基础对齐模式。
 */
declare type FlexibleContainerBaseAlignment = ("flex-start" | "flex-end" | "center");

/**
 * 横向对齐模式。
 */
declare type FlexibleContainerJustifyContentAlignment = ("space-between" | "space-around") | FlexibleContainerBaseAlignment;

/**
 * 纵向对齐模式。
 */
declare type FlexibleContainerAlignItemsAlignment = FlexibleContainerBaseAlignment;

/**
 * 应用连接项配置。
 */
declare type LinkedApplicationItemOption = {
    /**
     * 获取一个字符串，用于表示应用名称对应的资源名称。
     *
     * @type {string}
     * @readonly
     */
    readonly name: string;

    /**
     * 获取一个字符串，用于表示应用图标 BASE64 格式的 URL。
     *
     * @type {string}
     * @readonly
     */
    readonly iconDataURL?: string;

    /**
     * 获取一个值，用于表示是否为外部链接。
     *
     * @type {boolean}
     */
    readonly externalLink?: boolean;

    /**
     * 获取一个字符串，用于表示应用 URL 地址。
     *
     * @type {string}
     */
    readonly url: string;
};