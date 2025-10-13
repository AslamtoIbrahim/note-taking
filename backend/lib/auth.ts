import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dotenv from "dotenv";
import clientPromise from "../db/note-db.js";
dotenv.config();

const client = await clientPromise;

export const auth = betterAuth({
  database: mongodbAdapter(client.db("notes_taking")),
  secret: process.env.BETTER_AUTH_SECRET,
  advanced: {
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
      httpOnly: true,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [
    "https://beautiful-cassata-eb7dbf.netlify.app",
    "https://note-taking-woad.vercel.app",
    "http://localhost:5173",
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
