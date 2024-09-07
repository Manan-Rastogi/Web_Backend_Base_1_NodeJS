import mongoose from "mongoose";

const todoSchema = new Schema(
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
      // relating Todo with user
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // name of the collection you gave
    },
    subTodos: [
      {
        // an array of object
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
