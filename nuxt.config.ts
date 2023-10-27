// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ['@sidebase/nuxt-auth'],
  // router: {
  //   middleware: ['auth']
  // },

  auth: {
    // origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true
},

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  

});
