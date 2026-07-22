import {
  countClicks,
  browserStats,
  osStats,
  deviceStats,
  findClicksByUrlId,
  geoStats,
  clickOverTime,
  uniqueVisitors,
} from "../repositories/click.repository.ts";

export const getAnalytics = async (urlId: string) => {
  const clicks = await findClicksByUrlId(urlId);
  const clickCount = await countClicks(urlId);
  const browserData = await browserStats(urlId);
  const deviceData = await deviceStats(urlId);
  const osData = await osStats(urlId);
  const geoData = await geoStats(urlId);
  const visitorData = await uniqueVisitors(urlId);
  const clickData = await clickOverTime(urlId);
  const formattedDateData = clickData.map((item) => ({
    date: item.date.toISOString().split("T")[0],
    clicks: item.clicks,
  }));
  return {
    clicks,
    clickCount,
    browserData,
    deviceData,
    osData,
    geoData,
    visitorData,
    clickData: formattedDateData,
  };
};
