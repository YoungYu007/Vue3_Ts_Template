<template>
    <div
        :class="[
            'layout-root',
            {
                'hide-sidebar': !appSidebar.opened,
                'open-sidebar': appSidebar.opened,
                'without-animation': appSidebar.withoutAnimation,
                mobile: device === 'mobile'
            }
        ]"
        :style="{
            '--current-color': theme
        }"
    >
        <!-- 导航栏 -->
        <sidebar class="layout-sidebar" />

        <!-- 主体内容 -->
        <div class="layout-main">
            <div class="main-header">
                header
                <nav-bar />
            </div>

            <app-main class="main-content" />

            <setting />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { AppMain, NavBar, Setting, Sidebar } from "./components";

defineOptions({
    name: "Layout"
});

const theme = ref("light");
const appSidebar = reactive({});
const device = ref("");
</script>

<style lang="less" scoped>
.layout-root {
    height: 100%;
    width: 100%;
    display: flex;

    > .layout-sidebar {
        // width: 200px;
        background: #f0f0f0;
    }

    > .layout-main {
        flex: 1;
        background: #fff;
        display: flex;
        flex-direction: column;

        > .main-header {
            height: 50px;
            background: #f0f0f0;
        }

        > .main-content {
            flex: 1;
            background: #fff;
        }
    }
}
</style>
