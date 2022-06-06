// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { ElNotification } from "element-plus";
import { useLocalization } from "../locale";

/**
 * 提供了系统通知相关的方法。
 *
 * @class NotificationUtility
 */
class NotificationUtility {
    /**
     * 显示通知。
     *
     * @private
     * @param {string} message 通知消息。
     * @param {string} [title] 通知标题。
     * @param {(("success" | "warning" | "info" | "error"))} [type] 通知类型。
     * @param {dnvue.Action} [closedCallback] 通知栏关闭回调方法。
     * @memberof NotificationUtility
     */
    private _notify(message: string, title?: string, type?: ("success" | "warning" | "info" | "error"), closedCallback?: dnvue.Action): void {
        title = Object.safeGet<string>(title, useLocalization().t("PROMPT"));
        ElNotification({
            message, title, type, position: "bottom-right", customClass: "el-notification-extensions", duration: 3000, "onClose": () => {
                if (closedCallback) closedCallback();
            }
        });
    }

    /**
     * 成功通知。
     *
     * @param {string} message 通知消息。
     * @param {dnvue.Action} [closedCallback] 通知栏关闭回调方法。
     * @memberof NotificationUtility
     */
    success(message: string, closedCallback?: dnvue.Action): void {
        this._notify(message, useLocalization().t("SUCCESS"), "success", closedCallback);
    }

    /**
     * 完成通知。
     *
     * @param {string} message 通知消息。
     * @param {dnvue.Action} [closedCallback] 通知栏关闭回调方法。
     * @memberof NotificationUtility
     */
    done(message: string, closedCallback?: dnvue.Action): void {
        this._notify(message, useLocalization().t("DONE"), "success", closedCallback);
    }

    /**
     * 信息通知。
     *
     * @param {string} message 通知消息。
     * @param {dnvue.Action} [closedCallback] 通知栏关闭回调方法。
     * @memberof NotificationUtility
     */
    info(message: string, closedCallback?: dnvue.Action): void {
        this._notify(message, useLocalization().t("INFORMATION"), "info", closedCallback);
    }

    /**
     * 警告通知。
     *
     * @param {string} message 通知消息。
     * @param {dnvue.Action} [closedCallback] 通知栏关闭回调方法。
     * @memberof NotificationUtility
     */
    warning(message: string, closedCallback?: dnvue.Action): void {
        this._notify(message, useLocalization().t("WARNING"), "warning", closedCallback);
    }

    /**
     * 异常通知。
     *
     * @param {string} message 通知消息。
     * @param {dnvue.Action} [closedCallback] 通知栏关闭回调方法。
     * @memberof NotificationUtility
     */
    error(message: string, closedCallback?: dnvue.Action): void {
        this._notify(message, useLocalization().t("EXCEPTION"), "error", closedCallback);
    }

    /**
     * 失败通知。
     *
     * @param {string} message 通知消息。
     * @param {dnvue.Action} [closedCallback] 通知栏关闭回调方法。
     * @memberof NotificationUtility
     */
    failed(message: string, closedCallback?: dnvue.Action): void {
        this._notify(message, useLocalization().t("FAILED"), "error", closedCallback);
    }
}

const notificationUtils = new NotificationUtility();

/**
 * 使用通知反馈工具。
 *
 * @export
 * @returns {NotificationUtility}
 */
export function useNotification(): NotificationUtility {
    return notificationUtils;
}