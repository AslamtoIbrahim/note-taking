import { useState, type ReactNode } from "react";
import LayoutContext from "./layout-context";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const value = {
    search,
    setSearch,
    isVisible,
    setIsVisible,
  };
  return <LayoutContext value={value}>{children}</LayoutContext>;
};

export default LayoutProvider;
