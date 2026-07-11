import { Request, Response, NextFunction } from "express";

// 1. Define what your custom error looks like
export interface AppError extends Error {
  statusCode?: number;
}

// 2. The Error Handler Middleware
const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // Log the error for debugging
  console.error(`[Error]: ${err.message}`);

  // Default to 500 if no status code is set
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Send the response
  res.status(statusCode).json({
    success: false,
    error: {
      message: message,
      // Only show the stack trace in development mode
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    },
  });
};

export default errorHandler;
