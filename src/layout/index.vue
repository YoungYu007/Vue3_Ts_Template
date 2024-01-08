<template>
    <div class="layout-root">
        <!-- 导航栏 -->
        <Sidebar class="layout-sidebar" />

        <!-- 主体内容 -->
        <div class="layout-main">
            <div class="main-header">
                header
            </div>

            <AppMain class="main-content" />

            <Setting />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { AppMain, Setting, Sidebar } from "./components";

defineOptions({
    name: "Layout"
});
</script>

<style lang="less" scoped>
.layout-root {
    height: 100%;
    width: 100%;
    display: flex;

    > .layout-sidebar {
        width: 200px;
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
