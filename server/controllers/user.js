import { createError } from "../error.js";
import humanitiesstudent  from '../models/HumanitiesStudents.js'

export const update = async (req, res, next) => {
    if(req.params.id === req.user.id) {
        try {
            const updatedUser = await humanitiesstudent.findByIdAndUpdate(
                req.params.id,
                {
                $set: req.body,
                },
                {new: true }
            );
            res.status(200).json(updatedUser);
        }catch(err) {
            next(err)
        }
    }else {
        return next(createError(403, "You can only update your account"))
    }
};
export const vote = async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id, {
            $push: { votedUsers: req.params.id },
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { voters: 1},
        });
        res.status(200).json("Vote successful")
    } catch (err) {
        next(err);
    }
};

export const getUser = (req, res, next) => {};
export const like = (req, res, next) => {
};
export const dislike = (req, res, next) => {};
