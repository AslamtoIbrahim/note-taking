import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  noteId: { type: mongoose.Schema.Types.ObjectId, ref: "Note" },
  tagId: { type: mongoose.Schema.Types.ObjectId, ref: "Tag" },
});

const Link = mongoose.model("Link", linkSchema);

export default Link;
