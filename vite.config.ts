// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // Use '/mywebsite/' only for production (GitHub Pages)
  base: mode === "production" ? "/mywebsite/" : "/",

  server: {
    host: "localhost", // or "0.0.0.0" to expose on LAN
    port: 8080,
  },

  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
