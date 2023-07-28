import Candidate from '../models/candidate.js';
import candidatestat from '../models/candidatestat.js';

export const getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find();

        const candidatewithStats = await Promise.all(
            candidates.map(async (candidate) => {
                const stat = await candidatestat.find({
                    candidateId: candidate._id
                })
                return {
                    ...candidate._doc,
                    stat,
                }
            })
        );

        res.status(200).json(candidatewithStats)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}