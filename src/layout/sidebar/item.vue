<template>
    <template v-for="i in items" :key="i.path">
        <t-menu-item
            v-if="!i.children"
            :value="i.name"
        >
            <template #icon>
                <t-icon :name="i.meta.icon" />
            </template>
            {{ i.meta.title }}
        </t-menu-item>

        <t-submenu v-else :value="i.path">
            <template #icon>
                <t-icon :name="i.meta.icon" />
            </template>
            <template #title>
                <span>{{ i.meta.title }}</span>
            </template>

            <item :items="i.children" />
        </t-submenu>
    </template>
</template>

<script lang="ts" setup>
import type { RouteMeta, RouteRecordRaw } from "vue-router";
import type { PropType } from "vue";

type RouteItem = { meta: RouteMeta } & RouteRecordRaw;

defineOptions({
    name: "Item"
});

const props = defineProps({
    items: {
        type: Array as PropType<RouteItem[]>,
        required: true
    },
    isNest: {
        type: Boolean,
        default: false
    },
    basePath: {
        type: String,
        default: ""
    }
});

console.log("items", props.items);
</script>

<style lang="less" scoped>
// 防止图标大小被压缩
.t-icon {
    flex-shrink: 0;
}
</style>
