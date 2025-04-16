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
        main: resolve(__dirname, "index.html"), // Correct entry point
        addToCart: resolve(__dirname, "addtocart.html"),
        contact: resolve("C:/Users/pooja/OneDrive/Desktop/ecommerce_project/contact.html"),
        // Add other HTML files here as needed
      },
    },
  },
});
