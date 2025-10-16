import type { Request, Response } from "express";
import Link from "../models/note-tag-link.js";

export const getLinks = async (req: Request, res: Response) => {
  try {
    const links = await Link.find().populate({ path: "tagId" });

    if (!links) {
      return res.status(404).json({ message: "no links 🦝" });
    }
    res.json(links);
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};

export const addLink = async (req: Request, res: Response) => {
  try {
    const { noteId, tagId } = req.body;
    if (!noteId || !tagId) {
      return res.status(404).json({ message: "noteId or tagId not found" });
    }

    const link = await Link.create({
      userId: req.user?.id,
      noteId,
      tagId,
    });

    res.status(201).json({ message: "new link added successfully", link });
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};

export const deleteLink = async (req: Request, res: Response) => {
  try {
    const { noteId, tagId } = req.query;
    if (!noteId || !tagId) {
      return res.status(400).json({ message: "noteId, tagId are required" });
    }
    console.log("ids: ", noteId, tagId);
    const link = await Link.findOneAndDelete({
      userId: req.user?.id,
      noteId,
      tagId,
    });
    console.log("link: ", link);

    res.status(200).json({ message: "a link deleted successfully", link });
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};

export const populateTags = async (req: Request, res: Response) => {
  try {
    const { noteId } = req.query;
    if (!noteId) {
      // return res.status(404).json({ message: "noteId not found" });
      return res.json([]);
    }
    const tags = await Link.find({ userId: req.user?.id, noteId })
      .sort({ _id: -1 })
      .populate("tagId");
    if (!tags) {
      return res.json([]);
    }
    res.json(tags);
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};

export const populateNotes = async (req: Request, res: Response) => {
  try {
    const { cursor, tagId, limit } = req.query;
    let query: any = { userId: req.user?.id, tagId };
    if (cursor) {
      query._id = { $lt: cursor };
    }
    if (!tagId) {
      return res.status(404).json({ message: "tagId not found" });
    }

    const notes = await Link.find(query)
      .sort({ _id: -1 })
      .limit(Number(limit) || 3)
      .populate("noteId");
    if (!notes) {
      return res.json([]);
    }
    const nextCursor = notes.length > 0 ? notes[notes.length - 1]._id : null;
    res.json({ notes, nextCursor });
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};
