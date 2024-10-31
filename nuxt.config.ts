// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        // { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@nuxtjs/supabase"],
  devtools: { enabled: true },
  ssr: true,
  
  

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },

  devServer:{
    host:"0.0.0.0"
  },
  
  supabase: {
    redirectOptions: {
      login: '/login_register',
      callback: '/confirm',
      include: [],
      exclude: ['/', '/explore', '/rules', '/fulldetailartwork', '/cart'],
      cookieRedirect: false,
    }
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
