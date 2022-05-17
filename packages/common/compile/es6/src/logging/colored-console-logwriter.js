// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. See detailed data: LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
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
var ColoredConsoleLogWriter_1;
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
let ColoredConsoleLogWriter = ColoredConsoleLogWriter_1 = class ColoredConsoleLogWriter extends LogWriter {
    /**
     * 用于初始化一个 ColoredConsoleLogWriter 类型的对象实例。
     *
     * @param {dnvue.ColoredConsoleStyleOptions} [styleOptions]
     * @memberof ColoredConsoleLogWriter
     */
    constructor(styleOptions) {
        super();
        this._styleOptions = Object.assign({}, ColoredConsoleLogWriter_1.DEFAULT_STYLE, styleOptions);
    }
    writeDebug(debugEntry) {
        console.groupCollapsed("DNVUE DEBUG");
        console.debug(`%c${debugEntry === null || debugEntry === void 0 ? void 0 : debugEntry.message}`, this._styleOptions.debug);
        console.debug(`%cSee detailed data: %o`, this._styleOptions.debug, { contextData: debugEntry === null || debugEntry === void 0 ? void 0 : debugEntry.contextData, contextError: debugEntry === null || debugEntry === void 0 ? void 0 : debugEntry.error, time: new Date() });
        console.groupEnd();
    }
    writeTrace(traceEntry) {
        console.groupCollapsed("DNVUE TRACE");
        console.trace(`%c${traceEntry === null || traceEntry === void 0 ? void 0 : traceEntry.message}`, this._styleOptions.trace);
        console.trace(`%cSee detailed data: %o`, this._styleOptions.trace, { contextData: traceEntry === null || traceEntry === void 0 ? void 0 : traceEntry.contextData, contextError: traceEntry === null || traceEntry === void 0 ? void 0 : traceEntry.error, time: new Date() });
        console.groupEnd();
    }
    writeInformation(infoEntry) {
        console.group("DNVUE INFORMATION");
        console.info(`%c${infoEntry === null || infoEntry === void 0 ? void 0 : infoEntry.message}`, this._styleOptions.information);
        console.info(`%cSee detailed data: %o`, this._styleOptions.information, { contextData: infoEntry === null || infoEntry === void 0 ? void 0 : infoEntry.contextData, contextError: infoEntry === null || infoEntry === void 0 ? void 0 : infoEntry.error, time: new Date() });
        console.groupEnd();
    }
    writeWarning(warnEntry) {
        console.group("DNVUE WARNING");
        console.warn(`%c${warnEntry === null || warnEntry === void 0 ? void 0 : warnEntry.message}`, this._styleOptions.warning);
        console.warn(`%cSee detailed data: %o`, this._styleOptions.warning, { contextData: warnEntry === null || warnEntry === void 0 ? void 0 : warnEntry.contextData, contextError: warnEntry === null || warnEntry === void 0 ? void 0 : warnEntry.error, time: new Date() });
        console.groupEnd();
    }
    writeError(errorEntry) {
        console.group("DNVUE ERROR");
        console.error(`%c${errorEntry === null || errorEntry === void 0 ? void 0 : errorEntry.message}%o`, this._styleOptions.error);
        console.error(`%cSee detailed data: %o`, this._styleOptions.error, { contextData: errorEntry === null || errorEntry === void 0 ? void 0 : errorEntry.contextData, contextError: errorEntry === null || errorEntry === void 0 ? void 0 : errorEntry.error, time: new Date() });
        console.groupEnd();
    }
};
/**
 * 默认的样式。
 *
 * @static
 * @type {dnvue.ColoredConsoleStyleOptions}
 * @memberof ColoredConsoleLogWriter
 */
ColoredConsoleLogWriter.DEFAULT_STYLE = {
    debug: "font-style: italic; color: #616161; font-weight: bold",
    trace: "color: #616161; font-weight: bold",
    information: "color: #0D47A1; font-weight: bold",
    warning: "color: #FF6F00; font-weight: bold",
    error: "color: #B71C1C; font-weight: bold"
};
ColoredConsoleLogWriter = ColoredConsoleLogWriter_1 = __decorate([
    sealed,
    __metadata("design:paramtypes", [Object])
], ColoredConsoleLogWriter);
export { ColoredConsoleLogWriter };
/**
 * 提供了创建 ColoredConsoleLogWriter 类型的对象实例相关的方法。密闭的，不可以从此类型派生。
 *
 * @export
 * @class ColoredConsoleLogWriterFactory
 * @implements {dnvue.ILogWriterFactory}
 * @sealed
 */
let ColoredConsoleLogWriterFactory = class ColoredConsoleLogWriterFactory {
    create() {
        return SingletonManager.createOrGet("__DNVUE_COLORED_CONSOLE_LOGWRITER__", () => {
            return new ColoredConsoleLogWriter();
        });
    }
};
ColoredConsoleLogWriterFactory = __decorate([
    sealed
], ColoredConsoleLogWriterFactory);
export { ColoredConsoleLogWriterFactory };
