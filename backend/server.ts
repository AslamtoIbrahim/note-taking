import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import noteRouter from "./routes/notes.js";
import connectNoteDB from "./db/note-db.js";
import { authenticateUser } from "./middlewares/authMiddlerware.js";

const app = express();

// const prot = 3000;

connectNoteDB();


app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);


app.use("/", authRouter);

// protect all routes after this middleware
app.use(authenticateUser)

app.use(express.json());

app.use("/", noteRouter);

// app.listen(prot, () =>
//   console.log(`Server running on http://localhost:${prot}`)
// );


export default app;