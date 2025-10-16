import axios from "axios";
import type { AxiosLink, AxiosNoteLink, TagLink } from "../utils/types";
import { API_URL } from "./urls";

export const addLink = async ({ noteId, tagId }: AxiosLink) => {
  await axios.put(
    `${API_URL}/api/v1/link`,
    { noteId, tagId },
    { withCredentials: true },
  );
};

export const deleteLink = async ({ noteId, tagId }: AxiosLink) => {
  await axios.delete(`${API_URL}/api/v1/link`, {
    params: { noteId, tagId },
    withCredentials: true,
  });
};

export const populateTags = async ({ queryKey }: { queryKey: string[] }) => {
  const [, noteId] = queryKey;
  const res = await axios.get<TagLink[]>(`${API_URL}/api/v1/tag-links/`, {
    params: { noteId },
    withCredentials: true,
  });
  return res.data;
};

export const populateNotes = async ({
  pageParam,
  queryKey,
}: {
  pageParam: string | null;
  queryKey: string[];
}) => {
  const [, tagId] = queryKey;
  const res = await axios.get<AxiosNoteLink>(`${API_URL}/api/v1/note-links/`, {
    params: {cursor: pageParam, tagId, limit: 5 },
    withCredentials: true,
  });
  return res.data;
};
