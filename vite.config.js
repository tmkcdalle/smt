import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // Add allowed hosts
  server: {
    allowedHosts: ["93d7-2406-b400-71-628-8c41-78d8-472b-89af.ngrok-free.app"],
  },
});
