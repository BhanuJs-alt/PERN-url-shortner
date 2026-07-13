import { Request, Response, NextFunction } from "express";
import * as redirectService from "../services/redirect.service.ts";

export const redirect = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const shortCode = req.params.shortCode;
    const originalUrl = await redirectService.redirect(shortCode, req);

    return res.redirect(originalUrl);
  } catch (error) {
    next(error);
  }
};
