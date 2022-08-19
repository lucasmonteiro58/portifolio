import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Lucas Monteiro - Portfolio",
        short_name: "Lucas Monteiro",
        description: "Meu portifólio de projetos",
        theme_color: "#A1C4FD",
        display: "standalone",
        background_color: "#fff",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      includeAssets: [
        "assets/*.{ttf,woff,eot,woff2}",
        "assets/*.{mp3,svg}",
        "favicon.svg",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      devOptions: {
        enabled: false,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html}", "**/*.{svg,png,jpg,gif}"],
      },
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./path/to/src/locales/**"
      ),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
