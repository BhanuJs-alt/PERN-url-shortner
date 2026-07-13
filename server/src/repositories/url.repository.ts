import { Prisma } from "@prisma/client";
import prisma from "../config/prisma.ts";

export const createShortUrl = async (data: Prisma.ShortUrlCreateInput) => {
  return await prisma.shortUrl.create({
    data,
  });
};

export const findByShortCode = async (shortCode: string) => {
  return await prisma.shortUrl.findUnique({
    where: {
      shortCode,
    },
  });
};

export const findByUserId = async (userId: string) => {
  return await prisma.shortUrl.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const findById = async (id: string) => {
  return prisma.shortUrl.findUnique({
    where: {
      id,
    },
  });
};

export const deleteShortUrl = async (id: string) => {
  return await prisma.shortUrl.delete({
    where: {
      id,
    },
  });
};
export const findActiveShortUrl = async (shortCode: string) => {
  return prisma.shortUrl.findFirst({
    where: {
      shortCode,
      isActive: true,
    },
  });
};
export const incrementClickCount = async (id: string) => {
  return prisma.shortUrl.update({
    where: {
      id,
    },
    data: {
      clickCount: {
        increment: 1,
      },
    },
  });
};
