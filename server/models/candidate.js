import mongoose from 'mongoose';

const CandidateSchema = new mongoose.Schema(
    {
        name: { type: String, required:true, unique: true },
        position: { type: String, required:true},
        school: { type: String, required:true },
        major: { type: String, required:true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Candidate = mongoose.model("candidate", CandidateSchema);
export default Candidate;