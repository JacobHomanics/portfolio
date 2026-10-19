import { createContext, useContext } from "react";

type BrowseContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const BrowseContext = createContext<BrowseContextValue | null>(null);

export function useBrowse() {
  const value = useContext(BrowseContext);
  if (!value) throw new Error("useBrowse requires BrowseContext");
  return value;
}
