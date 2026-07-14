import { Request } from "express";
import { UAParser } from "ua-parser-js";
import crypto from "crypto";

export const getClientInfo = (req: Request) => {
  const parser = new UAParser(req.headers["user-agent"]);
  const result = parser.getResult();
  const ip = req.ip;
  const browser = result.browser.name ?? "Unknown";
  const os = result.os.name ?? "Unknown";
  const device =
    result.device.type === undefined ? "Desktop" : result.device.type;

  const referer = req.get("referer") ?? "Direct";
  const key = process.env.IP_HASH_SECRET;
  const ipHash = crypto
    .createHmac("sha256", key)
    .update(ip ?? "")
    .digest("hex");
  return {
    browser,
    os,
    device,
    referer,
    ip,
    ipHash,
  };
};
