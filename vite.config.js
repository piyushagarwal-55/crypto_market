import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    fs: {
      strict: false,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        addtocart: resolve(__dirname, "addtocart.html"),
        contact: resolve(__dirname, "contact.html"), // ✅ Now relative
        // Add other pages here if needed
      },
    },
  },
});
