import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: { port: 8080 },
  resolve: { alias: { "@": `${process.cwd()}/src` } },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    // src/server.ts envolve a renderização no servidor com a página de erro própria
    tanstackStart({ server: { entry: "server" } }),
    nitro(),
    viteReact(),
  ],
});
