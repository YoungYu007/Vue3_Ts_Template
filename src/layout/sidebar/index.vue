<template>
    <div :class="['sidebar', { 'show-logo': showLogo }]">
        <logo />
        <!-- tdesign ui -->
        <t-menu>
            <item :items="routes" />
        </t-menu>
        <!-- naive ui -->
        <!-- <n-menu
            :options="menus"
            key-field="path"
            label-field="title"
            icon-field="icon"
            children-field="children"
        /> -->
        <!-- 折叠 -->
        <div class="collapse">
            <div class="collapse-icon" @click="showLogo =!showLogo">
                <i class="iconfont icon-menu" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Logo from "./logo";
import Item from "./item.vue";
import { routes } from "@/router";
import type { RouteMeta } from "vue-router";

defineOptions({
    name: "Sidebar"
});

const genRoute = (items) => {
    return items.map((item) => {
        item.title = item?.meta?.title;
        item.icon = item?.meta?.icon;

        if (item.children) {
            item.children = genRoute(item.children);
        }

        return item
    })
}

const showLogo = ref(false);
const menus = genRoute(routes);
console.log(menus);
</script>

<style lang="less" scoped>
.collapse {
    height: 30px;
}
</style>
