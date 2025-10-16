import type { JSONContent } from "@tiptap/react";

export type Note = {
  _id: string;
  title: string;
  content: JSONContent;
  lastEdit: Date | null;
  archivedAt: Date | null;
  deletedAt: Date | null;
};

export type Tag = {
  _id: string;
  title: string;
};

export type AxiosTag = {
  tags: Tag[];
  nextCursor: string | null;
};

export type NotePartial = Partial<Note>;

export type AxiosNotes = {
  notes: Note[];
  nextCursor: string | null;
};

export type NoteState = {
  notes: Note[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  noteDetails: Note | null;
};

export type UpdateNoteType = {
  id: string;
  note: NotePartial;
};

export const fullback: JSONContent = {
  type: "doc",
};

export type TagLink = {
  userId: string;
  noteId: string;
  tagId: Tag;
};
export type NoteLink = {
  userId: string;
  noteId: Note;
  tagId: string;
};

export type AxiosNoteLink = {
  notes: NoteLink[];
  nextCursor: string | null;
}

export type AxiosLink = {
  noteId: string;
  tagId: string;
};
