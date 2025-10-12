// import cors from "cors";
import cors from "cors";
import express from "express";
import connectNoteDB from "./db/note-db.js";
import { authenticateUser } from "./middlewares/authMiddlerware.js";
import authRouter from "./routes/auth.js";
import noteRouter from "./routes/notes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const prot = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running....");
});

connectNoteDB();

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

// protect all routes after this middleware
app.use(authenticateUser);

app.use(express.json());

app.use("/", noteRouter);

app.listen(prot, () =>
  console.log(`Server running on http://localhost:${prot}`)
);