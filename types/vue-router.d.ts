/**
 * Created by YNF on 2024-01-08 20:21.
 * @desc: 继承来自 vue-router 中的 RouteMeta 来为 meta 字段添加类型
 */

/* https://router.vuejs.org/zh/guide/advanced/meta.html */
import "vue-router";

// 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
export {};

declare module "vue-router" {
    interface RouteMeta {
        title: string;
        icon: string;
        hidden?: boolean;
    }
}
