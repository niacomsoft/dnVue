// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { LogWriter } from "./logwriter";
import { sealed } from "../decorators";

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
        throw new Error("Method not implemented.");
    }
    writeTrace(traceEntry?: dnvue.LogEntry | undefined): void {
        throw new Error("Method not implemented.");
    }
    writeInformation(infoEntry?: dnvue.LogEntry | undefined): void {
        throw new Error("Method not implemented.");
    }
    writeWarning(warnEntry?: dnvue.LogEntry | undefined): void {
        throw new Error("Method not implemented.");
    }
    writeError(errorEntry?: dnvue.LogEntry | undefined): void {
        throw new Error("Method not implemented.");
    }

}