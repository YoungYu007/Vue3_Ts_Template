<template>
    <main class="app-main">
        <RouterView v-slot="{ Component, route }">
            <Transition
                mode="out-in"
                name="fade"
            >
                <KeepAlive :include="['/']">
                    <Component
                        :is="Component"
                        v-if="!route.meta.link"
                        :key="route.name"
                    />
                </KeepAlive>
            </Transition>
        </RouterView>
    </main>
</template>

<script lang="ts" setup>
defineOptions({
    name: "AppMain"
});
</script>

<style scoped>

</style>
