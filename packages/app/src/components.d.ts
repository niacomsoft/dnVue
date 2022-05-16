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