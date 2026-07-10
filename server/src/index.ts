import express from "express";
import dotenv from "dotenv";
import prisma from "./config/prisma.ts";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "server is running",
  });
});
app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(201).json({
      success: true,
      message: "user created",
      user,
    });
  } catch (error: any) {
    console.log(error.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      message: "all users",
      users,
    });
  } catch (error) {
    console.log(error.message);
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running at Port", PORT);
});
