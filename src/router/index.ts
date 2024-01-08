import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("@/pages/404"),
                meta: {
                    title: "Home",
                    icon: "home"
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
        component: () => import("../views/AboutView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export { routes, router as default };
