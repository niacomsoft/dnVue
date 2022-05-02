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
export enum LoggerType {
    /**
     * 追踪型日志。
     */
    TRACE = 1,
    /**
     * 调试型日志。
     */
    DEBUG = 2,
    /**
     * 信息型日志。
     */
    INFO = 4,
    /**
     * 警告型日志。
     */
    WARN = 8,
    /**
     * 错误型日志。
     */
    ERROR = 16
}

/**
 * 为 LoggerType 类型提供的扩展方法。
 */
export namespace LoggerType {
    /**
     * 用于校验 source 是否等于 target 值。
     *
     * @param {(LoggerType | number)} source 需要对比的源值。
     * @param {(LoggerType | number)} target 需要对比的目标值。
     * @returns {boolean}
     */
    function equals(source: LoggerType | number, target: LoggerType | number): boolean {
        return (source & target) === target;
    }
}