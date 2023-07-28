import mongoose from 'mongoose';

const CandidateStatSchema = new mongoose.Schema(
    {
        candidateId: { type: String, required:true, unique: true },
        position: { type: String, required:true },
        votes: { type: Array, required:true},
        votesTotal: { type: Number, required:true, default: 0},
        school: { type: String, required:true },
        date:  { type: String, required:true },
    },
    { timestamps: true }
);

export default mongoose.model("CandidateStat", CandidateStatSchema);