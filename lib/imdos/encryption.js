import CryptoJS from 'crypto-js';

const encryptionKey = '>Z~$m;9^.yRNW(';

export function encryptJSON(jsonData) {
  const jsonString = JSON.stringify(jsonData);
  const encrypted = CryptoJS.AES.encrypt(jsonString, encryptionKey).toString();
  return encrypted;
}

export function decryptJSON(encryptedData) {
  const decrypted = CryptoJS.AES.decrypt(
    encryptedData?.data,
    encryptionKey
  ).toString(CryptoJS.enc.Utf8);
  const decryptedJSON = JSON.parse(decrypted);
  return decryptedJSON;
}
