import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addQueryNote,
  archiveQueryNote,
  deleteQueryNote,
  getArchiveNotes,
  getQueryNoteById,
  unarchiveNote,
  updateQueryNote,
} from "../lib/note-query";
import { toast } from "sonner";

export const useQueryNote = (id?: string) => {
  return useQuery({
    queryKey: ["note", id] as [string, string],
    queryFn: getQueryNoteById,
    enabled: !!id,
  });
};

export const useAddNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addQueryNote,
    onSuccess: () => {
      toast.success("note added");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error) => {
      toast.error("something went wrong while add a new note");
      console.error(error);
    },
  });
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateQueryNote,
    onSuccess: () => {
      toast.success("note updated");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error) => {
      toast.error("something went wrong while update a new note");
      console.error(error);
    },
  });
};

export const useDelteNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteQueryNote,
    onSuccess: () => {
      toast.success("note delete");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error) => {
      toast.error("something went wrong while delete a new note");
      console.error(error);
    },
  });
};

export const useArchiveNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: archiveQueryNote,
    onSuccess: () => {
      toast.success("note archive");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error) => {
      toast.error("something went wrong while archive a new note");
      console.error(error);
    },
  });
};

export const useArchives = () => {
  return useInfiniteQuery({
    queryKey: ["archives"],
    initialPageParam: null,
    queryFn: getArchiveNotes,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useUnarchiveNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unarchiveNote,
     onSuccess: () => {
      toast.success("note unarchive");
      queryClient.invalidateQueries({ queryKey: ["archives"] });
    },
    onError: (error) => {
      toast.error("something went wrong while unarchive a note");
      console.error(error);
    },
  })
};

