import {
  countClicks,
  browserStats,
  osStats,
  deviceStats,
  geoStats,
  clickOverTime,
  uniqueVisitors,
  refererStats,
} from "../repositories/click.repository.ts";

export const getAnalytics = async (urlId: string) => {
  const clickCount = await countClicks(urlId);

  const browserData = await browserStats(urlId);
  const formattedBrowserData = browserData.map((item) => ({
    Browser: item.browser,
    clicks: item._count.browser,
  }));

  const deviceData = await deviceStats(urlId);
  const formattedDeviceData = deviceData.map((item) => ({
    Device: item.device,
    clicks: item._count.device,
  }));

  const osData = await osStats(urlId);
  const formattedOsData = osData.map((item) => ({
    "Operating System": item.os,
    clicks: item._count.os,
  }));

  const geoData = await geoStats(urlId);
  const formattedGeoData = geoData.map((item) => ({
    Country: item.country,
    clicks: item._count.country,
  }));

  const refererData = await refererStats(urlId);
  const formattedRefererData = refererData.map((item) => ({
    Referer: item.referer,
    clicks: item._count.referer,
  }));

  const visitorData = await uniqueVisitors(urlId);
  const formattedVisitors = visitorData.map((visitor, index) => ({
    User: `Visitor ${index + 1}`,
    Visits: visitor._count.ipHash,
  }));

  const clickData = await clickOverTime(urlId);
  const formattedDateData = clickData.map((item) => ({
    date: item.date.toISOString().split("T")[0],
    clicks: item.clicks,
  }));

  return {
    clickCount,
    browserData: formattedBrowserData,
    deviceData: formattedDeviceData,
    osData: formattedOsData,
    geoData: formattedGeoData,
    refererData: formattedRefererData,
    visitorData: formattedVisitors,
    clickData: formattedDateData,
  };
};
