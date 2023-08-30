<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    headerClasses?: string;
}>();

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
    (e: "header-icon-clicked"): void;
}>();

const headerClass = computed(() => {
    if (typeof props.headerClasses !== "undefined")
        return "card-header fw-bold " + props.headerClasses;

    return "card-header fw-bold";
});
</script>

<template>
    <div class="card">
        <div v-if="$slots.header" :class="headerClass">
            <slot name="header" />
        </div>
        <div
            v-else-if="$slots.title || $slots.header_icon"
            :class="headerClass"
        >
            <div class="d-flex">
                <div v-if="$slots.title" class="me-auto">
                    <slot name="title" />
                </div>
                <div
                    v-if="$slots.header_icon"
                    class="ms-auto card-header-icon"
                    @click="$emit('header-icon-clicked')"
                >
                    <slot name="header_icon" />
                </div>
            </div>
        </div>
        <div v-if="$slots.image" class="card-image-top">
            <slot name="image" />
        </div>
        <div class="card-body">
            <slot />
        </div>
        <div v-if="$slots.footer" class="card-footer">
            <slot name="footer" />
        </div>
    </div>
</template>

<style scoped>
.card-header-icon {
    cursor: pointer;
}
</style>
