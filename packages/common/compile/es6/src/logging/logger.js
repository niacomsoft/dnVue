// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { sealed } from "../decorators";
import { ConsoleLogWriterFactory } from "./console-logwriter";
import { ColoredConsoleLogWriterFactory } from "./colored-console-logwriter";
/**
 * 提供了统一的记录运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class Logger
 * @implements {dnvue.ILogger}
 * @implements {dnvue.ILogWriter}
 * @sealed
 */
let Logger = class Logger {
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
    addWriters(...writers) {
        const ctx = this;
        writers === null || writers === void 0 ? void 0 : writers.forEach(writer => {
            ctx.writers.push(writer);
        });
    }
    addFactories(...factories) {
        const ctx = this;
        factories === null || factories === void 0 ? void 0 : factories.forEach(factory => {
            ctx.factories.push(factory);
            ctx.writers.push(factory.create());
        });
    }
    writeDebug(debugEntry) {
        this.writers.forEach(writer => {
            writer.writeDebug(debugEntry);
        });
    }
    writeTrace(traceEntry) {
        this.writers.forEach(writer => {
            writer.writeTrace(traceEntry);
        });
    }
    writeInformation(infoEntry) {
        this.writers.forEach(writer => {
            writer.writeInformation(infoEntry);
        });
    }
    writeWarning(warnEntry) {
        this.writers.forEach(writer => {
            writer.writeWarning(warnEntry);
        });
    }
    writeError(errorEntry) {
        this.writers.forEach(writer => {
            writer.writeError(errorEntry);
        });
    }
    writeLog(entry, level) {
        this.writers.forEach(writer => {
            writer.writeLog(entry, level);
        });
    }
};
Logger = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], Logger);
export { Logger };
