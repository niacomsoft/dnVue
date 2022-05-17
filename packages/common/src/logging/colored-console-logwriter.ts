// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. See detailed data: LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { LogWriter } from "./logwriter";
import { sealed } from "../decorators";
import { SingletonManager } from "../singleton-manager";

/**
 * 提供了带有颜色的 Console  输出运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ColoredConsoleLogWriter
 * @extends {LogWriter}
 * @implements {dnvue.ILogWriter}
 * @sealed
 */
@sealed
export class ColoredConsoleLogWriter extends LogWriter implements dnvue.ILogWriter {
    private readonly _styleOptions: dnvue.ColoredConsoleStyleOptions;

    /**
     * 默认的样式。
     *
     * @static
     * @type {dnvue.ColoredConsoleStyleOptions}
     * @memberof ColoredConsoleLogWriter
     */
    public static readonly DEFAULT_STYLE: dnvue.ColoredConsoleStyleOptions = {
        debug: "font-style: italic; color: #616161; font-weight: bold",
        trace: "color: #616161; font-weight: bold",
        information: "color: #0D47A1; font-weight: bold",
        warning: "color: #FF6F00; font-weight: bold",
        error: "color: #B71C1C; font-weight: bold"
    };

    /**
     * 用于初始化一个 ColoredConsoleLogWriter 类型的对象实例。
     * 
     * @param {dnvue.ColoredConsoleStyleOptions} [styleOptions]
     * @memberof ColoredConsoleLogWriter
     */
    constructor(styleOptions?: dnvue.ColoredConsoleStyleOptions) {
        super();
        this._styleOptions = Object.assign({}, ColoredConsoleLogWriter.DEFAULT_STYLE, styleOptions);
    }

    writeDebug(debugEntry?: dnvue.LogEntry | undefined): void {
        console.groupCollapsed("DNVUE DEBUG");
        console.debug(`%c${debugEntry?.message}`, this._styleOptions.debug);
        console.debug(`%cSee detailed data: %o`, this._styleOptions.debug, { contextData: debugEntry?.contextData, contextError: debugEntry?.error, time: new Date() });
        console.groupEnd();
    }
    writeTrace(traceEntry?: dnvue.LogEntry | undefined): void {
        console.groupCollapsed("DNVUE TRACE");
        console.trace(`%c${traceEntry?.message}`, this._styleOptions.trace);
        console.trace(`%cSee detailed data: %o`, this._styleOptions.trace, { contextData: traceEntry?.contextData, contextError: traceEntry?.error, time: new Date() });
        console.groupEnd();
    }
    writeInformation(infoEntry?: dnvue.LogEntry | undefined): void {
        console.group("DNVUE INFORMATION");
        console.info(`%c${infoEntry?.message}`, this._styleOptions.information);
        console.info(`%cSee detailed data: %o`, this._styleOptions.information, { contextData: infoEntry?.contextData, contextError: infoEntry?.error, time: new Date() });
        console.groupEnd();
    }
    writeWarning(warnEntry?: dnvue.LogEntry | undefined): void {
        console.group("DNVUE WARNING");
        console.warn(`%c${warnEntry?.message}`, this._styleOptions.warning);
        console.warn(`%cSee detailed data: %o`, this._styleOptions.warning, { contextData: warnEntry?.contextData, contextError: warnEntry?.error, time: new Date() });
        console.groupEnd();
    }
    writeError(errorEntry?: dnvue.LogEntry | undefined): void {
        console.group("DNVUE ERROR");
        console.error(`%c${errorEntry?.message}%o`, this._styleOptions.error);
        console.error(`%cSee detailed data: %o`, this._styleOptions.error, { contextData: errorEntry?.contextData, contextError: errorEntry?.error, time: new Date() });
        console.groupEnd();
    }
}

/**
 * 提供了创建 ColoredConsoleLogWriter 类型的对象实例相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ColoredConsoleLogWriterFactory
 * @implements {dnvue.ILogWriterFactory}
 * @sealed
 */
@sealed
export class ColoredConsoleLogWriterFactory implements dnvue.ILogWriterFactory {
    create(): dnvue.ILogWriter {
        return SingletonManager.createOrGet<ColoredConsoleLogWriter>("__DNVUE_COLORED_CONSOLE_LOGWRITER__", () => {
            return new ColoredConsoleLogWriter();
        });
    }

}