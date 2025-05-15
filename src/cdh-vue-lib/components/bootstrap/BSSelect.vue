<script lang="ts" generic="T extends string | number | null" setup>
import { computed } from "vue";
import useInputValue from "../../composables/useInputValue";

type BSSelectOption<T> = [T, string];

const props = withDefaults(
    defineProps<{
        options: BSSelectOption<T>[];
        modelValue: T;
        containerClasses?: string;
        placeholder?: string;
    }>(),
    {
        containerClasses: "",
        placeholder: undefined,
    },
);

const emit = defineEmits<{
    (e: "update:model-value", value: T): void;
}>();

// We cannot use null as a value in the template, because it gives a valueless
// option element, leading to weird behaviour.
// Therefore, we use a special string value for in the template instead.
const nullValue = "___NULL_VALUE___" as const;

// Map null from props.modelValue to the special string value.
const modelValue = computed(() => {
    return props.modelValue === null ? nullValue : props.modelValue;
});

// Map null from props.options to the special string value.
const selectOptions = computed<BSSelectOption<string | number>[]>(() => {
    return props.options.map((optionPair) => {
        const [value, label] = optionPair;
        return [value === null ? nullValue : value, label];
    });
});

function updateValue(value: string): void {
    // The value is always a string, but we want to emit the original value
    // (with the original type) to the parent component.
    // Therefore, we look up the original value in the options array.
    const foundOptionPair = props.options.find((optionPair) => {
        if (value === nullValue) {
            return optionPair[0] === null;
        }
        return String(optionPair[0]) === value;
    });

    if (foundOptionPair) {
        emit("update:model-value", foundOptionPair[0]);
    }
}
</script>

<template>
    <div>
        <select
            class="form-select"
            :class="containerClasses"
            :value="modelValue"
            @change="updateValue(useInputValue($event))"
        >
            <option v-if="placeholder" disabled :value="''">
                {{ placeholder }}
            </option>
            <option
                v-for="[value, label] in selectOptions"
                :key="value"
                :value="value"
            >
                {{ label }}
            </option>
        </select>
    </div>
</template>
