// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { LogWriter } from "./logwriter";
import { sealed } from "../decorators";

/**
 * 提供了基于 Console 记录运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ConsoleLogWriter
 * @extends {LogWriter}
 * @implements {dnvue.ILogWriter}
 * @sealed
 */
@sealed
export class ConsoleLogWriter extends LogWriter implements dnvue.ILogWriter {
    writeDebug(debugEntry?: dnvue.LogEntry | undefined): void {
        console.debug(`${debugEntry?.message} See %o`, { contextData: debugEntry?.contextData, contextError: debugEntry?.error, time: new Date() });
    }
    writeTrace(traceEntry?: dnvue.LogEntry | undefined): void {
        console.trace(`${traceEntry?.message} See %o`, { contextData: traceEntry?.contextData, contextError: traceEntry?.error, time: new Date() });
    }
    writeInformation(infoEntry?: dnvue.LogEntry | undefined): void {
        console.info(`${infoEntry?.message} See %o`, { contextData: infoEntry?.contextData, contextError: infoEntry?.error, time: new Date() });
    }
    writeWarning(warnEntry?: dnvue.LogEntry | undefined): void {
        console.warn(`${warnEntry?.message} See %o`, { contextData: warnEntry?.contextData, contextError: warnEntry?.error, time: new Date() });
    }
    writeError(errorEntry?: dnvue.LogEntry | undefined): void {
        console.error(`${errorEntry?.message} See %o`, { contextData: errorEntry?.contextData, contextError: errorEntry?.error, time: new Date() });
    }
}