/**
 * 定义了日志类型枚举。
 *
 * @export
 * @enum {number}
 */
export declare enum LoggerType {
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
