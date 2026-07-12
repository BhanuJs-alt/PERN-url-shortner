import { createShortUrl } from "../repositories/url.repository.ts";
import generateShortCode from "../utils/generateShortCode.ts";
import { CreateShortUrlData } from "../types/url.types.ts";

export const createUrl = async (data: CreateShortUrlData) => {
  const shortCode = await generateShortCode();
  const url = await createShortUrl({
    originalUrl: data.originalUrl,
    shortCode,
    user: {
      connect: {
        id: data.userId,
      },
    },
  });
  return url;
};
