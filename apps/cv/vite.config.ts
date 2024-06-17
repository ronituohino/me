import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: ["../.."],
    },
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
