// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

declare namespace dnvue {
    /**
     * Vite 应用程序环境变量定义。
     *
     * @interface ViteApplicationEnvironmentVariables
     */
    interface ViteApplicationEnvironmentVariables {
        /**
         * 获取一个字符串，用于表示默认使用的本地化文化区域名称。
         *
         * @type {string}
         * @memberof ViteApplicationEnvironmentVariables
         * @readonly
         */
        readonly DNVUE_LOCALIZATION_CULTURE_NAME?: string;

        /**
         * 获取一个字符串，用于表示企业名称。
         *
         * @type {string}
         * @memberof ViteApplicationEnvironmentVariables
         * @readonly
         */
        readonly DNVUE_CORPORATION_NAME?: string;

        /**
         * 获取一个字符串，用于表示应用名称。
         *
         * @type {string}
         * @memberof ViteApplicationEnvironmentVariables
         * @readonly
         */
        readonly DNVUE_APPLICATION_NAME?: string;

        /**
         * 获取一个字符串，用于表示 API 基础 URL 地址。
         *
         * @type {string}
         * @memberof ViteApplicationEnvironmentVariables
         * @readonly
         */
        readonly DNVUE_API_BASEURL?: string;

        /**
         * 获取一个字符串，用于表示 ICP 备案编码。
         *
         * @type {string}
         * @memberof ViteApplicationEnvironmentVariables
         * @readonly
         */
        readonly DNVUE_ICP_NUMBER?: string;

        /**
         * 获取一个字符串，用于表示企业官网 URL 地址。
         *
         * @type {string}
         * @memberof ViteApplicationEnvironmentVariables
         * @readonly
         */
        readonly DNVUE_OFFICIALSITE_URL?: string;
    }

    /**
     * Vue-Router 路由元数据扩展类型。
     *
     * @interface VueRouterMetadataExtensions
     */
    interface VueRouterMetadataExtensions {
        /**
         * 获取一个值，用于表示路由是否允许匿名访问。
         *
         * @type {boolean}
         * @memberof VueRouterMetadataExtensions
         * @readonly
         */
        readonly allowAnonymous?: boolean;

        /**
         * 获取一个字符串，用于表示路由标题。
         *
         * @type {string}
         * @memberof VueRouterMetadataExtensions
         * @readonly
         */
        readonly title?: string;
    }
}