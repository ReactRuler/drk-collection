import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../assets",
    rollupOptions: {
      output: {
        entryFileNames: "react-app.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "react-asset-index.css";
          }
          return "react-asset-[name].[ext]";
        }
      }
    },
    emptyOutDir: false
  },
  publicDir: "../assets/media"
});
