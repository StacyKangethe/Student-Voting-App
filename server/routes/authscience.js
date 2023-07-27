import express from 'express';
import { signupscience } from '../controllers/authscience.js';

const router = express.Router();

router.post("/signupscience", signupscience);

export default router;