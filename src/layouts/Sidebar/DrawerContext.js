import { createContext } from "react";

const none = 0;
const less = 1;
const full = 2;

const value = {
  openLevels: { none: none, less: less, full: full },
  defaultOpenLevel: full,
};

export const DrawerContext = createContext(value);
