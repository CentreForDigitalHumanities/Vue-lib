<script lang="ts" setup>
import useGeneratedId from "@/cdh-vue-lib/composables/useGeneratedId";
import { BSButton } from "../../components/bootstrap";
import { computed } from "vue";

interface Props {
    id?: string | null;
    variant?:
        | "primary"
        | "link"
        | "info"
        | "success"
        | "warning"
        | "danger"
        | "light"
        | "dark";
}

const props = withDefaults(defineProps<Props>(), {
    id: "",
    variant: "primary",
});

const elementId = computed(() => {
    return props.id ?? useGeneratedId();
});
</script>

<template>
    <div class="dropdown">
        <BSButton
            :id="elementId"
            :variant="variant"
            class="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <slot name="button" />
        </BSButton>
        <ul class="dropdown-menu" :aria-labelledby="elementId">
            <slot />
        </ul>
    </div>
</template>
