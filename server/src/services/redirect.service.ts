import {
  findByShortCode,
  incrementClickCount,
} from "../repositories/url.repository.ts";

import { createClick } from "../repositories/click.repository.ts";

import { getClientInfo } from "../utils/analytics.ts";
import { getGeoData } from "../utils/geo.ts";
import { Request } from "express";

export const redirect = async (shortCode: string, req: Request) => {
  const url = await findByShortCode(shortCode);

  if (!url) {
    throw new Error("Short URL not found");
  }
  const clientInfo = getClientInfo(req);
  const geoData = await getGeoData(clientInfo.ip);

  await createClick({
    browser: clientInfo.browser,
    os: clientInfo.os,
    device: clientInfo.device,
    referer: clientInfo.referer,
    ipHash: clientInfo.ipHash,

    country: geoData.country,
    city: geoData.city,

    url: {
      connect: {
        id: url.id,
      },
    },
  });
  await incrementClickCount(url.id);
  return url.originalUrl;
};
