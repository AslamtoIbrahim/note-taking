import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import {
  addQueryNote,
  archiveQueryNote,
  deleteForeverQueryNote,
  deleteQueryNote,
  getArchiveNotes,
  getQueryNoteById,
  getQueryNotes,
  getTrashNotes,
  restoreQueryNote,
  searchNotes,
  unarchiveNote,
  updateQueryNote,
} from "../lib/note-query";

export const useInfiniteQueryNotes = () => {
  return useInfiniteQuery({
    queryKey: ["notes"],
    queryFn: getQueryNotes,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useQueryNote = (id?: string) => {
  return useQuery({
    queryKey: ["note", id] as string[],
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

export const useUpdateNote = (id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateQueryNote,
    onSuccess: () => {
      toast.success("note updated");
      queryClient.invalidateQueries({ queryKey: ["note", id] });
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (error) => {
      toast.error("something went wrong while update a new note");
      console.error(error);
    },
  });
};

export const useDelteNote = (id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteQueryNote,
    onSuccess: () => {
      toast.success("note delete");
      queryClient.invalidateQueries({ queryKey: ["archives"] });
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      queryClient.removeQueries({ queryKey: ["note", id] });
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
      queryClient.removeQueries({ queryKey: ["note"] });
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
  });
};

export const useSearchNote = (search: string) => {
  return useInfiniteQuery({
    queryKey: ["search", search] as [string, string],
    initialPageParam: null,
    queryFn: searchNotes,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useTrashNote = (search: string) => {
  return useInfiniteQuery({
    queryKey: ["trash", search] as [string, string],
    initialPageParam: null,
    queryFn: getTrashNotes,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useRestoreNote = (search: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: restoreQueryNote,
    onSuccess: () => {
      toast.success("note restored");
      queryClient.invalidateQueries({ queryKey: ["trash", search] });
    },
    onError: (error) => {
      toast.error("something went wrong while restoring a new note");
      console.error(error);
    },
  });
};

export const useDeleteForeverNote = (search: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteForeverQueryNote,
    onSuccess: () => {
      toast.success("note restored");
      queryClient.invalidateQueries({ queryKey: ["trash", search] });
    },
    onError: (error) => {
      toast.error("something went wrong while restoring a new note");
      console.error(error);
    },
  });
};
