import { configDotenv } from "dotenv";
import express from "express";
import { connectDb } from "./db/connectDB.js";
import authroute from "./routes/authroute.js"
import postsroute from "./routes/postsroute.js"

configDotenv();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Travel Buddy! Hello mayank");
});

app.use("/api/auth", authroute);

app.use("/api/posts", postsroute);

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`);
  connectDb();
});
