<script lang="ts" generic="T extends string | number" setup>
import { BSMultiSelect } from ".";
import { ref } from "vue";
import BSButton from "./BSButton.vue";
import useGeneratedId from "@/cdh-vue-lib/composables/useGeneratedId";

// Don't use interfaces for Props / Emits here, as they somehow generate errors
// in this generic component.
const props = withDefaults(defineProps<{
    label: string;
    options: [T, string][];
    modelValue: T[];
}>(), {});

const emit = defineEmits<{
    (e: "update:modelValue", value: T | T[]): void
}>();

const id = ref(useGeneratedId());
</script>

<template>
    <div class="dropdown dropdown-select is-hoverable">
        <BSButton
            class="dropdown-toggle"
            aria-haspopup="true"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <span class="me-2">{{ label }}</span>
        </BSButton>
        <div :id="id" class="dropdown-menu" role="menu">
            <div class="dropdown-content ps-4">
                <BSMultiSelect
                    :options="options"
                    :model-value="modelValue"
                    container-classes="dropdown-item"
                    @update:model-value="$emit('update:modelValue', $event)"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.dropdown.dropdown-select {
    .dropdown-menu {
        padding-top: 0; // Small UI fix
    }

    label {
        width: 100%;
    }
}
</style>
