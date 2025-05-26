// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    // Bootstrap JS is needed for BSDropdown.
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
                    defer: true,
                }
            ]
        }
    },
    // Enabling SSR breaks Bootstrap JS, which expects document.
    ssr: false,
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    typescript: {
        strict: true,
        typeCheck: true,
    },
    modules: ["@nuxt/eslint"],
    css: ["@/main.scss"],
    build: {
        transpile: [
            "@fortawesome/vue-fontawesome",
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/pro-solid-svg-icons",
            "@fortawesome/pro-regular-svg-icons",
            "@fortawesome/pro-light-svg-icons",
            "@fortawesome/free-brands-svg-icons",
        ],
    },
});
