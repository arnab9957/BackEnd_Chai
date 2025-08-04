import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categories",
            required: true,
        },
        stock: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UsersSchema"
        }

    },
    {
        timestamps: true
    }
)


export const ProductSchema = mongoose.model("ProductSchema", productSchema)