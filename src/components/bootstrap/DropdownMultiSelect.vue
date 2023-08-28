<script lang="ts" setup>
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
</script>

<template>
    <div class="dropdown dropdown-select is-hoverable">
        <div class="dropdown-trigger">
            <button
                class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu4"
            >
                <span>{{ label }}</span>
                <Icon icon="angle-down" />
            </button>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <MultiSelect
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

    .dropdown-item {
        &:hover {
            background: $primary;
            color: color-contrast($primary);
        }
    }

    label {
        width: 100%;
    }
}
</style>
