// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
/**
 * 定义了日志类型枚举。
 *
 * @export
 * @enum {number}
 */
export var LoggerType;
(function (LoggerType) {
    /**
     * 追踪型日志。
     */
    LoggerType[LoggerType["TRACE"] = 1] = "TRACE";
    /**
     * 调试型日志。
     */
    LoggerType[LoggerType["DEBUG"] = 2] = "DEBUG";
    /**
     * 信息型日志。
     */
    LoggerType[LoggerType["INFO"] = 4] = "INFO";
    /**
     * 警告型日志。
     */
    LoggerType[LoggerType["WARN"] = 8] = "WARN";
    /**
     * 错误型日志。
     */
    LoggerType[LoggerType["ERROR"] = 16] = "ERROR";
})(LoggerType || (LoggerType = {}));
/**
 * 为 LoggerType 类型提供的扩展方法。
 */
(function (LoggerType) {
    /**
     * 用于校验 source 是否等于 target 值。
     *
     * @param {(LoggerType | number)} source 需要对比的源值。
     * @param {(LoggerType | number)} target 需要对比的目标值。
     * @returns {boolean}
     */
    function equals(source, target) {
        return (source & target) === target;
    }
})(LoggerType || (LoggerType = {}));
