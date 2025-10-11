import { createAuthClient } from "better-auth/react";
const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://note-taking-woad.vercel.app";

const {useSession} = createAuthClient({
    baseURL,
})

export default useSession