import mongoose from "mongoose";

const categories = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
)

export const Categories = mongoose.model("Categories", categories)