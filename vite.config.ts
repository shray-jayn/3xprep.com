import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // "true" listens on all interfaces (IPv4 & IPv6) and is cross-platform.
    // If you specifically want IPv6, you can use host: '::'
    host: true,
    port: 8080,
    // strictPort: true, // uncomment if you don't want Vite to pick another port
  },
  plugins: [
    react(),
    // Add dev-only plugins like this:
    ...(mode === "development"
      ? [
          // e.g. eslintPlugin(), checker({ typescript: true }), etc.
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
