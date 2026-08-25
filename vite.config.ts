import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["sennyscakes.onrender.com"],
    },
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});
