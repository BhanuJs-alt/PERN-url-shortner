import { findByShortCode } from "../repositories/url.repository.ts";

const generateShortCode = async (length = 7) => {
  const ALPHABET =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  const existing = await findByShortCode(code);

  if (!existing) {
    return code;
  }
};
export default generateShortCode;
