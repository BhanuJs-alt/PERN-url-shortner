import { Router } from "express";
import {
  register,
  login,
  userProfile,
} from "../controllers/auth.controller.ts";
import authMiddleware from "../middleware/auth.middleware.ts";
import validate from "../middleware/validate.ts";
import {
  createUserValidator,
  loggedUserValidator,
} from "../validators/auth.validators.ts";

const router = Router();

router.post("/register", validate(createUserValidator), register);
router.post("/login", validate(loggedUserValidator), login);
router.get("/me", authMiddleware, userProfile);
export default router;
