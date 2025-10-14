import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { authenticateUser } from "./middlewares/authMiddlerware.js";
import authRouter from "./routes/auth.js";
import noteRouter from "./routes/notes.js";
import tagsRouter from "./routes/tags.js";
import linksRouter from "./routes/links.js";
dotenv.config();

const app = express();

const prot = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running....");
});


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://beautiful-cassata-eb7dbf.netlify.app",
      "https://note-taking-woad.vercel.app",
    ],
    credentials: true,
  })
);

app.use("/", authRouter);

// protect all routes after this middleware : provides user id req object
app.use(authenticateUser);

app.use(express.json());

app.use("/", noteRouter);

app.use("/", tagsRouter);

app.use("/", linksRouter);

app.listen(prot, () =>
  console.log(`Server running on http://localhost:${prot}`)
);