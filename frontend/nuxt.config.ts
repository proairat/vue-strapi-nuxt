// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.css", "~/assets/styles/styles.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "@pinia/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/eslint-module",
  ],
  vite: {
    ssr: {
      
    }
  }
});
