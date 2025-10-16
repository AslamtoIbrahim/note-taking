import type { Request, Response } from "express";
import Tag from "../models/tag-model.js";

export const getTags = async (req: Request, res: Response) => {
  try {
    const { cursor, limit, search } = req.query;
    let query: any = {
      userId: req.user?.id,
    };

    if (cursor) {
      query._id = { $gt: cursor };
    }

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const tags = await Tag.find(query)
      .limit(Number(limit) || 6)
      .sort({ _id: -1 });

    if (!tags) {
      return res.status(404).json({ message: "no tags yet" });
    }

    const nextCursor = tags.length > 0 ? tags[tags.length - 1]._id : null;

    res.json({ tags, nextCursor });
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};

export const addTag = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(401).json({ message: "title tag is required" });
    }
    const tag = await Tag.create({ userId: req.user?.id, title });
    res.status(201).json(tag);
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};

export const deleteTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "id not found" });
    }
    const tag = Tag.findByIdAndDelete(id);
    res.status(200).json({ message: "a tag deleted successfully", tag });
  } catch (error) {
    res.status(505).json({ message: "Server error", error });
  }
};
