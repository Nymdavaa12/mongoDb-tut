import mongoose, { Schema } from "mongoose";

const user = new Schema({
  email: { type: String },
  firstName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model("User", UserSchema);
