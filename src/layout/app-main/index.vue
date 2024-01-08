<template>
    <main class="app-main">
        <router-view v-slot="{ Component, route }">
            <transition mode="out-in" name="fade">
                <keep-alive :include="['/']">
                    <component
                        :is="Component"
                        v-if="!route.meta.link"
                        :key="route.name"
                    />
                </keep-alive>
            </transition>
        </router-view>
    </main>
</template>

<script lang="ts" setup>
defineOptions({
    name: "AppMain"
});
</script>

<style scoped></style>
