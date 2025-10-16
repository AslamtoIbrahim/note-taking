import axios from "axios";
import type { Note, NotePartial, AxiosNotes, UpdateNoteType } from "../utils/types";
import { API_URL } from "./urls";

// const API_URL = "https://note-taking-woad.vercel.app"


export const getQueryNotes = async ({
  pageParam,
}: {
  pageParam: string | null;
}) => {
  const res = await axios.get<AxiosNotes>(`${API_URL}/api/v1/notes`, {
    params: {
      limit: 8,
      cursor: pageParam,
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
  const res = await axios.get<Note>(`${API_URL}/api/v1/all-notes/${id}`, {
    withCredentials: true,
  });
  return res.data;
};

export const addQueryNote = async (newNote: NotePartial) => {
  await axios.post<Note>(`${API_URL}/api/v1/note`, newNote, {
    withCredentials: true,
  });
};

export const updateQueryNote = async ({ id, note }: UpdateNoteType) => {
  await axios.put<Note>(`${API_URL}/api/v1/note/${id}`, note, {
    withCredentials: true,
  });
};

export const deleteQueryNote = async (id: string) => {
  await axios.delete(`${API_URL}/api/v1/note/${id}`, {
    withCredentials: true,
  });
};

export const deleteForeverQueryNote = async (id: string) => {
  await axios.delete(`${API_URL}/api/v1/delete/${id}`, {
    withCredentials: true,
  });
};

export const archiveQueryNote = async (id: string) => {
  await axios.put(
    `${API_URL}/api/v1/archives/${id}`,
    {},
    {
      withCredentials: true,
    },
  );
};

export const getArchiveNotes = async ({
  pageParam,
}: {
  pageParam: string | null;
}) => {
  const res = await axios.get<AxiosNotes>(`${API_URL}/api/v1/archives`, {
    params: { limit: 6, cursor: pageParam },
    withCredentials: true,
  });
  return res.data;
};

export const unarchiveNote = async (id: string) => {
  await axios.put(
    `${API_URL}/api/v1/unarchive/${id}`,
    {},
    {
      withCredentials: true,
    },
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
  const res = await axios.get<AxiosNotes>(`${API_URL}/api/v1/search`, {
    params: { search, cursor: pageParam, limit: 6 },
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
  const res = await axios.get<string[]>(`${API_URL}/api/v1/tags`, {
    params: { search },
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
  const res = await axios.get<AxiosNotes>(`${API_URL}/api/v1/trash`, {
    params: { limit: 3, search, cursor: pageParam },
    withCredentials: true,
  });

  return res.data;
};

export const restoreQueryNote = async ({ id, note }: UpdateNoteType) => {
  await axios.put<Note>(`${API_URL}/api/v1/restore/${id}`, note, {
    withCredentials: true,
  });
};
