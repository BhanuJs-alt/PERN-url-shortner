import prisma from "../config/prisma.ts";
import { Prisma } from "@prisma/client";

export const createClick = async (data: Prisma.ClickCreateInput) => {
  return prisma.click.create({ data });
};

export const findClicksByUrlId = async (urlId: string) => {
  return prisma.click.findMany({
    where: { urlId },
    orderBy: { createdAt: "desc" },
  });
};

export const countClicks = async (urlId: string) => {
  return prisma.click.count({
    where: { urlId },
  });
};

export const browserStats = async (urlId: string) => {
  return prisma.click.groupBy({
    by: ["browser"],
    where: { urlId },
    _count: {
      browser: true,
    },
  });
};

export const deviceStats = async (urlId: string) => {
  return prisma.click.groupBy({
    by: ["device"],
    where: { urlId },
    _count: {
      device: true,
    },
  });
};

export const osStats = async (urlId: string) => {
  return prisma.click.groupBy({
    by: ["os"],
    where: { urlId },
    _count: {
      os: true,
    },
  });
};
export const geoStats = async (urlId: string) => {
  return prisma.click.groupBy({
    by: ["country"],
    where: { urlId },
    _count: {
      country: true,
    },
  });
};
export const clickOverTime = async (urlId: string) => {
  return prisma.$queryRaw`
  SELECT
    DATE("createdAt") AS date,
    COUNT(*)::int AS clicks
  FROM "Click"
  WHERE "urlId" = ${urlId}
  GROUP BY DATE("createdAt")
  ORDER BY date ASC;
`;
};
export const uniqueVisitors = async (urlId: string) => {
  return prisma.click.groupBy({
    by: ["ipHash"],
    where: {
      urlId,
      ipHash: {
        not: null,
      },
    },
    _count: {
      ipHash: true,
    },
  });
};
export const refererStats = async (urlId: string) => {
  return prisma.click.groupBy({
    by: ["referer"],
    where: { urlId },
    _count: {
      referer: true,
    },
  });
};
