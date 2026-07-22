import { Router } from "express";
import { getAnalyticsController } from "../controllers/analytics.controller.ts";

const router = Router();

router.get("/:urlId", getAnalyticsController);
export default router;
