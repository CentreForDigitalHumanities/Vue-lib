<script lang="ts" setup>
import {v4 as UUIDv4} from "uuid";
import {BSButton} from "@/cdh-vue-lib/components/bootstrap";
import {computed} from "vue";


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
    id: null,
    variant: "primary",
});

const elId = computed(() => {
    if (props.id !== null) return props.id;

    return "id_" + UUIDv4().toString();
});
</script>

<template>
    <div class="dropdown">
        <BSButton
            :id="elId"
            :variant="variant"
            class="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <slot name="button"/>
        </BSButton>
        <ul class="dropdown-menu" :aria-labelledby="elId">
            <slot/>
        </ul>
    </div>
</template>

<style scoped></style>
