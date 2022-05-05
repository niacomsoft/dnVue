// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { sealed } from "../decorators";
import { ConsoleLogWriter, ConsoleLogWriterFactory } from "./console-logwriter";
import { ColoredConsoleLogWriter, ColoredConsoleLogWriterFactory } from "./colored-console-logwriter";

/**
 * 提供了统一的记录运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class Logger
 * @implements {dnvue.ILogger}
 * @implements {dnvue.ILogWriter}
 * @sealed
 */
@sealed
export class Logger implements dnvue.ILogger, dnvue.ILogWriter {
    /**
     * 用于初始化一个 Logger 类型的对象实例。
     * @memberof Logger
     */
    constructor() {
        this.factories = [];
        this.factories.push(new ConsoleLogWriterFactory());
        this.factories.push(new ColoredConsoleLogWriterFactory());
        this.writers = [];
        const ctx = this;
        this.factories.forEach(factory => {
            ctx.writers.push(factory.create());
        });
    }

    writers: dnvue.ILogWriter[];
    factories: dnvue.ILogWriterFactory[];
    addWriters(...writers: dnvue.ILogWriter[]): void {
        const ctx = this;
        writers?.forEach(writer => {
            ctx.writers.push(writer);
        });
    }
    addFactories(...factories: dnvue.ILogWriterFactory[]): void {
        const ctx = this;
        factories?.forEach(factory => {
            ctx.factories.push(factory);
            ctx.writers.push(factory.create());
        });
    }
    writeDebug(debugEntry?: dnvue.LogEntry | undefined): void {
        this.writers.forEach(writer => {
            writer.writeDebug(debugEntry);
        });
    }
    writeTrace(traceEntry?: dnvue.LogEntry | undefined): void {
        this.writers.forEach(writer => {
            writer.writeTrace(traceEntry);
        });
    }
    writeInformation(infoEntry?: dnvue.LogEntry | undefined): void {
        this.writers.forEach(writer => {
            writer.writeInformation(infoEntry);
        });
    }
    writeWarning(warnEntry?: dnvue.LogEntry | undefined): void {
        this.writers.forEach(writer => {
            writer.writeWarning(warnEntry);
        });
    }
    writeError(errorEntry?: dnvue.LogEntry | undefined): void {
        this.writers.forEach(writer => {
            writer.writeError(errorEntry);
        });
    }
    writeLog(entry?: dnvue.LogEntry | undefined, level?: dnvue.LogLevel | undefined): void {
        this.writers.forEach(writer => {
            writer.writeLog(entry, level);
        });
    }
}