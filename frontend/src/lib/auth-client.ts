import { createAuthClient } from "better-auth/react";

export const baseURL = "https://note-taking-woad.vercel.app";

export const authClient = createAuthClient({
  baseURL,
});
