import express from "express";
import { signup, verifyEmail } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/verify-email", verifyEmail);

router.get("/login", (req, res) => {
  res.send("This is login page");
});

export default router;

