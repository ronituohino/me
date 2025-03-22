import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://ronituohino.com",
  integrations: [solidJs(), sitemap()],

  vite: {
    optimizeDeps: {
      include: ["./assets/aseprite-js.bundle.js"],
    },
    build: {
      commonjsOptions: {
        include: ["./assets/aseprite-js.bundle.js"],
      },
    },
  },

  // Enable passing class names from parent to child components
  scopedStyleStrategy: "class",
});
