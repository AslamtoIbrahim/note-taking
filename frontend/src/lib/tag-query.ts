import axios from "axios";
import type { AxiosTag, Tag } from "../utils/types";
import { API_URL } from "./urls";

type NoteTags = {
  pageParam: string | null;
  queryKey: string[];
};

export const getNoteTags = async ({ pageParam, queryKey }: NoteTags) => {
  const [_, search] = queryKey;
  const res = await axios.get<AxiosTag>(`${API_URL}/api/v1/tags`, {
    params: {
      cursor: pageParam,
      limit: 6,
      search,
    },
    withCredentials: true,
  });

  return res.data;
};

export const addTag = async (title: string) => {
  const res = await axios.put<Tag>(
    `${API_URL}/api/v1/tag`,
    { title },
    { withCredentials: true },
  );

  return res.data
};

export const deleteTag = async (id: string) => {
  await axios.delete(`${API_URL}/api/v1/tag/${id}`, { withCredentials: true });
};
