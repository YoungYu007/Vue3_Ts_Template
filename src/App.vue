<template>
    <router-view />
</template>

<script lang="ts" setup>
defineOptions({
    name: "App"
});

onMounted(() => {
    nextTick(() => {
        console.log("onMounted");
    });
});
</script>
