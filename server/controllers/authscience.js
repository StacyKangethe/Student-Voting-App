import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import sciencestudent from '../models/ScienceStudents.js';

export const signupscience =async (req, res) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new sciencestudent ({...req.body, password: hash});

        await newUser.save();
        res.status(200).send("user has been created")
    } catch (err) {

    }
}