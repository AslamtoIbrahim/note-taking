import { useNavigate } from "react-router-dom";
import useSession from "../lib/auth-session";
import { useEffect } from "react";

export const useRequireAuth = (redirectTo = "/sign-in") => {
  const { data: session, isPending, refetch } = useSession();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('🌮 se: ', session)
    if (!isPending && !session) {
      navigate(redirectTo)
    }
  }, [session, isPending, navigate, redirectTo]);

  return session
};
