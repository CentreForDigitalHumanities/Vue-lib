<script lang="ts" setup>
import { BSMultiSelect } from ".";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

interface Props {
    label: string;
    options: [string | number, string][];
    modelValue: string[] | number[];
}
const props = withDefaults(defineProps<Props>(), {});

// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
    (
        e: "update:modelValue",
        value: string | number | string[] | number[]
    ): void;
}>();

const id = ref(uuidv4());
</script>

<template>
    <div class="dropdown dropdown-select is-hoverable">
        <Button
            class="dropdown-toggle"
            aria-haspopup="true"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <span class="me-2">{{ label }}</span>
        </Button>
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
@import "node_modules/uu-bootstrap/scss/configuration";
.dropdown.dropdown-select {
    .dropdown-menu {
        padding-top: 0; // Small UI fix
    }

    label {
        width: 100%;
    }
}
</style>
