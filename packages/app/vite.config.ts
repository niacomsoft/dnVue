// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default (({ mode }) => {
  const { resolve } = require("path");

  /**
   * 环境变量根目录。
   * 
   * @type {string}
   */
  const envDir = resolve(__dirname, "settings");

  /**
   * 环境变量前缀配置。
   * 
   * @type {string[]}
   */
  const envPrefixes: string[] = ["VITE_", "DNVUE_", "PRIVATE_", "NODE_"];

  // 环境变量清单。
  const environmentVars = loadEnv(mode, envDir, envPrefixes);

  /**
   * 基础 URL 路径。
   * 
   * @type {string}
   */
  const basePath: string = "./";

  /**
   * 开发服务器端口号。
   * 
   * @type {number}
   */
  const devServerPortNumber: number = parseInt(environmentVars.DNVUE_DEVELOPMENT_SERVER_PORT_NUMBER);

  /**
   * 构建输出路径。
   * 
   * @type {string}
   */
  const buildDir: string = resolve(__dirname, `dist/${process.env.NODE_ENV}/${mode}`);

  /**
   * 多页模式应用构建配置。
   */
  const multiplePageModeBuildOptions: Record<string, string> = {
    index: resolve(__dirname, "index.html")
  };

  return defineConfig({
    plugins: [vue()],
    base: basePath,
    envDir,
    envPrefix: envPrefixes,
    server: {
      host: true,
      port: devServerPortNumber,
      strictPort: true,
      open: true,
      proxy: {
        "/development-mode/api": {
          target: environmentVars["PRIVATE_API_BASEURL_FOR_PROXY"],
          changeOrigin: true
        }
      }
    },
    build: {
      outDir: buildDir,
      rollupOptions: {
        input: multiplePageModeBuildOptions
      },
      sourcemap: false,
      manifest: true
    },
    define: {
      "process.env": {
        "NODE_ENV": environmentVars.NODE_ENV
      }
    }
  });

});
