import HumanitiesStudents from "../models/HumanitiesStudents.js";
import Candidate from "../models/candidate.js";

export const addCandidate = async (req, res, next) => {
    try{
        const candidate = await Candidate.create(req.body)
        res.status(200).json(candidate);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

export const school = async (req, res, next) => {
    try{
        const candidates = await Candidate.find().sort({category: school});
        res.status(200).json(candidates);
    } catch(err)  {
        next(err);
    }
};

export const deleteCandidate = async (req, res, next) => {
    try{

    }catch(err){
        next(err)
    }
    
}


export const getBySchool = async (req, res, next) => {
    const school = req.query.school.split(",");
    try{
        const candidate = await Candidate.find({ school : { $in: school }}).limit(10);
        res.status(200).json(candidate);
    }catch(err) {
        next(err)
    }
    
}