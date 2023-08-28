import {defineConfig} from "vite";
import {resolve} from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
          "@/": resolve(__dirname, "src"),
        },
      },
    build: {
        cssCodeSplit: true,
        minify: 'esbuild',
        lib: {
            // src/index.ts is where we have exported the component(s)
            entry: resolve(__dirname, "src/cdh-vue-lib.ts"),
            name: "CDHVueLib",
            // the name of the output files when the build is run
            fileName: (format) => `cdh-vue-lib.${format}.js`,
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                },
                banner: "/*\n" +
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
            },
        },
    },
});
