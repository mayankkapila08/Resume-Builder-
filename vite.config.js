import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["jspdf", "html2canvas"],
  },
  build: {
    rollupOptions: {
      external: ["jspdf"], // 👈 Add this line
    },
    commonjsOptions: {
      include: [/jspdf/, /node_modules/], // 👈 Ensures CommonJS modules work
    },
  },
});
