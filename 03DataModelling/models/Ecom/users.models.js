import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            lowercase: true     
        },
        password: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)

export const UsersSchema = mongoose.model("UsersSchema", userSchema)