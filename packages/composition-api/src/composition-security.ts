// **************************************************************************************************************************
// COPYRIGHT © 2006 - 2022 WANG YUCAI. ALL RIGHTS RESERVED.
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// **************************************************************************************************************************

import { SingletonManager } from "@dnvue/common";
import {
    SafeNumber,
    MD5AlgorithmProvider,
    SHA1AlgorithmProvider,
    SHA256AlgorithmProvider,
    SHA512AlgorithmProvider,
    SHA3AlgorithmProvider,
    RIPEMD160AlgorithmProvider,
    AESCryptoAlgorithm,
    DESCryptoAlgorithm
} from "@dnvue/security";

/**
 * 使用安全自然数服务。
 *
 * @export
 * @returns {SafeNumber}
 */
export function useSafeNumber(): SafeNumber {
    return SingletonManager.createOrGet<SafeNumber>("__DNVUE_SAFE_NUMBER__", () => new SafeNumber());
}

/**
 * 使用指定的哈希算法计算字符串的哈希值。
 *
 * @export
 * @param {string} s 字符串。
 * @param {(("md5" | "sha1" | "sha256" | "sha512" | "sha3" | "sha3-384" | "sha3-256" | "sha3-224" | "RIPEMD160"))} [algName] 算法名称。
 * @returns {string}
 */
export function computeHash(s: string, algName: ("md5" | "sha1" | "sha256" | "sha512" | "sha3" | "sha3-384" | "sha3-256" | "sha3-224" | "RIPEMD160") = "md5"): string {
    let hashStr: string = s;

    switch (algName) {
        case "sha1":
            hashStr = SingletonManager.createOrGet<dnvue.security.IHashAlgorithm>("__DNVUE_SHA1_HASH__", () => new SHA1AlgorithmProvider()).computeHash(s);
            break;
        case "sha256":
            hashStr = SingletonManager.createOrGet<dnvue.security.IHashAlgorithm>("__DNVUE_SHA256_HASH__", () => new SHA256AlgorithmProvider()).computeHash(s);
            break;
        case "sha512":
            hashStr = SingletonManager.createOrGet<dnvue.security.IHashAlgorithm>("__DNVUE_SHA512_HASH__", () => new SHA512AlgorithmProvider()).computeHash(s);
            break;
        case "sha3":
            hashStr = SingletonManager.createOrGet<SHA3AlgorithmProvider>("__DNVUE_SHA3_HASH__", () => new SHA3AlgorithmProvider()).computeSHA3(s, 512);
            break;
        case "sha3-224":
            hashStr = SingletonManager.createOrGet<SHA3AlgorithmProvider>("__DNVUE_SHA3_HASH__", () => new SHA3AlgorithmProvider()).computeSHA3(s, 224);
            break;
        case "sha3-256":
            hashStr = SingletonManager.createOrGet<SHA3AlgorithmProvider>("__DNVUE_SHA3_HASH__", () => new SHA3AlgorithmProvider()).computeSHA3(s, 256);
            break;
        case "sha3-384":
            hashStr = SingletonManager.createOrGet<SHA3AlgorithmProvider>("__DNVUE_SHA3_HASH__", () => new SHA3AlgorithmProvider()).computeSHA3(s, 384);
            break;
        case "RIPEMD160":
            hashStr = SingletonManager.createOrGet<dnvue.security.IHashAlgorithm>("__DNVUE_RIPEMD160_HASH__", () => new RIPEMD160AlgorithmProvider()).computeHash(s);
            break;
        default:
            hashStr = SingletonManager.createOrGet<dnvue.security.IHashAlgorithm>("__DNVUE_MD5_HASH__", () => new MD5AlgorithmProvider()).computeHash(s);
            break;
    }

    return hashStr;
}

/**
 * 使用加密算法。
 *
 * @export
 * @param {(("des" | "aes"))} [algName="aes"] 加密算法名称。
 * @returns {dnvue.security.ICryptoAlgorithm}
 */
export function useCrypto(algName: ("des" | "aes") = "aes"): dnvue.security.ICryptoAlgorithm {
    let alg: dnvue.security.ICryptoAlgorithm;
    switch (algName) {
        case "des":
            alg = SingletonManager.createOrGet<DESCryptoAlgorithm>("__DNVUE_DES_CRYPTO_ALGORITHM__", () => new DESCryptoAlgorithm(window.DEFAULT_CRYPTO_SECURE_KEY ?? ""));
            break;
        default:
            alg = SingletonManager.createOrGet<AESCryptoAlgorithm>("__DNVUE_AES_CRYPTO_ALGORITHM__", () => new AESCryptoAlgorithm(window.DEFAULT_CRYPTO_SECURE_KEY ?? ""));
            break;
    }
    return alg;
}