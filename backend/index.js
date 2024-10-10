import { configDotenv } from "dotenv";
import express from "express";
import { connectDb } from "./db/connectDB.js";

configDotenv();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World 123!");
});

// app.use("/api/auth",);
app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`);
  connectDb();
});
