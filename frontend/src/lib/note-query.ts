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
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });

  return res.data;
};

type QueryType = {
  queryKey: string[];
};
// queryKey: ["note", id]
export const getQueryNoteById = async ({ queryKey }: QueryType) => {
  const [, id] = queryKey;
  const res = await axios.get<Note>(
    `http://localhost:3000/api/v1/all-notes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
      },
      withCredentials: true,
    },
  );
  return res.data;
};

export const addQueryNote = async (newNote: NotePartial) => {
  await axios.post<Note>("http://localhost:3000/api/v1/note", newNote, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
};

type UpdateNoteType = {
  id: string;
  note: NotePartial;
};

export const updateQueryNote = async ({ id, note }: UpdateNoteType) => {
  await axios.put<Note>(`http://localhost:3000/api/v1/note/${id}`, note, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
};

export const deleteQueryNote = async (id: string) => {
  await axios.delete(`http://localhost:3000/api/v1/note/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
};

export const deleteForeverQueryNote = async (id: string) => {
  await axios.delete(`http://localhost:3000/api/v1/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
};

export const archiveQueryNote = async (id: string) => {
  await axios.put(`http://localhost:3000/api/v1/archives/${id}`,{}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
};

export const getArchiveNotes = async ({
  pageParam,
}: {
  pageParam: string | null;
}) => {
  const res = await axios.get<Notes>(`http://localhost:3000/api/v1/archives`, {
    params: { limit: 6, cursor: pageParam },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
  return res.data;
};

export const unarchiveNote = async (id: string) => {
  await axios.put(`http://localhost:3000/api/v1/unarchive/${id}`,{},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
      },
      withCredentials: true,
    }
  );
};

export const searchNotes = async ({
  pageParam,
  queryKey,
}: {
  pageParam: string | null;
  queryKey: [string, string];
}) => {
  const [, search] = queryKey;
  const res = await axios.get<Notes>(`http://localhost:3000/api/v1/search`, {
    params: { search, cursor: pageParam, limit: 6 },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
  return res.data;
};

export const getAndSearchTags = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [, search] = queryKey;
  const res = await axios.get<string[]>(`http://localhost:3000/api/v1/tags`, {
    params: { search },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
  return res.data;
};

export const getTrashNotes = async ({
  pageParam,
  queryKey,
}: {
  pageParam: string | null;
  queryKey: [string, string];
}) => {
  const [, search] = queryKey;
  const res = await axios.get<Notes>("http://localhost:3000/api/v1/trash", {
    params: { limit: 3, search, cursor: pageParam },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });

  return res.data;
};

export const restoreQueryNote = async ({ id, note }: UpdateNoteType) => {
  await axios.put<Note>(`http://localhost:3000/api/v1/restore/${id}`, note,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
      },
      withCredentials: true,
    },
  );
};
