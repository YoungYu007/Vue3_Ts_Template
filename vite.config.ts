import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { TDesignResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            imports: [ "vue", "vue-router", "pinia" ],
            dts: "types/auto-import.d.ts",
            resolvers: [
                TDesignResolver({
                    library: "vue-next"
                })
            ]
        }),
        Components({
            dts: "types/component.d.ts",
            resolvers: [
                TDesignResolver({
                    library: "vue-next"
                })
            ]
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        },
        // 导入时想要省略的扩展名列表
        // 默认：[ ".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json" ]
        // https://cn.vitejs.dev/config/shared-options.html#resolve-extensions
        extensions: [ ".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue" ]
    },
    css: {
        // 指定传递给 CSS 预处理器的选项
        // https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions
        preprocessorOptions: {
            less: {
                additionalData: `@import "src/styles/variables.less";`
            }
        }
    }
});
