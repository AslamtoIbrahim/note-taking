import express from "express";
import { auth } from "../lib/auth.ts";
import { fromNodeHeaders } from "better-auth/node";

export const authenticateUser = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session?.user) {
    return res.status(401).json({ error: "You are not signed in" });
  }

  req.user = session.user;
  next();
};
