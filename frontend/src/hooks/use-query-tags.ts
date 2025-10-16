import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
    addLink,
    deleteLink,
    populateNotes,
    populateTags,
} from "../lib/link-query";

export const useAddLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addLink,
    onSuccess: () => {
      toast.success('link added')
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: (error) => {
      console.error({ error: error });
    },
  });
};

export const useDeleteLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteLink,
    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ["tag", id] });
      toast.success('link deleted')
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: (error) => {
      toast.error("something went wrong");
      console.error({ error: error });
    },
  });
};

export const useTagsLinkToNote = (noteId: string) => {
  return useQuery({
    queryKey: ["links", noteId] as string[],
    queryFn: populateTags,
  });
};

export const useNotsLinkToTag = (tagId: string) => {
  return useInfiniteQuery({
    queryKey: ["links", tagId] as string[],
    queryFn: populateNotes,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  });
};
