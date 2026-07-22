import { getAnalytics } from "../services/analytics.service.ts";
import { Request, Response, NextFunction } from "express";

export const getAnalyticsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { urlId } = req.params;
    const analytics = await getAnalytics(urlId);
    res.status(200).json(analytics);
  } catch (error) {
    next(error);
  }
};
