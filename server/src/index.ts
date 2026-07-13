import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHanddler.ts";
import authRoute from "./routes/auth.routes.ts";
import urlRoute from "./routes/url.routes.ts";
import redirectRoute from "./routes/redirect.routes.ts";

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

app.use("/api/auth", authRoute);
app.use("/api/url", urlRoute);
app.use("/", redirectRoute);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running at Port", PORT);
});
