import express from 'express';
import { update, deleteUser, getUser, like, dislike } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

router.put("/:id", verifyToken, update)

router.delete("/:id", deleteUser)

router.get("/:id", getUser)

router.put("/:id", like)

router.put("/:id", dislike)

export default router;