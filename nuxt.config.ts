// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Anik Chandra",
      meta: [

      ],
    },
  },
  srcDir: "./src/",
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-icon'
  ],
  plugins: [
    { src: '~/plugins/aos', mode: 'client', ssr: false }
  ],
  build: {
    // ...
    transpile: ["nuxt-child"],
  },
  css: [
    // '~/assets/css/main.css',
    "~/assets/css/main.css"
  ],
});
