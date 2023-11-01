import { resolve } from "node:path"

export default defineNuxtConfig({
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@hebilicious/authjs-nuxt", '@vueuse/nuxt'],
  authJs: {
    verifyClientOnEveryRequest: true,
    guestRedirectTo: "/", // where to redirect if the user is not authenticated
    authenticatedRedirectTo: "/dashboard", // where to redirect if the user is authenticated
    baseUrl: "http://localhost:3000" // should be something like https://www.my-app.com
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

});
