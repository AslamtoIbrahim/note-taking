import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dotenv from "dotenv";
import clientPromise from "../db/note-db.js";
dotenv.config();

let db: any

clientPromise.then((client) => {
  db = client.db(); // use the default database specified in the connection string
  console.log("✅ MongoDB db object ready")
}).catch((err) => {
  console.error("Failed to connect to database", err);
});

export const auth = betterAuth({
  database: mongodbAdapter(db),
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
    "https://beautiful-cassata-eb7dbf.netlify.app",
    "https://note-taking-woad.vercel.app",
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
