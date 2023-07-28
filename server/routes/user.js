import express from 'express';
import { update, vote, getUser, like, dislike } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//update user
router.put("/:id", verifyToken, update);


//vote for a candidate
router.put("/vote/:id", verifyToken, vote)

router.get("/find/:id", getUser);

router.put("/like/:postid", verifyToken, like);

router.put("/dislike/:postid", verifyToken,  dislike);

export default router;