// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { SingletonManager } from "@dnvue/common";
import { SafeNumber } from "@dnvue/security";

export function useSafeNumber(): SafeNumber {
    return SingletonManager.createOrGet<SafeNumber>("__DNVUE_SAFE_NUMBER__", () => new SafeNumber());
}