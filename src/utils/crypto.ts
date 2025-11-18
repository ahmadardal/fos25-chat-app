import CryptoJS from "crypto-js";
import { SECRET_KEY } from "./constants";

export function encryptPassword(plaintext: string, key = SECRET_KEY): string {
  return CryptoJS.AES.encrypt(plaintext, key).toString();
}

export function decryptPassword(ciphertext: string, key = SECRET_KEY): string {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    return ""; /* Return empty string on failure */
  }
}
