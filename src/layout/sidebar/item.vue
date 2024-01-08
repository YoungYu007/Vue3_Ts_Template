<template>
    <t-menu-item v-if="!item.children || item.children.length < 1" :value="item.name">
        <template #icon>
            <t-icon :name="item.meta.icon" />
        </template>
        {{ item.meta.title }}
    </t-menu-item>

    <t-submenu v-else :value="item.name">
        <template #icon>
            <t-icon :name="item.meta.icon" />
        </template>
        <template #title>
            <span>{{ item.meta.title }}</span>
        </template>

        <item
            v-for="child in item.children"
            :key="child.name"
            :base-path="child.path"
            :item="child"
        />
    </t-submenu>
</template>

<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router";
import type { PropType } from "vue";

defineOptions({
    name: "Item"
});

defineProps({
    item: {
        type: Object as PropType<RouteRecordRaw>,
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
</script>
