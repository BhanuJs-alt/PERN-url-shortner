import { Router } from "express";
import { createShortUrl, getUrls } from "../controllers/url.controller.ts";
import authMiddleware from "../middleware/auth.middleware.ts";
import validate from "../middleware/validate.ts";
import { createShortUrlSchema } from "../validators/url.validator.ts";

const router = Router();

router.post(
  "/",
  authMiddleware,
  validate(createShortUrlSchema),
  createShortUrl,
);
router.get("/", authMiddleware, getUrls);

export default router;
