import mongoose from 'mongoose';

const OrderItemSchma = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductSchema",
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        }
    }
)

const addressSchema = new mongoose.Schema(
    {
        villORCity:{
            type: String,
            required: true
        },
        landMark:{
            type: String,
            required: true
        },
        PIN:{
            type: Number,
            required: true
        }
    }
)

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type:Number,
            required: true
        },
        customer: {
            type: String,
            required: true  
        },
        orderItems: [OrderItemSchma],
        address: [addressSchema],
        status: {
            type: String,
            enum: ["PENDING", "CANCLED", "DELIVERED"]
        }

    },
    {timestamps: true}
)