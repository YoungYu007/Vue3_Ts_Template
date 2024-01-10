<template>
    <component :is="type">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { isExternal } from "@/utils/validate";

const props = defineProps({
    to: {
        type: [String, Object],
        required: true
    }
})

const isExt = computed(() => {
    return isExternal(props.to);
})

const type = computed(() => {
    return isExt.value ? "a" : "router-link";
})

const lineProps = () => {
    if (isExt.value) {
        return {
            href: props.to,
            target: "_blank",
            rel: "noopener"
        }
    }

    return {
        to: props.to
    }
}
</script>