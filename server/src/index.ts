import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHanddler.ts";
import authroute from "./routes/auth.routes.ts";
import urlroute from "./routes/url.routes.ts";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "server is running",
  });
});

// 3. THE GLOBAL ERROR HANDLER (Must be last!)
app.use(errorHandler);
app.use("/api/auth", authroute);
app.use("/api/url", urlroute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running at Port", PORT);
});
