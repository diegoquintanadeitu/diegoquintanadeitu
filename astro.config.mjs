// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://diegoquintanadeitu.github.io",
  base: "/",
  output: "static",
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: "security-headers",
        configureServer(server) {
          server.middlewares.use((_req, res, next) => {
            res.setHeader(
              "Content-Security-Policy",
              "frame-ancestors 'self' https://diegoquintana.ar https://*.diegoquintana.ar",
            );
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@/ui": fileURLToPath(new URL("./src/ui", import.meta.url)),
        "@/db": fileURLToPath(new URL("./src/db", import.meta.url)),
        "@/docs": fileURLToPath(new URL("./docs", import.meta.url)),
        "@/pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
        "@/mocks": fileURLToPath(new URL("./src/mocks", import.meta.url)),
        "@/services": fileURLToPath(new URL("./src/services", import.meta.url)),
        "@/types": fileURLToPath(new URL("./src/types", import.meta.url)),
      },
    },
  },
});
