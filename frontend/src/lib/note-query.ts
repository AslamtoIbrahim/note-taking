import axios from "axios";
import type { Note, NotePartial, Notes, UpdateNoteType } from "../utils/types";


// const API_URL = "https://note-taking-woad.vercel.app"
const API_URL = window.location.hostname === "localhost"
  ? "http://localhost:3000"
  : "https://note-taking-woad.vercel.app";

export const getQueryNotes = async ({
  pageParam,
}: {
  pageParam: string | null;
}) => {
  const res = await axios.get<Notes>(`${API_URL}/api/v1/notes`, {
    params: {
      limit: 8,
      cursor: pageParam,
    },
    // headers: {
    //   Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    // },
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
    `${API_URL}/api/v1/all-notes/${id}`,
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
  await axios.post<Note>(`${API_URL}/api/v1/note`, newNote, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
};



export const updateQueryNote = async ({ id, note }: UpdateNoteType) => {
  await axios.put<Note>(`${API_URL}/api/v1/note/${id}`, note, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
};

export const deleteQueryNote = async (id: string) => {
  await axios.delete(`${API_URL}/api/v1/note/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
};

export const deleteForeverQueryNote = async (id: string) => {
  await axios.delete(`${API_URL}/api/v1/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
};

export const archiveQueryNote = async (id: string) => {
  await axios.put(`${API_URL}/api/v1/archives/${id}`, {}, {
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
  const res = await axios.get<Notes>(`${API_URL}/api/v1/archives`, {
    params: { limit: 6, cursor: pageParam },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });
  return res.data;
};

export const unarchiveNote = async (id: string) => {
  await axios.put(`${API_URL}/api/v1/unarchive/${id}`,{},
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
  const res = await axios.get<Notes>(`${API_URL}/api/v1/search`, {
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
  const res = await axios.get<string[]>(`${API_URL}/api/v1/tags`, {
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
  const res = await axios.get<Notes>(`${API_URL}/api/v1/trash`, {
    params: { limit: 3, search, cursor: pageParam },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
    },
    withCredentials: true,
  });

  return res.data;
};

export const restoreQueryNote = async ({ id, note }: UpdateNoteType) => {
  await axios.put<Note>(`${API_URL}/api/v1/restore/${id}`, note,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("bearer_token")}`,
      },
      withCredentials: true,
    },
  );
};
