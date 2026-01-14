import express from "express";
import "dotenv/config";
import prisma from "./lib/prisma.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.get("/users", async (_req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ message: "User Fetched!", users });
  } catch (error) {
    next(error);
  }
});

app.post("/auth/signup", async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const isExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isExist)
      return res.status(403).json({ message: "User already exist!" });
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json({ message: "User created!", user });
  } catch (error) {
    next(error);
  }
});

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, _req, res, _next) => {
  console.error("Server Error:", err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
