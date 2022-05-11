// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { App, createApp } from 'vue';
import AppEntry from './App.vue';
import { useMaterialDesignIcon } from "../lib";

/**
 * 配置 dnVue 应用程序。
 */
function configure(): void {
    const app: App = createApp(AppEntry);

    useMaterialDesignIcon();

    app.mount('#app');
}

configure();