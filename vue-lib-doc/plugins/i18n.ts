import { createI18n } from "vue-i18n";

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
});

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(i18n);
});
