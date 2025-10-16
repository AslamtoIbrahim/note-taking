import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { addTag, deleteTag, getNoteTags } from "../lib/tag-query";

export const useQueryTags = (search: string) => {
  return useInfiniteQuery({
    queryKey: ["tags", search] as string[],
    queryFn: getNoteTags,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useAddQueryTag = (id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTag,
    onSuccess: () => {
      toast.success("a new tag added");
      queryClient.invalidateQueries({ queryKey: ["tag", id] });
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
    onError: (error) => {
      toast.error("something went wrong");
      console.error({ error: error });
    },
  });
};

export const useDeleteQueryTag = (id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTag,
    onSuccess: () => {
      toast.success("a tag deleted");
      queryClient.invalidateQueries({ queryKey: ["tag", id] });
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
    onError: (error) => {
      toast.error("something went wrong");
      console.error({ error: error });
    },
  });
};
