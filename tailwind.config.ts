import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: "",
                mystic: "#D45473",
                },
            },
            container: {
              screens: {
                sm: "360px",
                md: "810px",
                lg: "1280px",
                xl: "1440px"
              },
              center: true  
            },
        },
    }