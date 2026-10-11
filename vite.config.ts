import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  // o projeto fica em /mnt/c (WSL): sem polling o Vite não percebe arquivos alterados
  server: { port: 8080, watch: { usePolling: true, interval: 300 } },
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
