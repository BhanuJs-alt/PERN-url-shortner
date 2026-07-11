import * as authservice from "../services/auth.services.ts";
import { Request, Response, NextFunction } from "express";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { user, token } = await authservice.register(req.body);

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({
        user,
        message: "user registered successfully",
      });
  } catch (error) {
    next(error);
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { user, token } = await authservice.login(req.body);

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({
        user,
        message: "login successfully",
      });
  } catch (error) {
    next(error);
  }
};

export const userProfile = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.json({
      user: user,
      message: "Hii",
    });
  } catch (error) {
    next(error);
  }
};
