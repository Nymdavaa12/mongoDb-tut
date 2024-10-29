import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const connectDb = () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Database Connected"));
  } catch (error) {
    console.log(error);
  }
};
