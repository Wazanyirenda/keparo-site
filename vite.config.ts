import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
=======

// https://vitejs.dev/config/
export default defineConfig({
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
=======
  plugins: [react()],
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
}));
=======
});
>>>>>>> ccb413f743a5c8e6e61b3637c3abaff78b47081c
