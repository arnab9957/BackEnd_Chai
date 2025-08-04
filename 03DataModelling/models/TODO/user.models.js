import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        //For a Login page
        username: {
            type: String,
            required: true,
            unique: true,
            lowecase: true
        },
        email: {
            type: String,
            required: true,
            lowecase: true
        },
        password: {
            type: String,
            required: [true, "pass is required"]
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)