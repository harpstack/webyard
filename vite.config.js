import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import pages from "./pages.config.js";

let input = {
  main: resolve(__dirname, "index.html"),
};

pages.map((page) => {
  input[page.id] = resolve(__dirname, page.path);
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: input,
    },
  },
});
