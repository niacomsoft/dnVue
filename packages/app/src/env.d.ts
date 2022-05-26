/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

/**
 * 私有环境变量类型定义。
 *
 * @interface PrivateImportMetaEnv
 */
interface PrivateImportMetaEnv {
  /**
   * 设置或获取一个字符串，用于表示接口基础 URL 地址。
   *
   * @type {string}
   * @memberof PrivateImportMetaEnv
   */
  PRIVATE_API_BASEURL?: string;

  /**
   * 设置或获取一个字符串，用于表示开发模式下代理 URL 地址。
   *
   * @type {string}
   * @memberof PrivateImportMetaEnv
   */
  PRIVATE_API_BASEURL_FOR_PROXY?:string;
}

/**
 * 为 Vite 环境变量类型提供的扩展方法。
 *
 * @interface ImportMetaEnv
 * @extends {PrivateImportMetaEnv}
 */
interface ImportMetaEnv extends PrivateImportMetaEnv {
  /**
   * 设置或获取一个字符串，用于表示默认的文化区域名称。
   *
   * @type {string}
   * @memberof ImportMetaEnv
   */
  DNVUE_DEFAULT_CULTURE_NAME?: string;

  /**
   * 设置或获取一个字符串，用于表示加密算法密钥。
   *
   * @type {string}
   * @memberof ImportMetaEnv
   */
  DNVUE_CRYPTOALGORITHM_SECUREKEY: string;
}

/**
 * 为 Vite ImportMeta 类型提供的扩展方法。
 *
 * @interface ImportMeta
 */
interface ImportMeta {
  /**
   * 获取一个字符串，用于表示环境变量。
   *
   * @type {ImportMetaEnv}
   * @memberof ImportMeta
   */
  readonly env: ImportMetaEnv;
}