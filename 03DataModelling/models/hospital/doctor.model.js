import mongoose from "mongoose";

const hospitalHours = mongoose.Schema(
    {
        day: {
            type: String,   // e.g., "Monday", "Tuesday"
            required: true
        },
        startTime: {
            type: String,   // e.g., "09:00"
            required: true
        },
        endTime: {
            type: String,   // e.g., "17:00"
            required: true
        },
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true
        }
    }
)

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        specialization: {
            type: String,
            required: true
        },
        experience: {
            type: Number,
            required: true
        },
        patients: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Patient"
            }
        ],
        workInHospital: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true
        },
        hospitalHours: [hospitalHours]
    },
    { timestamps: true }
)

export const Doctor = mongoose.model("Doctor", doctorSchema)