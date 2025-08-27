// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";
import { componentTagger } from "lovable-tagger";

// Helper to know if we're under `vercel dev`
// Vercel sets process.env.VERCEL=1
const IS_VERCEL = !!process.env.VERCEL;

export default defineConfig(({ mode }) => ({
  server: {
    // When running `vercel dev`, it passes --port $PORT (usually 3000)
    // Let Vercel control the port by not forcing one.
    // If you're running `npm run dev` (Vite alone), we'll fallback to 8080.
    port: IS_VERCEL ? undefined : 8080,
    host: "::",

    // Only use the proxy when Vite runs alone (not in vercel dev).
    // In that setup, your functions run on :3000 (via `vercel dev`)
    // and the Vite dev server runs on :8080.
    proxy: IS_VERCEL
      ? undefined
      : {
          "/api": {
            target: "http://localhost:3000",
            changeOrigin: true,
          },
        },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
