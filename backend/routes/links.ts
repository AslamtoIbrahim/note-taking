import express from "express";
import {
  addLink,
  deleteLink,
  getLinks,
  populateNotes,
  populateTags,
} from "../controllers/link-note-tag-controllers.js";

const linksRouter = express.Router();

linksRouter.get("/api/v1/links", getLinks);

linksRouter.put("/api/v1/link", addLink);

linksRouter.delete("/api/v1/link", deleteLink);

linksRouter.get("/api/v1/tag-links", populateTags);

linksRouter.get("/api/v1/note-links", populateNotes);

export default linksRouter;
