// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
export { sealed, SingletonManager, LogWriter, ConsoleLogWriter, ConsoleLogWriterFactory, ColoredConsoleLogWriter, ColoredConsoleLogWriterFactory, Logger, AppContext, Startup, StringResolver, ConstantStringResolver, CultureInfoPersistence } from "./src";
String.empty = function () {
    return "";
};
String.isNullOrEmpty = function (s) {
    return (s !== null && s !== void 0 ? s : String.empty()) === String.empty();
};
String.isNullOrWhitespace = function (s) {
    return (s !== null && s !== void 0 ? s : String.empty()).trim() === String.empty();
};
Object.safeGet = function (value, safeValue) {
    return value !== null && value !== void 0 ? value : safeValue;
};
