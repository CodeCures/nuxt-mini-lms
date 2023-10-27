// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  // modules: ['@sidebase/nuxt-auth'],
  modules: ['@sidebase/nuxt-session'],
  // router: {
  //   middleware: ['auth']
  // },



  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  

});
