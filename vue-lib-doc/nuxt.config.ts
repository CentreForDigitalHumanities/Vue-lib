// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    // components: [
    //     '~/components',
    // ],
    typescript: {
        strict: true,
        typeCheck: true,
    },

    modules: ["@nuxt/eslint"],
});
