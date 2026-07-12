import { Router } from "express";
import { createShortUrl } from "../controllers/url.controller.ts";
import authMiddleware from "../middleware/auth.middleware.ts";
import validate from "../middleware/validate.ts";
import { createShortUrlSchema } from "../validators/url.validator.ts";

const router = Router();

router.post(
  "/shorten",
  authMiddleware,
  validate(createShortUrlSchema),
  createShortUrl,
);

export default router;
