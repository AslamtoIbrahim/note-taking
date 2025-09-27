import express from "express";
import NoteModel from "../models/note-model.ts";

export const getQueryNotes = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { limit, cursor } = req.query;
    const limitNumber = Number(limit) || 10;

    let query = {};
    if (cursor) {
      query = { _id: { $gt: cursor } };
    }

    const notes = await NoteModel.find(query)
      .sort({ createdAt: 1 })
      .limit(limitNumber);

    if (!notes) {
      res.status(404).json({ message: "Notes not found" });
    }

    const nextCursor = notes.length > 0 ? notes[notes.length -1]._id : null
    
    res.json({ notes, nextCursor });
    
  } catch (error) {
    res.status(500).json({ message: "⛔ Error server ", error: error });
  }
};

export const getNotes = async (req: express.Request, res: express.Response) => {
  try {
    const notes = await NoteModel.find(
      {
        archivedAt: null,
        deletedAt: null,
      },
      { content: 0 }
    );
    if (!notes) {
      return res.status(400).json({ message: "failed to get notes" });
    }
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const getNoteById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "id is required" });

    const note = await NoteModel.findById(id);
    if (!note) {
      return res.status(404).json({ message: "note not found" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const getArchivedNotes = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const archivedNotes = await NoteModel.find({
      archivedAt: { $ne: null },
      deletedAt: null,
    });
    if (!archivedNotes) {
      return res.status(400).json({ message: "failed to get archived notes" });
    }
    res.json(archivedNotes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const getDeletedNotes = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const deletedNotes = await NoteModel.find({
      deletedAt: { $ne: null },
    });
    if (!deletedNotes) {
      return res.status(400).json({ message: "failed to get deleted notes" });
    }
    res.json(deletedNotes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const addNote = async (req: express.Request, res: express.Response) => {
  try {
    const { title, content, tags } = req.body;
    console.log("🟡 title: ", title);
    console.log("🟡 content: ", content);

    if (!title || !content) {
      return res.status(400).json({ message: "title or content required" });
    }

    const note = new NoteModel({
      title,
      content,
      tags: tags || [],
      lastEdit: new Date(),
    });

    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const updateNote = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log("🟡 updateNote: ");
    const { id } = req.params;
    const { title, content, tags } = req.body;

    if (!id) {
      return res.status(400).json({ message: "id required to update" });
    }

    if (!title || !content) {
      return res.status(400).json({ message: "Nothing to update" });
    }

    const updatedNote = await NoteModel.findByIdAndUpdate(
      id,
      {
        title,
        content,
        tags: tags || [],
        lastEdit: new Date(),
      },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(201).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

// soft delete using update
export const deleteNote = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "id required to update" });
    }
    const deletedNote = await NoteModel.findByIdAndUpdate(
      id,
      { deletedAt: new Date() },
      { new: true }
    );
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });

    res.json(deletedNote);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};
