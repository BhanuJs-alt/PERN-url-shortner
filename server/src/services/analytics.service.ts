import {
  countClicks,
  browserStats,
  osStats,
  deviceStats,
  findClicksByUrlId,
  geoStats,
} from "../repositories/click.repository.ts";

export const getAnalytics = async (urlId: string) => {
  const clicks = await findClicksByUrlId(urlId);
  const clickCount = await countClicks(urlId);
  const browserData = await browserStats(urlId);
  const deviceData = await deviceStats(urlId);
  const osData = await osStats(urlId);
  const geoData = await geoStats(urlId);
  return {
    clicks,
    clickCount,
    browserData,
    deviceData,
    osData,
    geoData,
  };
};
