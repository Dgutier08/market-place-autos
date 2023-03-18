import CryptoJS from "crypto-js";

const ES_HASH = import.meta.env.VITE_ES_HASH;

export const AESEncrypt = (pureText) => {
  return encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify(pureText), ES_HASH).toString()
  );
};
export const AESDecrypt = (encryptedText) => {
  const bytes = CryptoJS.AES.decrypt(
    decodeURIComponent(encryptedText),
    ES_HASH
  );
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
