import axios from "axios";
import type { Note, NotePartial, Notes } from "../utils/types";

export const getQueryNotes = async ({
  pageParam,
}: {
  pageParam: string | null;
}) => {
  const res = await axios.get<Notes>("http://localhost:3000/api/v1/notes", {
    params: {
      limit: 8,
      cursor: pageParam,
    },
  });

  return res.data;
};

type QueryType = {
  queryKey: [string, string];
};
// queryKey: ["note", id]
export const getQueryNoteById = async ({ queryKey }: QueryType) => {
  const [, id] = queryKey;
  const res = await axios.get<Note>(
    `http://localhost:3000/api/v1/all-notes/${id}`,
  );
  return res.data;
};

export const addQueryNote = async (newNote: NotePartial) => {
  await axios.post<Note>("http://localhost:3000/api/v1/note", newNote);
};

type UpdateNoteType = {
  id: string;
  note: NotePartial;
};

export const updateQueryNote = async ({ id, note }: UpdateNoteType) => {
  await axios.put<Note>(`http://localhost:3000/api/v1/note/${id}`, note);
};

export const deleteQueryNote = async (id: string) => {
  await axios.delete(`http://localhost:3000/api/v1/note/${id}`);
};

export const archiveQueryNote = async (id: string) => {
  await axios.put(`http://localhost:3000/api/v1/archives/${id}`);
};

export const getArchiveNotes = async ({
  pageParam,
}: {
  pageParam: string | null;
}) => {
  const res = await axios.get<Notes>(`http://localhost:3000/api/v1/archives`, {
    params: { limit: 6, cursor: pageParam },
  });
  console.log('archives: ',res.data);
  return res.data;
};


export const unarchiveNote = async (id: string) => {
  await axios.put(`http://localhost:3000/api/v1/unarchive/${id}`)
};
