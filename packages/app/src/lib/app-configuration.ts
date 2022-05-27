// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

/**
 * 定义了外部应用配置信息。
 */
type ExternalApp = {
    /**
     * 获取一个字符串，用于表示应用名称对应的本地化资源名称。
     *
     * @type {string}
     */
    readonly name: string;

    /**
     * 获取一个字符串，用于表示应用链接 URL 地址。
     *
     * @type {string}
     */
    readonly url: string;

    /**
     * 获取一个字符串，用于表示应用链接目标。
     *
     * @type {("_blank" | "_self")}
     */
    readonly target?: "_blank" | "_self";

    /**
     * 获取一个字符串，用于表示应用图标 BASE-64 格式的 URL 地址。
     *
     * @type {string}
     */
    readonly iconDataURL: string;
};

/**
 * 获取外部应用清单。
 *
 * @export
 * @returns {ExternalApp[]}
 */
export function getExternalAppManifest(): ExternalApp[] {
    return [
        {
            name: "CONTROL_PANEL",
            url: "./index.html",
            iconDataURL: "data:image/png;base64,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"
        }
    ];
}