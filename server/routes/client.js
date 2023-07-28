import express from 'express';
import { getCandidates } from '../controllers/client.js';

const router = express.Router();


router.get("/candidates", getCandidates);

export default router;