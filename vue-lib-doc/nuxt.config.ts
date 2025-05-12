// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Enabling SSR breaks Bootstrap JS, which expects document.
    ssr: false,
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    components: ["~/../dist/cdh-vue-lib"],
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
