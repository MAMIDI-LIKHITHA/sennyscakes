import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["sennyscakes.onrender.com"],
    },
  },

  nitro: {
    preset: "node-server",
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});
