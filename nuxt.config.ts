// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
  devtools: { enabled: true },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },

  devServer:{
    host:"0.0.0.0"
  }

  // pwa: {
  //   manifest: {
  //     name: "arteased",
  //     short_name: "nuxt",
  //     theme_color: "#fff",
  //     background_color: "#fff",
  //     display: "standalone",
  //     orientation: "portrait",
  //     scope: "/",
  //     start_url: "/",
  //     icons: [
  //       {
  //         src: "images/icons/arteasedlogo148x200.png",
  //         sizes: "96x96",
  //         type: "image/png"
  //       },
  //       {
  //         src: "images/icons/arteasedlogo148x200.png",
  //         sizes: "128x128",
  //         type: "image/png"
  //       },
  //       {
  //         src: "images/icons/arteasedlogo148x200.png",
  //         sizes: "144x200",
  //         type: "image/png"
  //       },
  //     ]
  //   },
  //   devOptions: {
  //     enabled: true,
  //   }
  // }
})
