// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { Startup, ColoredConsoleLogWriterFactory, HostingEnvironment } from "@dnvue/common";
import { App } from "vue";

/**
 * 配置应用程序。
 *
 * @export
 * @param {App} app Vue 应用程序对象实例。
 */
export function configureApplication(app: App): void {
    Startup.configure(ctx => {
        ctx.setDefaultLogWriter(new ColoredConsoleLogWriterFactory().create())
            .setDefaultLogger()
            .setEnvironment(new HostingEnvironment(import.meta.env.NODE_ENV));
    });
}