<script lang="ts" setup generic="T extends string | number">
const props = withDefaults(defineProps<{
    options: [T, string][];
    modelValue: T;
    containerClasses?: string;
}>(), {
    containerClasses: "",
});

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  // Twice, because Vue is dumb
    (
        e: "update:modelValue",
        value: T
    ): void;
    (
        e: "update:model-value",
        value: T
    ): void;
}>();
</script>

<template>
    <div>
        <div
            v-for="[value, label] in options"
            :key="value"
            class="form-check"
            :class="containerClasses"
        >
            <input
                :id="'id_' + value"
                type="radio"
                class="form-check-input"
                :value="value"
                :checked="modelValue == value"
                @click="emits('update:model-value', value)"
            />
            <label class="form-check-label" :for="'id_' + value">{{
                label
            }}</label>
        </div>
    </div>
</template>
