import mongoose, { Schema } from "mongoose";
import "mongoose-type-email";

// 1. Create a Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: ["true", "password is required."], // custom error message
    },
  },
  {
    timestamps: true, // This will include createdAt and updatedAt
  }
);

// 2. Exporting has a special syntax. We export a model of the schema
export const User = mongoose.model("User", userSchema); // Collection name and Schema Name
