/// <reference types="@dnvue/typings" />
import { SafeNumber } from "@dnvue/security";
/**
 * 使用安全自然数服务。
 *
 * @export
 * @returns {SafeNumber}
 */
export declare function useSafeNumber(): SafeNumber;
/**
 * 使用指定的哈希算法计算字符串的哈希值。
 *
 * @export
 * @param {string} s 字符串。
 * @param {(("md5" | "sha1" | "sha256" | "sha512" | "sha3" | "sha3-384" | "sha3-256" | "sha3-224" | "RIPEMD160"))} [algName] 算法名称。
 * @returns {string}
 */
export declare function computeHash(s: string, algName?: ("md5" | "sha1" | "sha256" | "sha512" | "sha3" | "sha3-384" | "sha3-256" | "sha3-224" | "RIPEMD160")): string;
/**
 * 使用加密算法。
 *
 * @export
 * @param {(("des" | "aes"))} [algName="aes"] 加密算法名称。
 * @returns {dnvue.security.ICryptoAlgorithm}
 */
export declare function useCrypto(algName?: ("des" | "aes")): dnvue.security.ICryptoAlgorithm;
