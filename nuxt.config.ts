export default defineNuxtConfig({
    srcDir: "app/",
    modules: ["@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            Inter: [100, 200, 300, 400, 600, 700, 800, 900],
            Roboto: [400, 500, 700],
        },
        display: "swap",
    },
    compatibilityDate: "2025-07-15",
    devtools: {enabled: true},
    css: ["~/assets/scss/main.scss",'~/assets/css/dana.css'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/scss/variables.scss" as *;`,
                },
            },
        },
    },
    app: {
        head: {
            htmlAttrs: {dir: "rtl", lang: "fa"},
            link: [
                {
                    rel: "stylesheet",
                    as: "font",
                    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
                },
            ],
        },
    },
});
