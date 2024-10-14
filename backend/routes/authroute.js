import express from "express";
import { signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/login", (req, res) => {
  res.send("This is login page");
});

// router.get("/logout", logout);

export default router;

