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
