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
            iconDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAD4UlEQVR4nO3cz2vbdRzH8df3myqptINQkuqwbZqK4nWuW3pwigcVDzsInnXMYjeRyA69DMbYZTBhcyCWotM/oHiwF9dN8ceg6xZ3dgdtk/aSfLMSaCoJtM3XUy5rWBl5f/Ky374exxben28/z/LNt980X++FzMX3Pa/5NYBBSDeVw9A/6x0eu1CCNp+l5EObz/S8zz6Cg04ByBSATAHIFIBMAcgUgEwByBSATAHIFIBMAcgUgEwByBSATAHIFIBMAcgUgKzH+QIxH5nRAcTjz3Q0p9HYwvLKOrZ3mnuulx5JmKxXKFb3XK9TTgNkx0cwc/0DpFL9JvOCoIap3Bzu5Yttv3/stSF8eeUkksk+k/UqlU3kpueRf7BmMq8d7/DYhdDF4J6Yj/ydc2ab31IOahh//Sp2HvvN7In5+OPWGbPNbwkqmzjx9syu9aw4ew3IjA6Ybz4ADKb6kUkP7Pp6eiRhvvkAkEr2IT2cMJ/b4ixAp+fgJ+nt3T272+tZ0VUQmQKQKQCZApApAJkCkCkAWWQClIOau9mVTWezIxOg8uhf/Pr7P+Zzf/ntb1QcBnB+N7SbctM/Yup0FseODiMe7+xHazS2cS+/itnvloyOrr1IBajXt3Dtqzvsw3gqkTkF7VcKQKYAZApAFqkXYQB4751XcXw8bXIVtHS/gJ9u/WV0ZO1FKsDF8+9i8tSE2byPP8pi9sYiLl1eMJv5uMicgg4diuP0h1nzuZOnJtDfHzef2xKZACNDCfi+Zz7X9739+Z5wt3me/eZ3Y3ZkAuxXCkCmAGTOAoShk3+4cz6725wFKK5V0Wzab1SzGaKwWjWfy+IswMZGA998f9d87uyNRdRqDfO5LE7/Er50eQH3/yxi4vioya2BxaUVLPz80Ojo/h+c34q4efshbt6O1qZZ0lUQmQKQKQCZApA5fRF+rvdZTE1mMX5kyOQqKP9gDTPf3kW9vmV0hHxOA1z/4iTePDFmNu/okRfxystJfPLZD2Yz2ZydglLJPtPNb3nrjZecfBaMxWkAVwYVQKwoAJkCkCkAmQKQKQCZApA5C9BouLtd0O5WRLfXs+IsQKFYdfLZqnJQa/ue8PLKOgIHH9QrlTewXFg3n9viLMD2ThO56XkEhhGCyiY+n55v++ye7Z0mpnJzpp+WLAc1nMnNOXtWEODwgU0tsZiP9HCi40e+1OtbKKxW99yMWMxHJj1gst5yYd3p5gNdCCBPpqsgMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMgUgUwAyBSBTADIFIFMAMh9AmX0QB1jJD0P/LIAS+0gOoFIY+p/+B7p4EWgEeGxIAAAAAElFTkSuQmCC"
        }
    ];
}