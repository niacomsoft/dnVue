// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import FingerprintJS from "@fingerprintjs/fingerprintjs";
/**
 * (异步的方法) 获取指纹信息。
 *
 * @export
 * @returns {Promise<string>}
 * @async
 */
export function getFingerprintAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const agent = yield FingerprintJS.load({ debug: true });
            const result = yield agent.get();
            return result.visitorId;
        }
        catch (error) {
            throw error;
        }
    });
}
