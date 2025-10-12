import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
dotenv.config();

const uri = process.env.MONGO_URI as string;

if (!uri) {
  throw new Error("MONGO_URI is not defined in .env file");
}

let clientPromise: Promise<MongoClient>;

if (!(global as any)._mongoClientPromise) {
  const client = new MongoClient(uri);
  (global as any)._mongoClientPromise = client.connect().then(() => {
    console.log("✅ mongoDB Atlas is connected successfully for better_auth");
    return client;
  }).catch((err) => { 
    console.log("❌ error: ", err);
  });
}

clientPromise = (global as any)._mongoClientPromise;


// mongoose connection
if (mongoose.connection.readyState === 0) {
  mongoose.connect(uri).then(() => {
    console.log("✅ mongoDB Atlas is connected successfully for mongoose");
  }).catch((err) => {
    console.log("❌ error: ", err);
  });
}

 

export default clientPromise;
