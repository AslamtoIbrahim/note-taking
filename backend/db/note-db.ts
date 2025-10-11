import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
dotenv.config();

const uri = process.env.MONGO_URI as string;
export const client = new MongoClient(uri);

const connectNoteDB = async () => {
  try {
    await client.connect();
    console.log("✅ mongoDB Atlas is connected successfully for better_auth");

    await mongoose.connect(uri);
    console.log("✅ mongoDB Atlas is connected successfully for mongoose");
  } catch (error) {
    console.log("❌ error: ", error);
  }
};

export default connectNoteDB;
