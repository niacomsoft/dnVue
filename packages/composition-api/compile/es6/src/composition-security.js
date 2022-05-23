// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************
import { SingletonManager } from "@dnvue/common";
import { SafeNumber, MD5AlgorithmProvider, SHA1AlgorithmProvider, SHA256AlgorithmProvider, SHA512AlgorithmProvider, SHA3AlgorithmProvider, RIPEMD160AlgorithmProvider } from "@dnvue/security";
/**
 * 使用安全自然数服务。
 *
 * @export
 * @returns {SafeNumber}
 */
export function useSafeNumber() {
    return SingletonManager.createOrGet("__DNVUE_SAFE_NUMBER__", () => new SafeNumber());
}
/**
 * 使用指定的哈希算法计算字符串的哈希值。
 *
 * @export
 * @param {string} s 字符串。
 * @param {(("md5" | "sha1" | "sha256" | "sha512" | "sha3" | "sha3-384" | "sha3-256" | "sha3-224" | "RIPEMD160"))} [algName] 算法名称。
 * @returns {string}
 */
export function computeHash(s, algName = "md5") {
    let hashStr = s;
    switch (algName) {
        case "sha1":
            hashStr = SingletonManager.createOrGet("__DNVUE_SHA1_HASH__", () => new SHA1AlgorithmProvider()).computeHash(s);
            break;
        case "sha256":
            hashStr = SingletonManager.createOrGet("__DNVUE_SHA256_HASH__", () => new SHA256AlgorithmProvider()).computeHash(s);
            break;
        case "sha512":
            hashStr = SingletonManager.createOrGet("__DNVUE_SHA512_HASH__", () => new SHA512AlgorithmProvider()).computeHash(s);
            break;
        case "sha3":
            hashStr = SingletonManager.createOrGet("__DNVUE_SHA3_HASH__", () => new SHA3AlgorithmProvider()).computeSHA3(s, 512);
            break;
        case "sha3-224":
            hashStr = SingletonManager.createOrGet("__DNVUE_SHA3_HASH__", () => new SHA3AlgorithmProvider()).computeSHA3(s, 224);
            break;
        case "sha3-256":
            hashStr = SingletonManager.createOrGet("__DNVUE_SHA3_HASH__", () => new SHA3AlgorithmProvider()).computeSHA3(s, 256);
            break;
        case "sha3-384":
            hashStr = SingletonManager.createOrGet("__DNVUE_SHA3_HASH__", () => new SHA3AlgorithmProvider()).computeSHA3(s, 384);
            break;
        case "RIPEMD160":
            hashStr = SingletonManager.createOrGet("__DNVUE_RIPEMD160_HASH__", () => new RIPEMD160AlgorithmProvider()).computeHash(s);
            break;
        default:
            hashStr = SingletonManager.createOrGet("__DNVUE_MD5_HASH__", () => new MD5AlgorithmProvider()).computeHash(s);
            break;
    }
    return hashStr;
}
