import mongoose, { SchemaTypeOptions } from "mongoose";

const toduSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        subTodo: [
            //Array of SubTodos
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "subtodo",
            },
        ],
    },
    { timestamps: true }
);

export const Todo = mongoose.model("Todo", toduSchema);
