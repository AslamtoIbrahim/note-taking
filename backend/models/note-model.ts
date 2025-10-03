import mongoose from "mongoose";
 
 

const NoteSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, default: "" },
    tags: [String],
    content: { type: mongoose.Schema.Types.Mixed, required: true },
    lastEdit: { type: Date, default: null },
    archivedAt: { type: Date, default: null },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

// to delete authomatically note after 30 days 30 * 24 * 60 * 60
NoteSchema.index({ deleteAt: 1 }, { expireAfterSeconds: 2592000 });

const NoteModel = mongoose.model("Note", NoteSchema);

export default NoteModel;
