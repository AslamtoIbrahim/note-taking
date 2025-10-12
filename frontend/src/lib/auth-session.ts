import { createAuthClient } from "better-auth/react";
import { baseURL } from "./auth-client";

const { useSession } = createAuthClient({
  baseURL,
  fetchOptions: {
    credentials: "include",
  },
});

export default useSession;
