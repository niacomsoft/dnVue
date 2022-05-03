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
import { ConsoleLogger } from "./console-logger";
import { Logger } from "./logger";
import { sealed } from "../decorators";
/**
 * 提供了管理运行时日志相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class LoggerManager
 * @extends {Logger}
 * @implements {ILoggerManager}
 * @implements {ILogger}
 * @sealed
 */
let LoggerManager = class LoggerManager extends Logger {
    /**
     * 用于初始化一个 LoggerManager 类型的对象实例。
     *
     * @memberof LoggerManager
     */
    constructor() {
        super();
        /**
         * 获取 ILogger 类型的对象实例集合，用于表示输出运行时日志的方法。
         *
         * @type {ILogger[]}
         * @memberof LoggerManager
         * @readonly
         */
        this.loggers = [];
        this.loggers.push(new ConsoleLogger());
    }
    writeDebug(message, contextData) {
        this.loggers.forEach(logger => {
            logger.writeDebug(message, contextData);
        });
    }
    writeTrace(message, contextData) {
        this.loggers.forEach(logger => {
            logger.writeTrace(message, contextData);
        });
    }
    writeInformation(message, contextData) {
        this.loggers.forEach(logger => {
            logger.writeInformation(message, contextData);
        });
    }
    writeWarning(message, contextData) {
        this.loggers.forEach(logger => {
            logger.writeWarning(message, contextData);
        });
    }
    writeError(message, contextData) {
        this.loggers.forEach(logger => {
            logger.writeError(message, contextData);
        });
    }
};
LoggerManager = __decorate([
    sealed,
    __metadata("design:paramtypes", [])
], LoggerManager);
export { LoggerManager };
