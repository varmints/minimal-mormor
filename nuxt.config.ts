// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/content",
  ],
  i18n: {
    baseUrl: "https://mormor.dev",
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "pl",
        iso: "pl-PL",
      },
    ], // used in URL path prefix
    defaultLocale: "en", // default locale of your project for Nuxt pages and routings
  },
});
