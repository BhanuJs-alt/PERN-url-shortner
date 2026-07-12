import * as urlServices from "../services/url.services.ts";
import { Request, Response, NextFunction } from "express";

export const createShortUrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await urlServices.createUrl({
      originalUrl: req.body.originalUrl,
      userId: req.user!.id,
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
