import expresss from "express";
import { posts } from "../controllers/postsController.js";

const router = expresss.Router();

router.get("/", posts);

export default router;