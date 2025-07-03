// routes/authRoutes.js
import express from 'express';
import { signup, login, forgotPassword } from '../controllers/authController.js';
import auth from '../middleware/authMiddleware.js';
const router = express.Router();

import { getProfile, saveFeedback } from "../controllers/authController.js";

router.get("/profile", auth(), getProfile);
router.post("/feedback", auth(), saveFeedback);
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);


export default router;