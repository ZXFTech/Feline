import CryptoJS, { mode, pad } from "crypto-js";

/**
 *
 * @param string 被加密的字符串
 * @param key key
 * @returns 加密后的字符串
 */
export const encrypt = (key: string, string: string) => {
  const src = CryptoJS.enc.Utf8.parse(string);
  return CryptoJS.AES.encrypt(src, CryptoJS.MD5(key), {
    mode: mode.ECB,
    padding: pad.Pkcs7,
  }).toString();
};

/**
 *
 * @param string 已加密的字符串
 * @param key key
 * @returns 解密后的字符串
 */
export const decrypt = (key: string, string: string) => {
  return CryptoJS.AES.decrypt(string, CryptoJS.MD5(key), {
    mode: mode.ECB,
    padding: pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
};
