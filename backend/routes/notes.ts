import express from "express";
import {
  addNote,
  archiveNote,
  deleteNote,
  getAndSearchTags,
  getArchives,
  getNoteById,
  getQueryNotes,
  getSearchedNotes,
  unarchiveNote,
  updateNote,
} from "../controllers/note-controllers.ts";

const noteRouter = express.Router();

// noteRouter.get('/api/v1/all-notes', getNotes)

noteRouter.get("/api/v1/notes", getQueryNotes);

noteRouter.get("/api/v1/all-notes/:id", getNoteById);

noteRouter.post("/api/v1/note", addNote);

noteRouter.put("/api/v1/note/:id", updateNote);

noteRouter.delete("/api/v1/note/:id", deleteNote);

noteRouter.get("/api/v1/archives", getArchives);

noteRouter.put("/api/v1/archives/:id", archiveNote);

noteRouter.put("/api/v1/unarchive/:id", unarchiveNote);

noteRouter.get("/api/v1/search", getSearchedNotes);

noteRouter.get("/api/v1/tags", getAndSearchTags);

export default noteRouter;
