import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // BELANGRIJK: Vervang 'jouw-repo-naam' door de naam van je GitHub repository
  // Voorbeeld: als je repo 'mijn-website' heet, wordt dit: base: '/mijn-website/',
  base: '/Berkvens-and-Meijndershagen-Advies/', 
  
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    // We veranderen dit naar 'dist' zodat GitHub Pages het makkelijk vindt
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,
  },
});

