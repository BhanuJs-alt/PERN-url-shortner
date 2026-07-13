import * as urlServices from "../services/url.services.ts";
import { Request, Response, NextFunction } from "express";
import { normalizeUrl } from "../utils/url.normalization.ts";

export const createShortUrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const normalizedUrl = normalizeUrl(req.body.originalUrl);
    const result = await urlServices.createUrl({
      originalUrl: normalizedUrl,
      userId: req.user!.id,
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
export const getUrls = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await urlServices.getUrls(req.user!.id);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
