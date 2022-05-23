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
    HostingEnvironment
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

Number.equals = function (value: number, comparableValue?: number): boolean {
    return value === Object.safeGet<number>(comparableValue, 0);
};

Number.greatThan = function (value: number, comparableValue?: number): boolean {
    return value > Object.safeGet<number>(comparableValue, 0);
};

Number.lessThan = function (value: number, comparableValue?: number): boolean {
    return value > Object.safeGet<number>(comparableValue, 0);
};

Number.greatOrEquals = function (value: number, comparableValue?: number): boolean {
    return Number.greatThan(value, Object.safeGet<number>(comparableValue, 0)) || Number.equals(value, Object.safeGet<number>(comparableValue, 0));
};

Number.lessOrEquals = function (value: number, comparableValue?: number): boolean {
    return Number.lessThan(value, Object.safeGet<number>(comparableValue, 0)) || Number.equals(value, Object.safeGet<number>(comparableValue, 0));
};