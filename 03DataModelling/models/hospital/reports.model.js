import mongoose from "mongoose";

const reportsSchema = new mongoose.Schema(
    {

    },
    {timeStamps: true}
)

export const Report = mongoose.model("Reports", reportsSchema)