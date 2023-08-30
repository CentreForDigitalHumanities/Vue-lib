import {defineConfig} from "vite";
import {resolve} from "path";
import vue from "@vitejs/plugin-vue";
import banner from 'vite-plugin-banner'

const COPYRIGHT_BANNER = "/*!\n" +
"* Copyright 2022, 2023 Utrecht University\n" +
"*\n" +
"* Licensed under the EUPL, Version 1.2 only\n" +
"* You may not use this work except in compliance with the\n" +
"Licence.\n" +
"* A copy of the Licence is provided in the 'LICENCE' file in this project.\n" +
"* You may also obtain a copy of the Licence at:\n" +
"*\n" +
"* https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12\n" +
"*\n" +
"* Unless required by applicable law or agreed to in\n" +
"writing, software distributed under the Licence is\n" +
"distributed on an \"AS IS\" basis,\n" +
"* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n" +
"express or implied.\n" +
"* See the Licence for the specific language governing\n" +
"permissions and limitations under the Licence.\n" +
"*/"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        banner(COPYRIGHT_BANNER)
    ],
    resolve: {
        alias: {
          "@": resolve(__dirname, "./src"),
        },
    },
    build: {
        cssCodeSplit: false,
        minify: 'esbuild',
        lib: {
            entry: {
                'cdh-vue-lib': resolve(__dirname, "src/cdh-vue-lib/index.ts"),
                'components': resolve(__dirname, "src/cdh-vue-lib/components.ts"),
                'composables': resolve(__dirname, "src/cdh-vue-lib/composables.ts"),
            },
            formats: ['es'],
            name: "CDHVueLib",
            // the name of the output files when the build is run
            fileName: (format, entryName) => {
                if (entryName == 'cdh-vue-lib') {
                    return `cdh-vue-lib.${format}.js`
                }
                return `cdh-vue-lib.${entryName}.${format}.js`
            },
        },
        rollupOptions: {
            external: ["vue", "uuid"],
            output: {
                globals: {
                    vue: "Vue",
                    uuid: 'uuid',
                },
            },
        },
    },
});
