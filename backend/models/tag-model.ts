import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
  }
);

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
