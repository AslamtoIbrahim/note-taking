import type { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import NoteModel from "../models/note-model.js";


export const createFirstNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const db = mongoose.connection.db;
    if(!db){
      throw new Error("Mongodb is not connected yet"); 
    }

    const collection = await db.listCollections({ name: "notes" }).toArray();
    if (collection.length === 0) {
      const note = new NoteModel({
        userId: req.user?.id,
        title: "Welcome to Notes Taking App",
        content: {
          type: "doc",
        },
        tags: [],
        lastEdit: new Date(),
      });

      await note.save();
      console.log("✅ Collection created!");
    }
    next();
  } catch (error) {
    console.error("Error creating collection:", error);
    next(error);
  }

};