import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectNoteDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("✅ mongoDB is connected");
  } catch (error) {
    console.log("❌ error: ", error);
  }
};

export default connectNoteDB;
