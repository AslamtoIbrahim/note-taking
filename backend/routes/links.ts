import express from "express";
import {
  addLink,
  deleteLink,
  populateNotes,
  populateTags,
} from "../controllers/link-note-tag-controllers";

const linksRouter = express.Router();

linksRouter.put("/api/v1/link", addLink);

linksRouter.delete("/api/v1/link/:id", deleteLink);

linksRouter.get("/api/v1/note-links", populateNotes);

linksRouter.get("/api/v1/tag-links", populateTags);

export default linksRouter;
