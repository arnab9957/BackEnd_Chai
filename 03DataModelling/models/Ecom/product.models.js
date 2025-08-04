import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
    {
         
    },
    {
        timestamps: true
    }
)


export const ProductSchema = mongoose.model("ProductSchema", productSchema)