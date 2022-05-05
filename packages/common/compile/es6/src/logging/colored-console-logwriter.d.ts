/// <reference types="@dnvue/typings" />
import { LogWriter } from "./logwriter";
/**
 * 提供了带有颜色的 Console  输出运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ColoredConsoleLogWriter
 * @extends {LogWriter}
 * @implements {dnvue.ILogWriter}
 * @sealed
 */
export declare class ColoredConsoleLogWriter extends LogWriter implements dnvue.ILogWriter {
    private readonly _styleOptions;
    /**
     * 默认的样式。
     *
     * @static
     * @type {dnvue.ColoredConsoleStyleOptions}
     * @memberof ColoredConsoleLogWriter
     */
    static readonly DEFAULT_STYLE: dnvue.ColoredConsoleStyleOptions;
    /**
     * 用于初始化一个 ColoredConsoleLogWriter 类型的对象实例。
     *
     * @param {dnvue.ColoredConsoleStyleOptions} [styleOptions]
     * @memberof ColoredConsoleLogWriter
     */
    constructor(styleOptions?: dnvue.ColoredConsoleStyleOptions);
    writeDebug(debugEntry?: dnvue.LogEntry | undefined): void;
    writeTrace(traceEntry?: dnvue.LogEntry | undefined): void;
    writeInformation(infoEntry?: dnvue.LogEntry | undefined): void;
    writeWarning(warnEntry?: dnvue.LogEntry | undefined): void;
    writeError(errorEntry?: dnvue.LogEntry | undefined): void;
}
/**
 * 提供了创建 ColoredConsoleLogWriter 类型的对象实例相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ColoredConsoleLogWriterFactory
 * @implements {dnvue.ILogWriterFactory}
 * @sealed
 */
export declare class ColoredConsoleLogWriterFactory implements dnvue.ILogWriterFactory {
    create(): dnvue.ILogWriter;
}
