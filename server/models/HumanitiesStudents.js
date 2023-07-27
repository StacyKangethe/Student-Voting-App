import mongoose from 'mongoose';

const HumanitiesSchema = new mongoose.Schema(
    {
        student_id: { type: Number, required:false, unique: true },
        email: { type: String, required:true, unique: true },
        password: { type: String, required:true },
        school: { type: String, required:false },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("humanitiesstudent", HumanitiesSchema);