import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Layout from "@/layout";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Layout,
        meta: {
            title: "首页",
            icon: "app"
        },
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/pages/404"),
                meta: {
                    title: "home",
                    icon: "app"
                }
            }
        ]
    },
    {
        path: "/table",
        component: Layout,
        meta: {
            title: "表格",
            icon: "app"
        },
        children: [
            {
                path: "",
                name: "table",
                component: () => import("@/pages/table"),
                meta: {
                    title: "table",
                    icon: "app"
                }
            }
        ]
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/AboutView"),
        meta: {
            title: "about",
            icon: "app"
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export { routes, router as default };
