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
                sm: "320px",
                md: "768px",
                lg: "1024px",
                xl: "1440px",
              },
              center: true  
            },
        },
    }