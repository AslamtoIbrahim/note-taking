import type { JSONContent } from "@tiptap/react";

export type Note = {
  _id: string;
  title: string;
  content: JSONContent;
  tags: string[];
  lastEdit: Date | null;
  archivedAt: Date | null;
  deletedAt: Date | null;
};


export type NotePartial = Partial<Note>

export type Notes = {
  notes: Note[]
  nextCursor: string | null
}

export type NoteState = {
  notes: Note[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  noteDetails: Note | null;
};
