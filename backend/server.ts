import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.ts";

const app = express();
const prot = 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);

app.use("/", authRouter);

app.use(express.json());

app.listen(prot, () =>
  console.log(`Server running on http://localhost:${prot}`)
);
