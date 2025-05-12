// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
    rules: {
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    // Allow void elements to be self-closing.
                    void: "always",
                },
            },
        ],
    },
});
