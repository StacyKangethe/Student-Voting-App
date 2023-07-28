import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        student_id: { type: Number, required:true, unique: true },
        email: { type: String, required:true, unique: true },
        password: { type: String, required:true },
        school: { type: String, required:true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);