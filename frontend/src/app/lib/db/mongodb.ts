import mongoose from "mongoose";
const URI = process.env.MONGODB_URI as string;
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected");
  } catch (error) {
    console.log(error)
  }
};
