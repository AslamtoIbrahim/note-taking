import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import dotenv from "dotenv";
dotenv.config();

export const auth = betterAuth({
  database: new Database("./notes.db"),
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["http://localhost:5173", "http://127.0.0.1:5173"],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
