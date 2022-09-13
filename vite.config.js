import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.CI ? "/Chatti/" : undefined,
  server: {
    port: 3000,
  },
  plugins: [react()],
});
