import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import humanitiesstudent from '../models/HumanitiesStudents.js';
import { createError } from '../error.js';
import jwt from 'jsonwebtoken';



export const signup = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new humanitiesstudent ({...req.body, password: hash});

        await newUser.save();
        res.status(200).send("user has been created")
    } catch (err) {
        next(err)
    }
}

export const signin = async (req, res, next) => {
    try{
        const user = await humanitiesstudent.findOne({student_id:req.body.student_id})
        if(!user) return next(createError(404, 'User not found'))

        const isCorrect = await bcrypt.compare(req.body.password, user.password)

        if(!isCorrect) return next(createError(400, 'Wrong credentials'))
        
        const token = jwt.sign({id:user._id}, process.env.JWT);
        const {password, ...others} = user._doc;

        res.cookie("access_token", token, {
            httpOnly:true
        })
        .status(200)
        .json(others);
    } catch (err) {
        next(err)
    }
}