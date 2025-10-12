import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dotenv from "dotenv";
import { client } from "../db/note-db.js";
dotenv.config();

export const auth = betterAuth({
  database: mongodbAdapter(client.db("notes_taking")),
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
