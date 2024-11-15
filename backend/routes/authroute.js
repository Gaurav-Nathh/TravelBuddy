import express from "express";
import { forgotPassword, login, logout, resetPassword, signup, verifyEmail, checkAuth } from "../controllers/authController.js";
import { verfiyToken } from "../middleware/verfiyToken.js";

const router = express.Router();

router.get("/check-auth", verfiyToken, checkAuth);

router.post("/signup", signup);

router.post("/login", login);

router.post("/verify-email", verifyEmail);

router.post("/forgot-password", forgotPassword)

router.post("/reset-password/:token", resetPassword);

router.post("/logout", logout);

export default router;

