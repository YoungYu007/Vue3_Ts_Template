<template>
    <div :class="['sidebar', { 'show-logo': showLogo }]">
        <logo />
        <t-menu>
            <item
                v-for="item in items"
                :key="item.name"
                :base-path="item.path"
                :item="item"
            />
        </t-menu>
    </div>
</template>

<script lang="ts" setup>
import Logo from "./logo";
import { routes } from "@/router";
import Item from "./item.vue";

defineOptions({
    name: "Sidebar"
});

const showLogo = ref(false);
console.log(routes);
const items = routes.map(route => {
    if (!route.meta) {
        route.meta = {
            title: route.name,
            icon: "app"
        };
    }

    return route;
});
</script>

<style lang="less" scoped></style>
