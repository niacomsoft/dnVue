// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

export {
    sealed,
    SingletonManager,
    LogWriter,
    ConsoleLogWriter,
    ConsoleLogWriterFactory,
    ColoredConsoleLogWriter,
    ColoredConsoleLogWriterFactory,
    Logger,
    AppContext,
    Startup,
    StringResolver,
    ConstantStringResolver,
} from "./src";

String.empty = function (): string {
    return "";
};

String.isNullOrEmpty = function (s): boolean {
    return (s ?? String.empty()) === String.empty();
};

String.isNullOrWhitespace = function (s): boolean {
    return (s ?? String.empty()).trim() === String.empty();
};

Object.safeGet = function <T>(value: T | undefined | null, safeValue: T): T {
    return value ?? safeValue;
};