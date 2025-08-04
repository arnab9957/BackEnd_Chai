import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        doctors: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Doctor"
            }
        ]
    },
    { timestamps: true }
)

export const Hospital = mongoose.model("Hospital", hospitalSchema)
