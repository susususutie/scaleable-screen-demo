import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {},
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
