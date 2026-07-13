import { Router } from "express";
import { createShortUrl, getUrls } from "../controllers/url.controller.ts";
import authMiddleware from "../middleware/auth.middleware.ts";
import validate from "../middleware/validate.ts";
import { createShortUrlSchema } from "../validators/url.validator.ts";

const router = Router();

router.post(
  "/short-url",
  authMiddleware,
  validate(createShortUrlSchema),
  createShortUrl,
);
router.get("/short-url", authMiddleware, getUrls);

export default router;
