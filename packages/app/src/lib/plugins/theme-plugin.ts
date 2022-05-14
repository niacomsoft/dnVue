// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/**
 * 启用 @mdi/font 图标字体库。
 *
 * @export
 */
export function useMaterialDesignIcon(): void {
    import("@mdi/font/css/materialdesignicons.min.css");
}

/**
 * 启用 animate.css 动画样式表。
 *
 * @export
 */
export function useAnimateCss(): void {
    import("animate.css/animate.min.css");
}

/**
 * 启用 material-colors 颜色样式表。
 *
 * @export
 */
export function useMaterialColors(): void {
    import("material-colors/dist/colors.var.css");
}