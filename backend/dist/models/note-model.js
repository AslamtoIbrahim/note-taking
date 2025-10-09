"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const NoteSchema = new mongoose_1.default.Schema({
    userId: { type: String, required: true },
    title: { type: String, default: "" },
    tags: [String],
    content: { type: mongoose_1.default.Schema.Types.Mixed, required: true },
    lastEdit: { type: Date, default: null },
    archivedAt: { type: Date, default: null },
    deletedAt: { type: Date, default: null },
}, { timestamps: true });
// to delete authomatically note after 30 days 30 * 24 * 60 * 60
NoteSchema.index({ deleteAt: 1 }, { expireAfterSeconds: 2592000 });
const NoteModel = mongoose_1.default.model("Note", NoteSchema);
exports.default = NoteModel;
