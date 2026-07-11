import express from "express";
import dotenv from "dotenv";
import authroute from "./routes/auth.routes.ts";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "server is running",
  });
});

app.use("/api/auth", authroute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running at Port", PORT);
});
