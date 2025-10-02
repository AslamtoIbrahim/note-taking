import React, { createContext } from "react";

type NoteLayout = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const LayoutContext = createContext<NoteLayout>({
  search: "",
  setSearch: () => {},
  isVisible: false,
  setIsVisible: () => {},
   
});

// const NoteContext = createContext<NoteSearch | null>(null);

export default LayoutContext;
