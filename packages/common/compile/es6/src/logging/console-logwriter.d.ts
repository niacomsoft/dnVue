/// <reference types="@dnvue/typings" />
import { LogWriter } from "./logwriter";
/**
 * 提供了基于 Console 记录运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ConsoleLogWriter
 * @extends {LogWriter}
 * @implements {dnvue.ILogWriter}
 * @sealed
 */
export declare class ConsoleLogWriter extends LogWriter implements dnvue.ILogWriter {
    writeDebug(debugEntry?: dnvue.LogEntry | undefined): void;
    writeTrace(traceEntry?: dnvue.LogEntry | undefined): void;
    writeInformation(infoEntry?: dnvue.LogEntry | undefined): void;
    writeWarning(warnEntry?: dnvue.LogEntry | undefined): void;
    writeError(errorEntry?: dnvue.LogEntry | undefined): void;
}
