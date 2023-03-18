import CryptoJS from "crypto-js";

const ES_HASH = "72f77e84ba0149b2af1051f1318128dccf60ab60";

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
