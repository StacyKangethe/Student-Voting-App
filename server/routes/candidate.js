import express from 'express';
import { addCandidate } from '../controllers/candidate.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

router.get("/find/:id")
router.post("/", addCandidate);
router.put("/:id", verifyToken, addCandidate);
router.delete("/:id", verifyToken, addCandidate);



export default router;