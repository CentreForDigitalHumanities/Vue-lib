<script lang="ts" setup generic="T extends string | number">
import { useInputValue } from "@/cdh-vue-lib";

const props = withDefaults(
    defineProps<{
        options: [T, string][];
        modelValue: T;
        containerClasses?: string;
    }>(),
    {
        containerClasses: "",
    }
);

// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
    // Twice, because Vue is dumb
    (e: "update:modelValue", value: T): void;
    (e: "update:model-value", value: T): void;
}>();

function updateValue(value: string) {
    // Welcome to the wonderful world of WTF TS
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof props.modelValue === "string") emits("update:modelValue", value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    else emits("update:modelValue", Number(value));
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
            <option
                v-for="[value, label] in options"
                :key="value"
                :value="value"
            >
                {{ label }}
            </option>
        </select>
    </div>
</template>
