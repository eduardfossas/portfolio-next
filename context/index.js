import { createContext } from "react";

export const ScrollContext = createContext({
  scroll: null,
  addCallback: (callback) => {},
  removeCallback: (callback) => {},
});
