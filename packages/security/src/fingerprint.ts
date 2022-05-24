// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import FingerprintJS from "@fingerprintjs/fingerprintjs";

/**
 * (异步的方法) 获取指纹信息。
 *
 * @export
 * @returns {Promise<string>}
 * @async
 */
export async function getFingerprintAsync(): Promise<string> {
    try {
        const agent = await FingerprintJS.load({ debug: true });
        const result = await agent.get();
        return result.visitorId;
    } catch (error) {
        throw error;
    }
}