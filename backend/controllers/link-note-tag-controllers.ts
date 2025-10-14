import type { Request, Response } from "express";
import Link from "../models/note-tag-link";

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
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "id not found" });
    }

    const link = Link.findByIdAndDelete(id);
    res.status(200).json({ message: "a link deleted successfully", link });
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};



export const populateTags = async (req: Request, res: Response) => {
  try {
    const {noteId} = req.params
    if (!noteId) {
      return res.status(404).json({ message: "noteId not found" });
    }
    const tags = await Link.find({userId: req.user?.id, noteId}).populate("noteId")
    res.json(tags)
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};

export const populateNotes = async (req: Request, res: Response) => {
  try {
    const {tagId} = req.params
    if (!tagId) {
      return res.status(404).json({ message: "tagId not found" });
    }
    const notes = await Link.find({userId: req.user?.id, tagId}).populate("tagId")
    res.json(notes)
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};