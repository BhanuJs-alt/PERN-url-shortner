import { Router } from "express";
import { redirectUrl } from "../controllers/url.controller.ts";

const router = Router();
router.get("/:shortCode", redirectUrl);

export default router;
