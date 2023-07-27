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
export const deleteUser = (req, res, next) => {};
export const getUser = (req, res, next) => {};
export const like = (req, res, next) => {};
export const dislike = (req, res, next) => {};
