// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { App, createApp } from 'vue';
import AppEntry from './App.vue';
import {
    useMaterialDesignIcon,
    useAnimateCss,
    useMaterialColors,
    useElementPlus,
    usePrivateComponents,
    configureApplication,
    useLocalizations,
    usePinia
} from "../lib";
import { configureRoute } from "./router";

/**
 * 配置 dnVue 应用程序。
 */
function configure(): void {
    const app: App = createApp(AppEntry);

    useMaterialDesignIcon();
    useAnimateCss();
    useMaterialColors();

    useElementPlus(app);
    usePrivateComponents(app);

    configureApplication(app);

    useLocalizations(app);

    usePinia(app);

    configureRoute(app);

    app.mount('#app');
}

configure();