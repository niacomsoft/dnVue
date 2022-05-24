// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
export { sealed, SingletonManager, LogWriter, ConsoleLogWriter, ConsoleLogWriterFactory, ColoredConsoleLogWriter, ColoredConsoleLogWriterFactory, Logger, AppContext, Startup, StringResolver, ConstantStringResolver, HostingEnvironment } from "./src";
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
Number.equals = function (value, comparableValue) {
    return value === Object.safeGet(comparableValue, 0);
};
Number.greatThan = function (value, comparableValue) {
    return value > Object.safeGet(comparableValue, 0);
};
Number.lessThan = function (value, comparableValue) {
    return value > Object.safeGet(comparableValue, 0);
};
Number.greatOrEquals = function (value, comparableValue) {
    return Number.greatThan(value, Object.safeGet(comparableValue, 0)) || Number.equals(value, Object.safeGet(comparableValue, 0));
};
Number.lessOrEquals = function (value, comparableValue) {
    return Number.lessThan(value, Object.safeGet(comparableValue, 0)) || Number.equals(value, Object.safeGet(comparableValue, 0));
};
window.DEFAULT_CRYPTO_SECURE_KEY = "Prlt7kAqvY4SQ8IwmsNXLUyuaM51F9di";
